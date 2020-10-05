<template>
    <v-container bg fill-height fluid grid-list-lg class="background">
        <v-row 
            class="image-blur"
            align="center"
            justify="center"
        >

            <v-col cols="11">
                <v-card class="elevation-0 content-alignment card-transparency">
                    <v-row>
                        <v-card-text class="mt-12">
                            <v-row class="title">
                                <h1 class="centered">Register</h1>
                            </v-row>
                            <v-row 
                                align="center"
                                justify="center"
                                class="centered"
                            >
                                <v-col xs="12" offset-xs="0" sm="6" offset-sm="3" md="4" offset-md="4">
                                    <ValidationObserver ref="registerForm" v-slot="{ validate, passes }">
                                        <v-form @submit.prevent="validate(); passes(register)">
                                            
                                            <ValidationProvider name="username" rules="required|email" v-slot="{ errors, valid }">
                                                <v-text-field
                                                    name="username"
                                                    vid="username"
                                                    v-model="username"
                                                    class="centered"
                                                    color="#373737"
                                                    label="Username"
                                                    prepend-inner-icon="mdi-account-arrow-right-outline"
                                                    clearable
                                                    flat
                                                    filled
                                                    rounded
                                                    required
                                                    :success="valid"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="password" rules="required|length:10" v-slot="{ errors, valid }">
                                                <v-text-field
                                                    name="password"
                                                    vid="password"
                                                    v-model="password"
                                                    type="password"
                                                    class="centered"
                                                    color="#373737"
                                                    label="Password"
                                                    prepend-inner-icon="mdi-lock-outline"
                                                    clearable
                                                    flat
                                                    counter
                                                    filled
                                                    rounded
                                                    required
                                                    :success="valid"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="conform" vid="confirm" rules="required|password:@password" v-slot="{ errors, valid }">
                                                <v-text-field
                                                    name="Confirm password"
                                                    v-model="confirm"
                                                    type="password"
                                                    class="centered"
                                                    color="#373737"
                                                    label="Confirm Password"
                                                    prepend-inner-icon="mdi-lock-outline"
                                                    clearable
                                                    flat
                                                    filled
                                                    rounded
                                                    required
                                                    :success="valid"
                                                    :error-messages="errors"
                                                ></v-text-field>
                                            </ValidationProvider>
                                            
                                           <v-row>
                                                <v-col xs="12" offset-xs="0" sm="6" offset-sm="3">
                                                    <v-btn
                                                        type="submit"
                                                        class="centered auth-button"
                                                        rounded
                                                    >
                                                    Register
                                                    </v-btn>
                                                </v-col>
                                            </v-row>

                                        </v-form>
                                    </ValidationObserver>
                                    <v-row>
                                        <v-col xs="12" offset-xs="0" sm="6" offset-sm="3">
                                            <v-btn
                                                type="submit"
                                                class="centered register-button"
                                                @click="goToLogin()"
                                                text
                                            >
                                            Back to Login
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { ValidationObserver, ValidationProvider } from "vee-validate";
    import { mapActions } from 'vuex';
    export default {
        name: 'Register',
        components: {
            ValidationObserver,
            ValidationProvider
        },
        data: () => {
            return {
                username: '',
                password: '',
                confirm: ''
            }
        },
        methods: {
            ...mapActions(['registerUser']),
            register() {
                this.registerUser({
                    username: this.username,
                    token: 'generatedT0kn'
                })
                this.$router.push('/');
            },
            goToLogin(){
                this.$emit('go-to-login');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-transparency {
        background-color: transparent;
    }
    .auth-button {
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: white !important;
        width: 100%;
        opacity: 1;

    }
    .register-button {
        background-color: transparent !important;
        box-shadow: none;
        width: 100%;
        color: white !important;
        opacity: 1;

    }
</style>