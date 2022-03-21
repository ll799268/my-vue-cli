import Vue from 'vue'
import App from './App'

import './styles/index.scss'

import { add } from '@tools/add'

console.log(process.env.NODE_DEV);
console.log(add(1, 2));

new Vue({
  render: h => h(App)
}).$mount('#app')