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
        name: "MdMatchesRender",
        data: () => ({}),
        props: {
            md: {
                type: String,
                required: true
            },
            matches: {
                type: Array
            }
        },
        computed: {
            html() {
                // let rendered = marked(this.md).toString()
                // if (this.matches && this.matches.length > 0) {
                //     this.matches.forEach(match => {
                //         // rendered = rendered.replace(match.text, `<span style="background-color: yellow">${match.text}</span>`)
                //     })
                // }
                // return rendered
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