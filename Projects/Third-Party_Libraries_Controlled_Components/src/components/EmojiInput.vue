<template>
  <div class="input-group">
    <input :value="modelValue.emoji" class="form-control" readonly type="text"/>
    <div class="input-group-append">
      <button ref="emojiBtn" class="btn btn-outline-secondary" type="button">
        {{ modelValue ? modelValue.emoji : 'Select' }}
      </button>
    </div>
  </div>
</template>

<script>
import {EmojiButton} from '@joeattardi/emoji-button';

export default {
  name: 'EmojiInput',
  props: {
    modelValue: {
      required: true,
    },
    options: {
      default() {
        return {};
      },
    },
  },
  mounted() {
    const picker = new EmojiButton(this.options);
    const btn = this.$refs.emojiBtn;

    picker.on('emoji', (emoji) => {
      this.$emit('update:modelValue', emoji);
    });

    btn.addEventListener('click', () => {
      picker.togglePicker(btn);
    });
  },
};
</script>
