<template>
    <div class="container">
        <div style="width: 600px">
            <DynamicInput @change="inputChange" />
        </div>
    </div>
</template>

<script>
    import DynamicInput from '@/components/DynamicInput/index.vue'
    export default {
        components:{
            DynamicInput,
        },
        setup(){
            const  inputChange = e=>{
                console.log(e)
            };
            return{
                inputChange
            }
        }
    }
</script>

<style scoped>
    .container{
        box-sizing: border-box;
        margin: 0 auto;
        padding: 20px 10px;
        width: 100%;
        max-width: 1200px;
    }
</style>
