<template>
    <div>
        <div ref="searchInput" class="mb-4">
            <v-text-field
                    type="text"
                    clearable
                    solo-inverted
                    flat
                    rounded
                    hide-details
                    v-model.trim="keyword"
                    append-outer-icon="mdi-keyboard-return"
                    @click:append-outer="enter()"
                    @keydown.enter="enter()"
            ></v-text-field>
        </div>
        <div>
            <v-list>
                <v-list-item-group mandatory>
                    <v-list-item v-for="(rst, i) in results" :key="i" :to="to(rst)" exact @click="$store.commit('boxHeader/UPDATE_IS_OPEN_SEARCH_DIALOG', false)">
                        <!--                    <v-list-item-avatar>-->
                        <!--                        <v-img src=""></v-img>-->
                        <!--                    </v-list-item-avatar>-->
                        <v-list-item-content>
                            <v-list-item-title><h3>{{rst.name.substring(0, rst.name.lastIndexOf("."))}}</h3></v-list-item-title>
                            <br/>
                            <MdMatchesRender v-for="(match, i) in rst.text_matches" :key="i" :md="match.fragment" :matches="match.matches"/>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </div>
        <div class="text-center" v-if="pages !== 0">
            <v-pagination
                    v-model="page"
                    :length="pages"
                    :total-visible="7"
                    @input="search()"
                    :next-icon="undefined"
                    :prev-icon="undefined"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
    import {search} from '@/request/github/rest-api/search'
    import MdMatchesRender from "@/components/md/MdMatchesRender"

    export default {
        name: 'GlobalSearch',
        components: {
            MdMatchesRender
        },
        data: () => ({
            keyword: 'test',
            results: [],
            page: 1,
            perPage: 10,
            pages: 0
        }),
        props: {
            extHeight: { // 组件外额外高度，用以正确设置虚拟列表高度
                type: Number,
                default: 0
            }
        },
        methods: {
            search() {
                if (this.keyword) {
                    const q = this.keyword.split(/[ ]+/).join('+')
                    search(encodeURIComponent(q), this.page, this.perPage).then(res => {
                        this.results = res.data.items
                        this.pages = res.data.total_count > 0 && res.data.total_count <= 10 ? 1 : Math.ceil(res.data.total_count / this.perPage)
                    }).catch(e => this.$message.error(e.toString()))
                }
            },
            enter() {
                this.page = 1
                this.search()
            },
            to(rst) {
                return {
                    path: '/md',
                    query: {raw: encodeURI(`https://raw.githubusercontent.com/${rst.repository.full_name}/main/${rst.path}`)}
                }
            }
        }
    }
</script>

<style scoped>
</style>