<template>
  <button type="button" @click="onClickAge">Upd age</button>
  <button type="button" @click="ageChangeFn(3)">Upd age CB</button>
  <p>The user is {{ age }} years old</p>
  <p>Nice: {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    age: {
      type: [Number],
      // required: true,
      // default: 20,
      validator(value) {
        // this.onClickAge()
        return value < 50
      }
    },
    ageChangeFn: Function
  },
  emits: ['age-change'],
  methods: {
    onClickAge() {
      this.$emit('age-change', 3)
    }
  },
  computed: {
    ageDoubled() {
      return this.age * 2
    }
  }
}
</script>

<style scoped>

</style>