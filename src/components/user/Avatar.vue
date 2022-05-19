<template>
  <div>
    <v-avatar :size="size" @click="$emit('click', $event.target.click)">
      <img :src="user.avatarUrl" :alt="user.nickname"/>
    </v-avatar>
    <div class="mt-4 text-center">{{ user.nickname }}</div>
  </div>
</template>

<script>
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