import { createApp } from 'vue';
import App from './main.vue';
import _ from 'lodash';
import Antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import locale from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

createApp(App).use(Antdv).mount('#app');