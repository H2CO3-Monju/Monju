<template>
  <div class="event-image">
    <div class="event-image__inner">
      <label class="event-image__label">
        <span id="event-image__span" class="event-image__icons">
          <i
            class="far fa-image event-image__fontawesome"
            aria-hidden="true"
          ></i>
        </span>
        <img id="preview" class="event-image__image" />
        <input
          id="event-image__input"
          class="hidden"
          type="file"
          name="s_file"
          accept="image/*"
        />
      </label>
    </div>
  </div>
</template>

<script>
const hideIcon = () => {
  const icons = document.getElementById('event-image__span')
  icons.classList.add('hidden')
}
const showImg = () => {
  const eventImg = document.getElementById('event-image__input')
  eventImg.addEventListener('change', (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      document.getElementById('preview').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
    hideIcon()
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
.hidden {
  display: none;
}
.event-image {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 330px;
  margin-right: 40px;
  margin-bottom: 20px;
  color: $_light_blue;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 213px;
    border: $_light_blue 3px dashed;
  }

  &__label {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__icons {
    cursor: pointer;
    position: relative;
    &::after {
      position: absolute;
      top: -6px;
      right: -6px;
      font-size: 2em;
      font-family: 'Font Awesome 5 Free';
      font-weight: bold;
      text-shadow: 3px 3px 0 $_container_white, -3px -3px 0 $_container_white,
        -3px 3px 0 $_container_white, 3px -3px 0 $_container_white,
        0px 3px 0 $_container_white, 0 -3px 0 $_container_white,
        -3px 0 0 $_container_white, -3px 0 0 $_container_white,
        3px 0 0 $_container_white;
      content: '\f067';
    }
  }

  &__fontawesome {
    font-size: 5em;
  }

  &__image {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
}
</style>
