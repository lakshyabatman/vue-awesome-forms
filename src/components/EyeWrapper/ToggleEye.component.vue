<template>
    <div class="eye-wrapper">
            <img v-if="toggle" @click="toggleEye" src="../../assets/eyeoff.svg" alt="">
            <img v-else @click="toggleEye" src="../../assets/eyeon.svg" alt="">
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