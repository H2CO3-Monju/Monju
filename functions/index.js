const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
admin.initializeApp(functions.config().firebase);

const algoliasearch = require("algoliasearch")
const ALGOLIA_ID = functions.config().algolia.app_id
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key
const ALGOLIA_INDEX_NAME = "Monju"
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

// algolia全文検索API利用関数// コレクションに新規レコードが追加されると起動
exports.onProductCreated = functions.firestore.document('study_group_id/{id}').onCreate((snap, context) => {
  const data = snap.data()
  data.objectID = context.params.id
  return index.saveObject(data)
})

// algolia全文検索API利用関数// コレクションのレコードが削除されると起動
exports.onPostDeleted = functions.firestore.document('study_group_id/{id}').onDelete((snap, context) => {
  // Index用オブジェクトを削除
  return index.deleteObject(snap.id)
})

// algolia全文検索API利用関数// コレクションのレコードが更新されると起動
exports.onPostUpdated = functions.firestore.document('study_group_id/{id}').onUpdate((change, context) => {
  const objectID = change.after.id
  const newData = change.after.data();
  return index.saveObject({
    objectID,
    ...newData
  })
})

const checkUid = (uid) => {
  if(uid.length < 5) {
    throw new functions.https.HttpsError('invalid-argument','UserID needs 5 characters at least.');
  } else if( !(uid.match(/^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d-_]+$/)) ) {
    // 半角英字と半角数字を含んでいないか、ハイフンとアンダースコア以外の文字を使用している場合
    // 実例: (aBcCd), (11223), (aab_-) => エラー, (aa1_-),(AAa11) => 許可
    // 正規表現: 参考URL(https://qiita.com/sea_ship/items/7c8811b5cf37d700adc4)
    //                (https://qiita.com/ikmiyabi/items/12d1127056cdf4f0eea5)
    //                (https://qiita.com/mpyw/items/886218e7b418dfed254b)
    const text =  'The userId needs half-width English and numbers characters.\n'+
                  'The only symbols you can use are hyphens and underscores.';
    throw new functions.https.HttpsError('invalid-argument',text);
  }
}

const checkPassword = (password) => {
  // 6文字未満のパスワードはfirebase側で自動でエラーを吐いてくれる
  if(50 < password.length) {
    throw new functions.https.HttpsError('invalid-argument','Please input password 50 characters or less.');
  } else if( !(password.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/)) ) {
    // 半角英大文字、半角英小文字、数字のいずれかが一つでも存在しないか、それ以外の文字が入力された場合
    // 実例: (Abc-01), (abc001) => エラー, (Abc001) => 許可
    const text = 'The password only needs half-width uppercase English, lowercase, numbers characters.';
    throw new functions.https.HttpsError('invalid-argument',text);
  }
}

const createUser = data => {
  return admin.auth().createUser({
    uid      : data.uid,
    email    : data.email,
    password : data.password
  }).then((userRecord) => {
    console.log(userRecord);
    console.log('Successfully created new user:', userRecord.uid);
    return {uid: userRecord.uid};
  }).catch((error) => {
    console.log('Error creating new user:', error);
    throw new functions.https.HttpsError('internal',error.message);
  });
}

exports.registUser = functions.https.onCall((data, context) => {
  checkUid(data.uid);
  checkPassword(data.password);
  return createUser(data);
});