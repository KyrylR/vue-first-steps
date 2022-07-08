<template>
  <h2>Hey!</h2>
  <GreetingComponent :age="age"></GreetingComponent>
  <UserComponent :age="age" :ageChangeFn="updateAgeCB" @age-change="updateAge"></UserComponent>
</template>

<script>
import GreetingComponent from "@/components/GreetingComponent";
import UserComponent from "@/components/UserComponent";

export default {
  name: 'App',
  components: {
    GreetingComponent,
    UserComponent
  },
  data() {
    return {
      age: 21
    }
  },
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
};
</script>
