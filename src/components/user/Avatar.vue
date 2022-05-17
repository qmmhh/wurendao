<template>
    <v-avatar :size="size" @click="$emit('click', $event.target.click)">
        <img v-if="user" :src="user.avatarUrl" :alt="user.nickname"/>
        <v-icon v-if="!user">未登录</v-icon>
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
                    avatarUrl: 'https://img2.baidu.com/it/u=3483760324,3338125386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    nickname: 'ddd'
                }
            }
        }
    }
</script>

<style scoped>
</style>