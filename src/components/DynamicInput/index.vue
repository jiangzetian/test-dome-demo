<template>
    <a-space direction="vertical" style="width: 100%" v-if="data.length>0">
        <a-row class="item-row" :gutter="20"  v-for="(item,index) in data" :key="index">
            <a-col :span="16">
                <a-input :maxLength="10" v-model:value="item.name" @blur="inputBlur(item,index)"/>
            </a-col>
            <a-col :span="4">
                <a-input-number :min="1" v-model:value="item.count" />
            </a-col>
            <a-col :span="4">
                <a-space>
                    <a-button type="danger" shape="circle" @click="ItemInputDelBtn(index)">
                        <template #icon><MinusOutlined /></template>
                    </a-button>
                    <a-button type="primary" shape="circle" v-if="index+1==data.length" @click="ItemInputAddBtn(index)">
                        <template #icon><PlusOutlined /></template>
                    </a-button>
                </a-space>
            </a-col>
        </a-row>
    </a-space>
    <a-tag v-else @click="addInput">
        <plus-outlined /> 添加物品
    </a-tag>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {PlusOutlined,MinusOutlined} from '@ant-design/icons-vue';
    import dynamicInput from './js/index';
    export default defineComponent({
        components:{
            PlusOutlined,
            MinusOutlined
        },
        emits:['change'],
        setup(props,context){
            const {
                data,
                addInput,
                ItemInputAddBtn,
                ItemInputDelBtn,
                inputBlur,
            } = dynamicInput(props,context);

            return {
                data,
                addInput,
                ItemInputAddBtn,
                ItemInputDelBtn,
                inputBlur,
            }
        }
    })
</script>

<style scoped>

</style>
