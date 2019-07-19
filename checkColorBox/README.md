> checkColorBox.vue是北京监管平台的车辆颜色选择组件


##使用方式
1.将checkColorBox.vue写在components中，按路径引入。
```
import checkColorBox from "@/components/checkColorBox"
```
2.在需要的地方引入
```
<checkColorBox :disabled="disabled"
                   :plateColor="plateColor"
                   @changeColor="changeColor"></checkColorBox>
```
>plateColor传递0-5
>对号icon 需要依赖element-ui
