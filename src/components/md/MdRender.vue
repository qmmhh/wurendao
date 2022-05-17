<template>
    <div
            v-html="html"
            :class="$vuetify.theme.dark ? 'markdown-body-dark' : 'markdown-body-light'"
    />
</template>

<script>
    import marked from 'marked'
    import 'highlight.js/styles/nord.css'
    import '@/assets/css/github-markdown/github-markdown-light.css'
    import '@/assets/css/github-markdown/github-markdown-dark.css'

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: (code) => {
            return require('highlight.js').highlightAuto(code).value
        }
    })

    export default {
        name: "MdRender",
        data: () => ({}),
        props: {
            md: {
                type: String,
                required: true
            }
        },
        computed: {
            html() {
                return marked(this.md)
            }
        }
    }
</script>

<style>
    .markdown-body-light code {
        background-color: transparent !important;
    }

    .markdown-body-dark code {
        background-color: transparent !important;
    }
</style>