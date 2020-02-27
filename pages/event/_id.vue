<template>
  <h1>test</h1>
</template>

<script>
export default {
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  }
}
</script>
