# ����
* url: ����ӿ�url
* placeholder: Input��placeholder
* param: ���������Key
* valueKey: �����б�ֵ��Ӧ��Key
* obj: ������������

# ����
* clearName: ���Input
* writeName�� ��Input��д��������Ϣ
* @receiveData: ���ڻ�ȡԶ������ѡ���ֵ

```javascript
    import autoComplete from '@/mycomponents/autocomplete'
    <autoComplete
      ref="operationName"
      placeholder='��������Ӫ������'
      param= 'operationName'
      url= '/acb/2.0/dasOperation/queryByName'
      valueKey= 'operationName'
      @receiveData = 'receiveData'
    ></autoComplete>
```