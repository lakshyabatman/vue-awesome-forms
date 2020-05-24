<template>
  <input
    v-model="value" 
    type="text"
    maxlength="1"
    size="1"
    min="0"
    @input="onInput"
  >
</template>

<script>
export default {
    data: function() {
        return {
            value:''
        }
    },
    methods: {
      onInput(e) {
        setTimeout(() => {
          this.moveToNextInput(e);
          this.$emit('input',this.value);
          // this.onInputEmitter();
          }, 0);
      },

      moveToNextInput(e) {
        const t = e.target;
        const sibling= t.nextElementSibling;
        if (sibling) {
          sibling.focus();
        }
      }
    }
}
</script>

<style scoped>
input  {
    height: 30px;
    width:30px;
    text-align: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border:1px solid rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    
}
</style>