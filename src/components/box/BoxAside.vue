<template>
    <v-navigation-drawer v-model="drawer" app>
        <div class="pa-4 d-flex justify-center">
            <Avatar :size="64"/>
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
    import Avatar from "@/components/user/Avatar"

    export default {
        name: 'BoxAside',
        components: {
            BoxFooter,
            AsideRouteMenu,
            Avatar
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