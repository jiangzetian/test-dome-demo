<template>
    <div class="container">
        <DynamicTags :maxLength="3" :inputMaxLenght="6" @change="tagsChange" />
    </div>
</template>

<script>
    import DynamicTags from '@/components/DynamicTags/index.vue'
    export default {
        components:{
            DynamicTags,
        },
        setup(){
            const  tagsChange = e=>{
                console.log(e)
            };
            return{
                tagsChange
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 100%;
    max-width: 1200px;
}
</style>
