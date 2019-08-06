import axios from "axios";
import qs from "qs";
import ElementUI from 'element-ui'
import Router from '@/router'

axios.defaults.timeout = 15000;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers['Session-Id'] = sessionStorage.token;

//接口地址:
axios.defaults.baseURL = "http://www.aipark.com/";
// axios.defaults.baseURL = "/acop/2.0/";
// axios.defaults.baseURL = "/acb/2.0/";

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method !== "get") {
      if (config.data) {
        //  POST传参序列化
        config.data = qs.stringify(config.data.data);
      }
    } else {
      config.params = config.data;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//code状态码200判断
axios.interceptors.response.use(
  res => {
    if (res.data.code != "200") {
      return Promise.reject(res.data);
    }
    if (res.data.state == 2) {
      ElementUI.MessageBox.alert('登录超时，请重新登录！').then(() => {
        Router.push('/');
        return
      });
      return
    } else if (res.data.state == 1) {
      ElementUI.MessageBox.alert(res.data.desc)
    } else if (res.data.state != 2) {
      return res.data;
    } else if (res.data.desc) {
      ElementUI.MessageBox.alert(res.data.desc)
      return
    }
    return res;
  },
  error => {
    ElementUI.MessageBox.alert(error.response.data.desc || error.response.statusText || '服务器响应失败！')
    return Promise.reject(error);
  }
);

export default axios;
