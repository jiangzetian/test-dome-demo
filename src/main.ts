import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//ant-design-vue 组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app');
