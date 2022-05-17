<template>
    <div>
        <v-textarea v-model="text"></v-textarea>
        <div v-html="render" :class="$vuetify.theme.dark ? 'markdown-body-dark' : 'markdown-body-light'"/>
    </div>
</template>

<script>
    import {Parser, HtmlRenderer} from 'commonmark'
    import '@/assets/css/github-markdown/github-markdown-light.css'
    import '@/assets/css/github-markdown/github-markdown-dark.css'
    // import 'github-markdown-css'

    export default {
        name: "Editor",
        data: () => ({
            text: ''
        }),
        computed: {
            render() {
                return new HtmlRenderer().render(new Parser({smart: true}).parse(this.text))
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