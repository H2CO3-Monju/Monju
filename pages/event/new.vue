<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <div class="event-img-wrap">
          <div class="event-img">
            <label class="image-icon-wrap">
              <span class="image-icons">
                <i class="far fa-image fa-5x" aria-hidden="true"></i>
              </span>
              <input
                id="eventImg"
                class="hidden"
                type="file"
                name="s_file"
                accept="image/*"
              />
            </label>
          </div>
          <img id="preview" />
        </div>

        <div class="title-tag-wrap">
          <div class="title-wrap">
            <h2>タイトル</h2>
            <input
              type="text"
              class="title-tag-input title-input text-input"
              placeholder="簡潔かつ目が惹かれるようなタイトルを！"
            />
          </div>
          <div class="tag-wrap">
            <h2>タグ</h2>
            <input
              type="text"
              class="title-tag-input tag-input text-input"
              placeholder="入力してください"
            />
            <p><small>※タグの追加は5つまでです</small></p>
          </div>
        </div>
      </div>

      <div class="termAndTime">
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
          ※時間は原則1時間〜５時間までです。延長は出来ないので、時間は多めに見積もって作成してください。
        </p>
      </div>

      <div class="deadline">
        <h2>締め切り</h2>
        <div class="time-input-wrap">
          <input type="date" />
          <input type="time" />
        </div>
      </div>

      <div class="event-type">
        <h2>勉強会の種類</h2>
        <div class="event-type_inputs">
          <div>
            <input type="radio" name="event-type" value="presentation" />
            <label for="presentation">発表勉強会</label>
          </div>
          <div>
            <input type="radio" name="event-type" value="communication" />
            <label for="communication">発表勉強会</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const showImg = () => {
  document.getElementById('eventImg').addEventListener('change', (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      document.getElementById('preview').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
  })
}
export default {
  mounted() {
    this.$nextTick(() => {
      showImg()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/new.scss';
</style>
