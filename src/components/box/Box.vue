<template>
    <v-app>
        <BoxAside/>
        <BoxHeader/>
        <v-main>
            <Breadcrumbs/>
            <v-container>
                <v-row no-gutters>
                    <v-col></v-col>
                    <v-col cols="12" lg="8">
                        <!-- v-container组件 加 fill-height属性 实现垂直居中 -->
                        <v-scroll-x-transition mode="out-in">
                            <router-view/>
                        </v-scroll-x-transition>
                        <!--        <ToolFooter/>-->
                    </v-col>
                    <v-col></v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import BoxAside from './BoxAside'
    import BoxHeader from './BoxHeader'
    import Breadcrumbs from "./Breadcrumbs"
    import ToolFooter from "../ToolFooter"

    export default {
        name: "Box",
        data: () => ({}),
        components: {
            BoxAside,
            BoxHeader,
            Breadcrumbs,
            ToolFooter
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
