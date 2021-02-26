<template>
    <div class="container">
        <div class="formBox">
            <DynamicInput @change="inputChange" />
        </div>
        <div class="jsonCode">
            <pre>{{jsonData}}</pre>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import DynamicInput from '@/components/DynamicInput/index.vue'
    export default {
        components:{
            DynamicInput,
        },
        setup(){
            const jsonData = ref([]);
            const  inputChange = e=>{
                jsonData.value = e;
                console.log(e)
            };
            return{
                jsonData,
                inputChange
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 20px 10px;
        width: 100%;
        max-width: 1200px;
    }
    .formBox{
        width: 50%;
        max-width: 600px;
    }
    .jsonCode{
        box-sizing: border-box;
        padding: 20px;
        width: 50%;
        max-width: 600px;
        min-height:200px;
        background: #333;
        color: #fff;
    }
</style>
