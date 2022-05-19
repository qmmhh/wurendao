<template>
  <div>
    <div
        v-for="(md, i) in mds"
        :key="i"
        class="d-flex"
    >
            <span>
                <router-link :to="{path: '/md', query: {url: `./md/${md.fullFileName}`}}" class="text-decoration-none">
                  {{ md.name }}
                </router-link>
            </span>
      <v-spacer/>
      <span>{{ md.date }}</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {getMdFileNames} from "@/request/mds";

export default {
  name: "Mds",
  data: () => ({
    mds: []
  }),
  mounted() {
    this.setMds()
  },
  methods: {
    setMds() {
      getMdFileNames().then(res => {
        const mdFileNames = _.reverse(_.sortBy(res.data))
        this.mds = _.map(mdFileNames, (mdFileName) => {
          let suffix = mdFileName.substring(0, mdFileName.lastIndexOf('.'))
          let split = suffix.split(' - ')
          return {
            date: split[0],
            name: split[1],
            fullFileName: mdFileName
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>