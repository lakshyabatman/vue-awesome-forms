<template>
  <div class="eye-wrapper">
    <img
      v-if="toggle"
      src="../../assets/eyeoff.svg"
      alt=""
      @click="toggleEye"
    >
    <img
      v-else
      src="../../assets/eyeon.svg"
      alt=""
      @click="toggleEye"
    >
  </div>
</template>

<script>
export default {
    name: "ToggleEye",
    data : function() {
        return {
            toggle:false
        }
    },
    methods: {
        toggleEye () {
            this.toggle = !this.toggle
            this.$emit('onToggle',this.toggle)
        }
    }
}
</script>

<style scoped>
.eye-wrapper {
    font-size: 18px;
    display: flex;
}
.eye-wrapper > img {
    cursor:pointer
}
</style>