<template>
    <v-navigation-drawer v-model="drawer" app>
        <div class="pa-4 d-flex justify-center">
            <AsideAvatarMenu/>
        </div>

        <v-divider/>

        <AsideRouteMenu/>

        <template v-slot:append>
            <BoxFooter/>
        </template>
    </v-navigation-drawer>
</template>

<script>
    import {mapMutations} from 'vuex'

    import BoxFooter from './BoxFooter'
    import AsideRouteMenu from "./AsideRouteMenu"
    import AsideAvatarMenu from "@/components/user/AsideAvatarMenu"

    export default {
        name: 'BoxAside',
        components: {
            BoxFooter,
            AsideRouteMenu,
            AsideAvatarMenu
        },
        data: () => ({}),
        computed: {
            drawer: {
                get() {
                    return this.$store.state.boxAside.drawer
                },
                set(value) {
                    this.UPDATE_DRAWER(value)
                }
            }
        },
        methods: {
            ...mapMutations('boxAside', ['UPDATE_DRAWER'])
        }
    }
</script>

<style scoped>
</style>