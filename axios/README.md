
# axios 封装

> axios请求统一处理

## 在main.js中全局引用
```javascript
import axios from './common/js/http.js'
Vue.prototype.$axios = axios;
```

## 在生产环境 xx.vue组建中使用
```vue
this.$axios.post('/acop/2.0/xx/xx/xx').then(res => {
   <!--  TODO: res 处理  -->
}).catch((err) => {
  <!--  TODO: err 处理  -->
});
```
