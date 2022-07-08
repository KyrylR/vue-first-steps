<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input placeholder="email" type="text">
      <input placeholder="username" type="text">
      <input placeholder="password" type="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy text</p>
  </app-form>
  <app-form>
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>
    <template v-slot:fields>
      <input placeholder="name" type="text">
      <input placeholder="message" type="text">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "./components/Form.vue"

export default {
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      help: 'This is some help text.'
    }
  }
};
</script>
