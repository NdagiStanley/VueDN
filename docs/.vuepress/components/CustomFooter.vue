<template>
  <div class="push"></div>
  <div class="footer center">MIT Licensed | By <a href="https://md.engineer" target="_blank">Stan_MD</a> | AD {{ year }}</div>
</template>
<script>
const d = new Date()
const currentYear = d.getFullYear()
export default {
  data() {
    return {
      year: currentYear
    }
  }
}
</script>
