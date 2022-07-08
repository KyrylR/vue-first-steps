<template>
  <FormComponent>
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
  </FormComponent>
  <FormComponent>
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
    <p>Just in case!</p>
  </FormComponent>

  <select v-model="componentName">
    <option value="HomeComponent">Home</option>
    <option value="AboutComponent">About</option>
  </select>

  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>


import FormComponent from "@/components/FormComponent";
import HomeComponent from "@/components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";

export default {
  name: 'App',
  components: {
    FormComponent,
    HomeComponent,
    AboutComponent
  },
  data() {
    return {
      help: 'This is some help text.',
      componentName: 'HomeComponent'
    }
  }
}
</script>

