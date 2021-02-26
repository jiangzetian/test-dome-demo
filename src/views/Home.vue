<template>
    <div class="container">
        <router-link class="item" to='/dynamic-tags-page'>动态标签</router-link>
        <router-link class="item" to='/dynamic-input-page'>动态输入框</router-link>
        <router-link class="item" to='/i18n'>多语言</router-link>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: "Home",
        setup(){
            console.log('home')
        }
    })
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    padding: 20px 0;
    margin:0 auto;
    width: 100%;
    max-width: 1200px;
}
.item{
    margin:0 20px;
}
</style>
