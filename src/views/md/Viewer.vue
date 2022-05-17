<template>
    <div>
        <MdRender :md="md"/>
        <v-divider class="mt-2 mb-2"/>
        <div class="d-flex">
            <v-spacer/>
            <v-btn icon href="https://github.com/prprhub/prprhub.github.io.md/issues/new"><v-icon>mdi-comment-edit-outline</v-icon></v-btn>
        </div>
    </div>
</template>

<script>
    import MdRender from '@/components/md/MdRender'
    import req from '@/request/index'

    export default {
        name: "Viewer",
        components: {
            MdRender
        },
        data: () => ({
            md: 'NULL'
        }),
        mounted() {
            this.setMd()
        },
        methods: {
            setMd() {
                req.get((this.$route.query.raw)).then(raw => this.md = raw.data).catch(e => this.$message.error(e.toString()))
            }
        },
        watch: {
            $route: {
                handler() {
                    this.setMd()
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>