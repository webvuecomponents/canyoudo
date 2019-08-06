# 参数
* url: 请求接口url
* placeholder: Input的placeholder
* param: 请求参数的Key
* valueKey: 下拉列表值对应的Key
* obj: 额外的请求参数

# 方法
* clearName: 清空Input
* writeName： 向Input中写入文字信息
* @receiveData: 用于获取远程搜索选择的值

```javascript
    import autoComplete from '@/mycomponents/autocomplete'
    <autoComplete
      ref="operationName"
      placeholder='请输入运营商名称'
      param= 'operationName'
      url= '/acb/2.0/dasOperation/queryByName'
      valueKey= 'operationName'
      @receiveData = 'receiveData'
    ></autoComplete>
```