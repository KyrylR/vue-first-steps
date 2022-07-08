<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message!</p>
</template>

<script>
export default {
  name: "GreetingComponent",
  props: ['age'],
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<style lang="scss" scoped>
$color: red;
p {
  color: $color;
}
</style>