<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>

    <p>{{ name }}</p>

    <input v-model="phrase" type="text"/>
    <p>{{ reversedPhrase }}</p>

    <AlertComponent :user="user"></AlertComponent>

    <button ref="btn" type="button">Button</button>
  </div>
</template>

<script>
import {onBeforeMount, onMounted, reactive, ref, toRefs} from "vue";
import {useNumber} from "@/hooks/number";
import {usePhrase} from "@/hooks/phrase";
import AlertComponent from "@/components/AlertComponent.vue";


export default {
  name: 'App',
  components: {
    AlertComponent,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount()");
    });

    onMounted(() => {
      console.log("onMounted()");

      btn.value.addEventListener("click", () => {
        console.log("button clicked");
      });
    });

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    const {num, increment, double} = useNumber();
    const {phrase, reversedPhrase, num: phraseNum} = usePhrase();


    return {
      num,
      increment,
      double,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      user,
      btn,
      phraseNum,
    };
  },
}
</script>

<style>

</style>
