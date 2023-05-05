<template>
  <div class="push"></div>
  <div class="footer center">
    <div>
      Released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT License</a>
    </div>
    <div>
      By <a href="https://md.engineer" target="_blank">Stan_MD</a> | AD {{ year }}
    </div>
    <div>
      <a href="https://github.com/NdagiStanley/VueDN " target="_blank">GitHub Repository</a>
    </div>
  </div>
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
