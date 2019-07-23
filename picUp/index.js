import pictureUp from './pictureUp.vue' // 导入组件
const pictureUpPlugin = {
    install (Vue, options) {
        Vue.component(pictureUp, pictureUp)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(filePlugin);
}
export default pictureUpPlugin;