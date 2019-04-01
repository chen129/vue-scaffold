<template>
    <div id="app">
        <index></index>
    </div>
</template>

<script>
    import Index from './view/index.vue'

    export default {
        name: 'app',
        components: {
            Index
        }
    }
</script>

<style lang="less" module>
    .app {
    }
</style>
