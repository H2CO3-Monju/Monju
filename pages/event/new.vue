<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <div class="event-img-wrap">
          <div class="event-img">
            <label class="image-icon-wrap">
              <span id="image-icons-span" class="image-icons">
                <i
                  class="far fa-image image-icons-fontawesome"
                  aria-hidden="true"
                ></i>
              </span>
              <img id="preview" class="event-image" />
              <input
                id="eventImg"
                class="hidden"
                type="file"
                name="s_file"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div class="title-tag">
          <div class="title-tag__title">
            <h2>タイトル</h2>
            <input
              type="text"
              class="title-tag__input-title lightblue-input"
              placeholder="簡潔かつ目が惹かれるようなタイトルを！"
            />
          </div>
          <div class="title-tag__tag">
            <h2>タグ</h2>
            <input
              type="text"
              class="title-tag__input-title--tag lightblue-input"
              placeholder="入力してください"
            />
            <p><small>※タグの追加は5つまでです</small></p>
          </div>
          <ul class="tags">
            <li class="tags__tag">
              <i class="fas fa-times tags__fontawesome"></i>javascript
            </li>
            <li class="tags__tag">
              <i class="fas fa-times tags__fontawesome"></i>GoogleAppsScript
            </li>
            <li class="tags__tag">
              <i class="fas fa-times tags__fontawesome"></i>GoogleCloudPlatform
            </li>
            <li class="tags__tag">
              <i class="fas fa-times tags__fontawesome"></i>関数型プログラミング
            </li>
            <li class="tags__tag">
              <i class="fas fa-times tags__fontawesome"></i>初心者歓迎
            </li>
          </ul>
        </div>
      </div>

      <div class="termAndTime item">
        <h2>期間と日時</h2>
        <div class="time-inputs-wrap">
          <input class="input-date" type="date" />
          <input class="input-time" type="time" />
          <select class="select-hour" name="hour">
            <option value="one-hour">1時間</option>
            <option value="two-hour">2時間</option>
            <option value="three-hour">3時間</option>
            <option value="four-hour">4時間</option>
            <option value="five-hour">5時間</option>
          </select>
        </div>
        <p>
          <small>
            ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
          </small>
        </p>
      </div>

      <div class="deadline item">
        <h2>締め切り</h2>
        <div class="time-input-wrap">
          <input type="date" />
          <input type="time" />
        </div>
      </div>

      <div class="event-type item">
        <h2>勉強会の種類</h2>
        <div v-on:click="switchContent" class="event-type_inputs">
          <div>
            <label for="presentation_input">
              <input
                id="presentation_input"
                type="radio"
                name="event-type"
                checked
              />
              発表勉強会
            </label>
          </div>
          <div>
            <label for="communication_input">
              <input id="communication_input" type="radio" name="event-type" />
              交流勉強会
            </label>
          </div>
        </div>
      </div>

      <hr />

      <div v-if="isEventTypePresentation">
        <div class="entryFee item">
          <h2>参加費</h2>
          <div class="entryFee__inner">
            <select class="entryFee__inner-select lightblue-input" name="fee">
              <option value="100yen">100</option>
              <option value="200yen">200</option>
              <option value="300yen">300</option>
              <option value="400yen">400</option>
              <option value="500yen">500</option>
              <option value="600yen">600</option>
              <option value="700yen">700</option>
              <option value="800yen">800</option>
              <option value="900yen">900</option>
              <option value="1000yen">1000</option>
              <option value="1100yen">1100</option>
              <option value="1200yen">1200</option>
              <option value="1300yen">1300</option>
              <option value="1400yen">1400</option>
              <option value="1500yen">1500</option>
              <option value="1600yen">1600</option>
              <option value="1700yen">1700</option>
              <option value="1800yen">1800</option>
              <option value="1900yen">1900</option>
              <option value="2000yen">2000</option>
            </select>
            <i class="fab fa-product-hunt entryFee__inner-fontawesome"></i>
          </div>
          <p><small>※上限は2000円までです</small></p>
        </div>

        <div class="presenterSelect item">
          <h2>発表者の選択</h2>
          <input
            type="text"
            class="presenterSelect_input lightblue-input"
            placeholder="入力してください"
          />
          <p><small>※発表者の上限は10人までです</small></p>
        </div>

        <div class="fixed-member item">
          <h2>定員</h2>
          <div>
            <input
              id="fixed-member_input"
              type="number"
              class="fixed-member_input lightblue-input"
            />
            <label for="fixed-member_input">人</label>
          </div>
          <p><small>※発表勉強会の参加者の上限は10人です</small></p>
        </div>

        <div class="autoCloseText item">
          <p>
            <small>
              <span class="riceMark">＊</span>定員が締め切りまでに
              <input
                class="autoCloseText_input lightblue-input"
                type="number"
              />
              人集まらなかったら自動的にイベントを閉鎖する
            </small>
          </p>
        </div>
      </div>

      <div v-else>
        <div class="fixed-member item">
          <h2>定員</h2>
          <div>
            <input
              id="fixed-member_input"
              type="number"
              class="fixed-member_input lightblue-input"
            />
            <label for="fixed-member_input">人</label>
          </div>
          <p><small>※交流勉強会の参加者の上限は5人です</small></p>
        </div>

        <div class="autoCloseText item">
          <p>
            <small>
              <span class="riceMark">＊</span>定員が締め切りまでに
              <input
                class="autoCloseText_input lightblue-input"
                type="number"
              />
              人集まらなかったら自動的にイベントを閉鎖する
            </small>
          </p>
        </div>
      </div>

      <div class="details item">
        <h2>詳細</h2>
        <div class="details__inner">
          <ul class="details__inner-tabs">
            <li class="details__inner-tab--active">マークダウン</li>
            <li class="details__inner-tab">プレビュー</li>
          </ul>
        </div>
        <textarea class="details__inner-markdown" rows="20"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
const hideIcon = () => {
  const icons = document.getElementById('image-icons-span')
  icons.classList.add('hidden')
}
const showImg = () => {
  document.getElementById('eventImg').addEventListener('change', (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      document.getElementById('preview').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
    hideIcon()
  })
}
export default {
  data() {
    return {
      isEventTypePresentation: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      showImg()
    })
  },
  methods: {
    switchContent() {
      const inputs = document.getElementsByName('event-type')
      const isPresentation = inputs[0].checked
      if (isPresentation) {
        this.isEventTypePresentation = true
      } else {
        this.isEventTypePresentation = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/new.scss';
</style>
