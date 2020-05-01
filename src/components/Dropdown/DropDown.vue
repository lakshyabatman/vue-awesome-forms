<template>
    <div class="input-wrapper">
        <select>
            <option>Hi</option>
            <option>World</option>
        </select>
    </div>
</template>

<script>
export default {
    name:'DropDown'
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
select {
    font-size:18px;
    background:transparent;
    appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
	border:2px solid #000;
	background:url('../../assets/drop-icon.png');
	background-repeat:no-repeat;
	background-size:16px 17px;
    background-position:right 2px;
    flex-grow: 2;
    border:0;

}
select:focus {
    outline: none;
}
</style>