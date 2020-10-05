<template>
    <div>
        <template>
        <v-item-group v-model="tab" class="d-none">
            <v-item key="0">
               <login @go-to-registration="tab++"></login>
            </v-item>

            <v-item key="1">
                <register @go-to-login="tab--"/>
            </v-item>
        </v-item-group>
        </template>

        <v-window touchless v-model="tab">
            <v-window-item>
                <login @go-to-registration="tab++"></login>
            </v-window-item>
            <v-window-item>
                <register @go-to-login="tab--"/>
            </v-window-item>
        </v-window>
    </div>
</template>

<script>
    import Login from '@/components/Login'
    import Register from '@/components/Register'
    export default {
        name: 'Authentication',
        components: {
            Login,
            Register
        },
        data: () => {
            return {
                tab: 0,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>