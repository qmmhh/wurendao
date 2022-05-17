<template>
    <div v-if="show()">
        <v-breadcrumbs
                :items="breadcrumbItems"
        >
        </v-breadcrumbs>
        <v-divider/>
    </div>
</template>

<script>
    import _ from "lodash"

    export default {
        name: "Breadcrumbs",
        computed: {

            breadcrumbItems() {
                return _.map(this.$route.matched, (item) => {
                    if (this.show()) {
                        return {
                            exact: true,
                            text: item.meta.title || item.name,
                            disabled: _.isEqual(this.$route.path, item.path),
                            to: item.path
                        }
                    }
                })
            }
        },
        methods: {
            show() {
                const matchedArr = this.$route.matched
                return matchedArr.length > 0 && !['', '/', '*'].includes(matchedArr[0].path)
            }
        }
    }
</script>

<style scoped>

</style>