<template>
  <div>
    <div
        v-for="(md, i) in mds"
        :key="i"
        class="d-flex"
    >
            <span>
<!--                <router-link :to="{path: '/md', query: {raw: md.download_url}}"-->
              <!--                             class="text-decoration-none"-->
              <!--                >-->
              <!--                    {{md.name.substring(0, md.name.lastIndexOf("."))}}-->
              <!--                </router-link>-->
                <v-btn :to="{path: '/md', query: {raw: md.download_url}}" text>
                    {{ md.name.substring(0, md.name.lastIndexOf(".")) }}
                </v-btn>
            </span>
      <v-spacer/>
      <span><v-btn :href="`https://github.com/prprhub/prprhub.github.io.md/commits/main/${md.path}`" icon><v-icon>mdi-history</v-icon></v-btn></span>
    </div>
  </div>
</template>

<script>
import {allMds} from "@/request/github/rest-api/repo-content"

export default {
  name: "Mds",
  data: () => ({
    mds: []
  }),
  mounted() {
    this.updateMds()
  },
  methods: {
    updateMds() {
      allMds().then(res => this.mds = _.orderBy(res.data, ['name'], ['desc']))
          .catch(e => this.$message.error(e.toString()))
    }
  }
}
</script>

<style scoped>

</style>