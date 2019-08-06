<template>
    <div class="box" :style="{'backgroundImage': 'url('+bg+')', 'backgroundSize': num}">
        <form action="" ref="form">
            <span v-show="!filePhoto" @click="close" :style="{'backgroundImage': 'url('+closeImg+')'}" class="close"></span>
            <input v-show="filePhoto" type="file" @change="fn($event)" capture="camera" class="photoBtn" accept="image/*">
        </form>
    </div>
</template>

<script>
// Exif.js 提供了 JavaScript 读取图像的原始数据的功能扩展，例如：拍照方向、相机设备型号、拍摄时间、ISO 感光度、GPS 地理位置等数据。http://code.ciaoca.com/javascript/exif-js/
import EXIF from 'exif-js';
export default {
    name: 'pictureUp',
    data () {
        return {
            bg: require('./add.png'),
            closeImg: require('./del.png'),
            filePhoto: true,
            num: 'auto',
            bgSrc:'',
            showAddCar: false
        } 
    },
    methods: {
        close () {
            this.filePhoto = true;
            this.bg = require('./add.png');
            this.num = 'auto';
            this.$emit('cleanImgUrl')
        },
        fn (e) {
            let obj = e.target;
            this.readURL(obj);
        },
        // base64 转换Blob
        dataURLtoBlob (dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type: mime});
        },
        upFile (file) {
            let form = this.$refs.form;
            // FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据
            let formData = new FormData(form);
            var blob = this.dataURLtoBlob(file);
            formData.append("image", blob, "image.png");
            /**
             * 
             * function ajax () {
             *  注意 Content-Type设置为 multipart/form-data
             *  this.$emit('picUp', 'http://1.png')
             * 
             * }
             * 
             */
        },
        readURL (input) {
            let self = this;
            if (input.files[0]) {
                var reader = new FileReader();
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
                reader.readAsDataURL(input.files[0]);
                reader.onload = function (e) {
                    var img = new Image();
                    img.src = e.target.result;
                    let deg = {
                        "1": '0',
                        "6": '90',
                        "8": '270',
                        "3": '180',
                    }
                    img.onload = function () {
                        canvas.width = '1000';
                        canvas.height = '1000';
                        EXIF.getData(img, function () {
                            var d = EXIF.getTag(this, "Orientation");
                            // 只有手机等设备拍摄才会有此参数
                            if (d && d != 1) {
                                ctx.translate(900, 0);
                                ctx.rotate(`${deg[d]}` * Math.PI / 180)
                                ctx.drawImage(img, 0, -100, 1000, 1000);
                            } else {
                                ctx.drawImage(img, 0, 0, 1000, 1000);
                            }
                            let data = canvas.toDataURL('image/jpeg');
                            self.upFile(data);
                        });
                    }
                    self.bg = e.target.result;
                    self.filePhoto = false;
                    input.value = '';
                    self.num = '100% 100%';
                }
            }
        }       
    }
}
</script>
<style lang="stylus" scoped>
.box
    height 120px;
    border 1px solid #ccc;
    background no-repeat center;
    display flex;
    justify-content space-around;
    align-items center;
    position relative
    .photoBtn
        width 70px;
        opacity 0;
    .close
        position absolute;
        width 20px;
        height 20px;
        background no-repeat;
        background-size contain;
        right 0;
        top 0;
    .modelBox
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 2003;
        background #ccc;
        .modelBox-1
            height 100%
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            .imgBg
                position absolute;
                left 0;
                right 0;
                top 0;
                bottom 0;
                max-width 100%;
                max-height 100%;
                margin auto;
</style>
