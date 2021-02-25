import {createI18n} from 'vue-i18n';
import en from './language/en';
import zh from './language/zh';

const messages = {
    zh,
    en
};

const i18n = createI18n({
    locale:localStorage.lang || 'zh',
    messages
});

export default i18n;
