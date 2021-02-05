<template>
    <a-row type="flex" align="middle" class="addTags">
        <a-tag :key="index" v-for="(item, index) in tags" closable color="blue" :visible="true" @close="handleClose(index)">
            {{ item }}
        </a-tag>
        <a-input
                ref="inputDom"
                type="text"
                size="small"
                v-if="inputVisible"
                v-model:value="inputValue"
                :maxlength="itemMaxLenght"
                :style="{ width: '110px' }"
                @blur="handleInputConfirm"
                @keyup.enter="handleInputConfirm"
        />
        <a-tag v-else-if="btnVisible" @click="showInput">
            <plus-outlined /> 添加标签
        </a-tag>
    </a-row>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {PlusOutlined} from '@ant-design/icons-vue';
    import dynamicTags from './js/index';
    export default defineComponent({
        components:{
            PlusOutlined
        },
        props:{
            maxLength: Number,
            inputMaxLenght: Number
        },
        emits: ["change"],
        setup(props,context){
            const {
                inputDom,
                tags,
                inputVisible,
                inputValue,
                itemMaxLenght,
                btnVisible,
                handleClose,
                showInput,
                handleInputConfirm,
            } = dynamicTags(props,context);

            return {
                inputDom,
                tags,
                inputVisible,
                inputValue,
                itemMaxLenght,
                btnVisible,
                handleClose,
                showInput,
                handleInputConfirm,
            }
        }
    })
</script>

<style scoped>

</style>
