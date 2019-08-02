背景颜色组件
使用
import plateColor from '@/components/plateBackgroundColor/plateColor'

// 例子
<plateColor v-if="scope.row.plateNumber"
                            :plateCarNum="scope.row.plateNumber"
                            :plateColorNum="scope.row.plateColor" />
