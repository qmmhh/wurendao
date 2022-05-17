<template>
    <v-avatar :size="size" @click="$emit('click', $event.target.click)">
        <img :src="user.avatarUrl" :alt="user.nickname"/>
    </v-avatar>
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
                    avatarUrl: 'https://avatars.githubusercontent.com/u/97961245?v=4',
                    nickname: 'prprhub'
                }
            }
        }
    }
</script>

<style scoped>
</style>