<template>
  <div class="OTPWrapper">
    <OTP v-model="OTP[0]" />
    <OTP v-model="OTP[1]" />
    <OTP v-model="OTP[2]" />
    <OTP v-model="OTP[3]" />
  </div>
</template>

<script>
import OTP from '../OTP/OTP.vue'
export default {
    components:{
        OTP
    },
    data: function() {
        return {
            OTP:['','','','']
        }
    },
    watch:{
        OTP : function(oldValue,newValue) {
            this.$emit('input',newValue)
        }
    },
    methods:{
        emitValue () {
             
        }
    }
}
</script>

<style scoped>
.OTPWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:200px;
}
</style>