<template>
    <div>
        Welcome, {{ currentUser }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'Home',
        components: {},
        computed: {
            ...mapGetters(['currentUser'])
        }
    }
</script>

<style lang="scss" scoped>

</style>