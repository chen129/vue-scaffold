<template>
    <div :class="$style.index">
        <h1>vuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevue</h1>
        <p>vuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevuevue</p>
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
    @import "../less/mixins";

    .index {
        width: 100%;
        background-color: #f5f5f5;
        .border(red, 20px);
        h1 {
            font-size: 30px;
            line-height: 3em;
            color: #666;
            text-align: center;
        }
        p {
            .line-overflow(1);
        }
    }
</style>