<template>
    <div>
        <h1>{{ $t("message.hello") }}</h1>
        <a-button type="primary" @click="languageBtn">{{langText}}</a-button>
    </div>
</template>

<script lang="ts">
    import {getCurrentInstance,defineComponent,ref,onMounted} from 'vue'
    export default defineComponent({
        name: "i18n",
        setup(){
            const {proxy}: any = getCurrentInstance();
            const langText = ref('');

            onMounted(()=>{
                if(proxy.$i18n.locale == 'zh'){
                    langText.value = 'EN';
                    localStorage.setItem('lang','zh');
                }else {
                    langText.value = '中文';
                    localStorage.setItem('lang','en');
                }
            });

            const languageBtn = ()=>{
                console.log(proxy.$i18n.locale);
                if(proxy.$i18n.locale == 'zh'){
                    proxy.$i18n.locale = 'en';
                    langText.value = '中文';
                    localStorage.setItem('lang','en');
                }else {
                    proxy.$i18n.locale = 'zh';
                    langText.value = 'EN';
                    localStorage.setItem('lang','zh');
                }
            };
            return{
                langText,
                languageBtn,
            }
        }
    })
</script>

<style scoped>
</style>
