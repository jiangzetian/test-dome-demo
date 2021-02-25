import {ref,toRaw,watch} from 'vue'
import { message } from 'ant-design-vue';

export default function dynamicInput(props: any,context: any) {
    const data = ref<object[]>([]);
    //添加输入
    const addInput = ()=>{
        data.value.push({
            name:'',
            count:1,
        });
    };
    //输入框失去焦点
    const inputBlur = (item: any,index: number)=>{
        if(!item.name){
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
    };
    //输入框删除按钮
    const ItemInputDelBtn = (index: number)=>{
        data.value.splice(index,1);
    };

    watch(data.value, (newValue: any, oldValue: any) => {
        context.emit('change',toRaw(newValue))
    });

    return {
        data,
        addInput,
        ItemInputAddBtn,
        ItemInputDelBtn,
        inputBlur,
    }
}

