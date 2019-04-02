<template>
    <div :class="$style.index">
        <h1>vue</h1>
    </div>
</template>

<script>
    export default {
        name: 'index'
    }
</script>

<style lang="less" module>
    .index {
        background-color: red;
        h1 {
            width: 750px;
            font-size: 40px;
            color: #333;
            transform: rotate(20deg);
        }
    }
</style>