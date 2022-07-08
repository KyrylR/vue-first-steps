<template>
  <h1>Home Page!</h1>
</template>

<script>
export default {
  name: "HomeComponent",
  unmounted() {
    console.log("Home component is unmounted!")
  },
  activated() {
    console.log("Home component is activated!")
  },
  deactivated() {
    console.log("Home component is deactivated!")
  }
}
</script>

<style scoped>

</style>