<template>
    <div :class="$style.index">
        <h1>vue</h1>
    </div>
</template>

<script>
    export default {
        name: 'index',
        mounted() {
            this.getList()
                .then(res => {
                    console.log(res)
                })
        },
        methods: {
            getList() {
                return new Promise(((resolve, reject) => {
                    resolve(123)
                }))
            }
        }
    }
</script>

<style lang="less" module>
    .index {
        width: 375px;
        background-color: red;
        h1 {
            font-size: 24px;
            color: #333;
        }
    }
</style>