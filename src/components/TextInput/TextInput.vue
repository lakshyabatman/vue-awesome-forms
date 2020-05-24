<template>
  <div
    class="input-wrapper"
    :class="theme"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
    name:'TextInput',
    components:{
        
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
        },
        value: {
            type:String,
            default:''
        },
        type: {
            type:String,
            default:'text'
        },
        placeholder: {
            type:String,
            default:''
        }
    },
    
    methods : {
        
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

input {
    flex-grow: 2;
    border:0;
    font-size: 18px;
}
input:focus {
    outline: none;
}

</style>