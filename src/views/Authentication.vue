<template>
    <div>
        <template>
        <v-tabs v-model="tab" class="d-none">
            <v-tab key="0">
               Login
            </v-tab>

            <v-tab key="1">
                Register
            </v-tab>
        </v-tabs>
        </template>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <login />
            </v-tab-item>
            <v-tab-item>
                <register />
            </v-tab-item>
        </v-tabs-items>
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