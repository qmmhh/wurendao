<template>
    <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="12" lg="6">
            <v-form
                    @keydown.enter="login"
                    ref="form"
                    lazy-validation
            >
                <v-text-field
                        v-model.trim="loginFormData.username"
                        :rules="[v => !!v || '用户名必填']"
                        label="用户名"
                ></v-text-field>
                <v-text-field
                        v-model="loginFormData.password"
                        :rules="passwordRules"
                        type="password"
                        label="密码"
                ></v-text-field>

                <!--        <v-text-field-->
                <!--                v-model="email"-->
                <!--                :rules="emailRules"-->
                <!--                label="E-mail"-->
                <!--        ></v-text-field>-->

                <v-checkbox
                        v-model="loginFormData.rememberMe"
                        label="记住我"
                ></v-checkbox>

                <!--        <v-btn-->
                <!--                color="success"-->
                <!--                class="mr-4"-->
                <!--                @click="validate"-->
                <!--        >-->
                <!--            Validate-->
                <!--        </v-btn>-->

                <div class="d-flex">
                    <v-btn
                            color="success"
                            @click="login()"
                            text
                    >
                        登录
                    </v-btn>
                    <!--            <v-spacer/>-->
                    <!--            <v-btn-->
                    <!--                    color="error"-->
                    <!--                    @click="reset"-->
                    <!--                    text-->
                    <!--            >-->
                    <!--                重置表单-->
                    <!--            </v-btn>-->
                </div>
            </v-form>
        </v-col>
        <v-col></v-col>
    </v-row>
</template>

<script>
    import {doLogin, logout} from "@/request/auth"

    export default {
        name: "Login",
        data: () => ({
            passwordRules: [
                v => !!v || '密码必填',
                // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            loginFormData: {
                username: 'admin',
                password: 'admin',
                rememberMe: false
            },
        }),
        methods: {
            login() {
                if (this.validate()) {
                    this.$store.commit('user/login', this.loginFormData)
                }
            },
            validate() {
                return this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<style scoped>

</style>