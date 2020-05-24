<template>
  <div class="input-wrapper">
    <input
      :type="toggle ? 'text' : 'password'"
      placeholder="Password"
      @input="$emit('input',$event.target.value)"
    >
    <ToggleEye @onToggle="eyeToggled" />
  </div>
</template>

<script>
import ToggleEye from '../EyeWrapper/ToggleEye.component'
export default {
    name:'PasswordInput',
    components:{
        ToggleEye
    },
    props: {
        theme: {
            type:String,
            default:'light',
        },
        min: {
            type:Number,
        },
        max : {
            type:Number,
        },
        regexToMatch : {
            type:RegExp,
            default: /^/
        },
        value: {
            type:String,
            default:''
        },
        placeholder: {
            type:String,
            default:''
        }
    },
    data : function() {
        return {
            toggle:false
        }
    },
    methods : {
        eyeToggled(value) {
            this.toggle = value
        }
    }
    
}
</script>

<style scoped>
.input-wrapper {
    padding:10px 15px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:1px solid rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
.eye-wrapper {
    font-size: 18px;
    display: flex;
}
.eye-wrapper > img {
    cursor:pointer
}
input {
    flex-grow: 2;
    border:0;
    font-size: 18px;
}
input:focus {
    outline: none;
}

</style>