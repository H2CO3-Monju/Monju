<template>
  <div class="bg">
    <div class="container">
      <h1>新規イベント作成</h1>
      <div class="mainContents-wrap">
        <div class="event-img-wrap">
          <div class="event-img">
            <label class="image-icon-wrap">
              <span class="image-icons">
                <i
                  class="far fa-image image-icons-fontawesome"
                  aria-hidden="true"
                ></i>
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
              class="title-tag-input title-input lightblue-input"
              placeholder="簡潔かつ目が惹かれるようなタイトルを！"
            />
          </div>
          <div class="tag-wrap">
            <h2>タグ</h2>
            <input
              type="text"
              class="title-tag-input tag-input lightblue-input"
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

      <hr />

      <div class="entry-fee">
        <h2>参加費</h2>
        <div class="entry-fee_select">
          <select class="lightblue-input" name="fee">
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
          <i class="fab fa-product-hunt entry-fee-fontawesome"></i>
        </div>
        <p>※上限は2000円までです</p>
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
