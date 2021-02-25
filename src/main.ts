import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//ant-design-vue 组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//i18n
import i18n from '@/i18n'

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(i18n);
app.mount('#app');
