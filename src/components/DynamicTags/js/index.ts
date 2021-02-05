import {ref,nextTick,watch} from 'vue'

export default function dynamicTags(props: any,context: any) {
    //输入框Dom
    const inputDom: any = ref(null);
    //标签数据
    const tags = ref<string[]>([]);
    //按钮显隐
    const btnVisible = ref(true);
    //输入框显隐
    const inputVisible = ref(false);
    //当前输入框的值
    const inputValue = ref('');
    //输入框最大长度
    const itemMaxLenght = ref(props.inputMaxLenght);

    //删除某一个
    const handleClose = (index: number) => {
        tags.value.splice(index, 1);
        if (tags.value.length + 1 > props.maxLength) {
            btnVisible.value = false;
        }
        btnVisible.value = true;
    };
    //显示输入框
    const showInput = () => {
        if (tags.value.length + 1 > props.maxLength) {
            inputVisible.value = false;
            btnVisible.value = false;
            return false;
        }
        inputVisible.value = true;
        btnVisible.value = true;
        nextTick(() => {
            inputDom.value.focus();
        })
    };
    //完成输入
    const handleInputConfirm = () => {
        if (inputValue.value.trim()) {
            tags.value.push(inputValue.value);
        }
        if (tags.value.length + 1 > props.maxLength) {
            btnVisible.value = false;
        }
        inputVisible.value = false;
        inputValue.value = '';
    };

    watch(tags.value, (newValue, oldValue) => {
        context.emit("change", [...tags.value]);
    });

    return {
        inputDom,//输入框Dom
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
