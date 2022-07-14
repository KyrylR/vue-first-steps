<template>
  <input
    :class="{
      'is-valid': validateEmail(email),
      'is-invalid': !validateEmail(email),
    }"
    :value="email"
    class="form-control"
    placeholder="E-mail"
    type="email"
    @input="update($event)"
  />
</template>

<script>
import validateEmail from '../validate-email';

export default {
  name: 'EmailInput',
  props: ['email'],
  methods: {
    update($event) {
      this.$emit('update:email', $event.target.value);
    },
    validateEmail,
  },
};
</script>
