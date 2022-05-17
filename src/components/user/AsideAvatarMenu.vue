<template>
    <div>
        <v-btn v-if="!user" to="/login" text>登录</v-btn>
        <v-menu
                v-if="user"
                open-on-hover
                transition="slide-y-transition"
                :close-on-content-click="false"
        >
            <template v-slot:activator="{ on, attrs }">
                <div
                        v-bind="attrs"
                        v-on="on"
                >
                    <v-avatar size="64">
                        <img :src="user.avatarUrl"
                             :alt="user.nickname"/>
                    </v-avatar>
                </div>
            </template>
            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img :src="user.avatarUrl"
                                 :alt="user.nickname"
                            >
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{user.nickname}}</v-list-item-title>
                            <!--                            <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>-->
                        </v-list-item-content>

                        <!--                        <v-list-item-action>-->
                        <!--                            <v-btn-->
                        <!--                                    :class="fav ? 'red&#45;&#45;text' : ''"-->
                        <!--                                    icon-->
                        <!--                                    @click="fav = !fav"-->
                        <!--                            >-->
                        <!--                                <v-icon>mdi-heart</v-icon>-->
                        <!--                            </v-btn>-->
                        <!--                        </v-list-item-action>-->
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list
                        nav
                        dense
                >
<!--                    <v-list-item-group>-->
                        <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
<!--                    </v-list-item-group>-->

                    <v-divider class="mt-2 mb-2"></v-divider>
                    <v-list-item @click="logout()">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>退出登录</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

<!--                <v-card-actions>-->
<!--                </v-card-actions>-->
            </v-card>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: "AsideAvatarMenu",
        data: () => ({
            items: [
                {text: 'My Files', icon: 'mdi-folder'},
                {text: 'Shared with me', icon: 'mdi-account-multiple'},
                {text: 'Starred', icon: 'mdi-star'},
                {text: 'Recent', icon: 'mdi-history'},
                {text: 'Offline', icon: 'mdi-check-circle'},
                {text: 'Uploads', icon: 'mdi-upload'},
                {text: 'Backups', icon: 'mdi-cloud-upload'},
            ],
        }),
        mounted() {
            this.$store.commit('user/resetCurrUser')
        },
        computed: {
            user() {
                return this.$store.state.user.user
            }
        },
        methods: {
            logout() {
                this.$store.commit('user/logout')
            }
        }
    }
</script>

<style scoped>

</style>