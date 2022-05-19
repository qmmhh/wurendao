<template>
  <v-avatar :size="size" @click="$emit('click', $event.target.click)">
    <img :src="user.avatarUrl" :alt="user.nickname"/>
  </v-avatar>
</template>

<script>
import conf from '/public/conf.json'

export default {
  name: "Avatar",
  props: {
    size: {
      type: Number,
      default: 32
    }
  },
  computed: {
    user() {
      return {
        avatarUrl: this.$store.state.me.avatarUrl,
        nickname: this.$store.state.me.nickname
      }
    }
  }
}
</script>

<style scoped>
</style>