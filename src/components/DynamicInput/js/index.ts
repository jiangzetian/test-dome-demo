import {ref,toRaw,watch,nextTick} from 'vue'
import { message } from 'ant-design-vue';

export default function dynamicInput(props: any,context: any) {
    const inputBoxDom: any = ref(null);
    const data = ref<object[]>([]);
    //添加输入
    const addInput = ()=>{
        data.value.push({
            name:'',
            count:1,
        });
        //自动聚焦输入框
        nextTick(() => {
            const dom = inputBoxDom.value;
            const lastIndex = dom.$el.children.length-1;
            console.log(dom.$el.children[lastIndex].getElementsByClassName("ant-input")[0].focus());
        });
    };
    //输入框失去焦点
    const inputBlur = (item: any,index: number)=>{
        if(!item.name || !item.name.trim()){
            message.config({
                maxCount:1,
            });
            message.error('请输入内容');
            data.value.splice(index,1);
            return false;
        }
        return true;
    };
    //输入框添加按钮
    const ItemInputAddBtn = (index: number)=>{
        if(inputBlur(data.value[index],index)){
            data.value.push({
                name:'',
                count:1,
            });
        }
        //自动聚焦输入框
        nextTick(() => {
            const dom = inputBoxDom.value;
            const lastIndex = dom.$el.children.length-1;
            console.log(dom.$el.children[lastIndex].getElementsByClassName("ant-input")[0].focus());
        });
    };
    //输入框删除按钮
    const ItemInputDelBtn = (index: number)=>{
        data.value.splice(index,1);
    };

    watch(data.value, (newValue: any, oldValue: any) => {
        context.emit('change',toRaw(newValue))
    });

    return {
        inputBoxDom,
        data,
        addInput,
        ItemInputAddBtn,
        ItemInputDelBtn,
        inputBlur,
    }
}

