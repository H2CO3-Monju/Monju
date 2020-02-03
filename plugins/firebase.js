import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBm4g9bXZoYiMtPT2bPxd0DxvSMlkf-Yts',
    authDomain: 'monju-70d76.firebaseapp.com',
    databaseURL: 'https://monju-70d76.firebaseio.com',
    projectId: 'monju-70d76',
    storageBucket: 'monju-70d76.appspot.com',
    messagingSenderId: '291661632877',
    appId: '1:291661632877:web:073ea490981e5752037664'
  })
}

export default firebase
