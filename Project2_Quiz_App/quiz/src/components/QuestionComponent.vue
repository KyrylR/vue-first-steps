<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
          :style="{ width: `${questionsAnswered / questions.length * 100}%` }"
          class="bar"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <transition-group name="fade">
      <div
          v-for="(question, qi) in questions"
          v-show="questionsAnswered === qi"
          :key="question.q"
          class="single-question"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
              v-for="answer in question.answers"
              :key="answer.text"
              class="answer"
              @click.prevent="selectAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "QuestionComponent",
  props: ['questions', 'questionsAnswered'],
  emits: ['question-answered'],
  methods: {
    selectAnswer(is_correct) {
      this.$emit('question-answered', is_correct)
    }
  }
}
</script>

<style scoped>

</style>