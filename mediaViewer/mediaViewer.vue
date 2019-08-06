<template>
    <div class="previewer" ref="previewer" v-show="localDisplay">
        <div class="previewer-content" ref="content" @click.stop="close">
            <span
                class="previewer-prev"
                @click.stop="prev"
                :style="{cursor: canClick('prev') ? 'pointer' : 'not-allowed'}"
                :class="{'previewer-disabled': !canClick('prev')}"
            ></span>
            <i class="previewer-va-helper"></i>
            <template v-for="(media, i) in localMedia">
                <img
                    v-if="media.type === 'image'"
                    v-show="i == localCurrent"
                    :src="media.src"
                    :alt="media.title"
                    :key="media.src"
                />
                <video
                    v-if="media.type === 'video'"
                    v-show="i == localCurrent"
                    :src="media.src"
                    :key="media.src"
                    controls
                />
                <audio
                    v-if="media.type === 'audio'"
                    v-show="i == localCurrent"
                    :src="media.src"
                    :key="media.src"
                    controls
                />
            </template>
            <span
                class="previewer-next"
                @click.stop="next"
                :style="{cursor: canClick('next') ? 'pointer' : 'not-allowed'}"
                :class="{'previewer-disabled': !canClick('next')}"
            ></span>
        </div>
    </div>
</template>

<script>
const audioExtensions = ["wav", "mp3"];
const videoExtensions = ["ogg", "mp4", "webm"];

export default {
    name: "zMediaViewer",
    data() {
        return {
            localDisplay: this.visible,
            localCurrent: this.current
        };
    },
    props: {
        media: {
            type: Array,
            required: true
        },
        visible: {
            type: Boolean,
            required: true
        },
        current: {
            type: Number,
            default: 0
        }
    },
    computed: {
        localMedia() {
            return this.media.map(item => {
                let res = {
                    src: item.src,
                    title: item.title,
                    type: ""
                };
                const extension = item.src.slice(item.src.lastIndexOf(".") + 1);
                if (videoExtensions.includes(extension)) {
                    res.type = "video";
                } else if (audioExtensions.includes(extension)) {
                    res.type = "audio";
                } else {
                    res.type = "image";
                }
                return res;
            });
        },
        currentMediaTitle() {
            if (this.localMedia && this.localMedia.length) {
                return this.localMedia[this.localCurrent].title;
            } else {
                return "";
            }
        }
    },
    watch: {
        visible(v) {
            this.localDisplay = v;
        },
        localDisplay(v) {
            if (v) {
                document.body.appendChild(this.$refs.previewer);
                this.$emit("show", this.localMedia[this.localCurrent]);
                window.addEventListener("keyup", this.escHandler);
            } else {
                this.$emit("hide", this.localMedia[this.localCurrent]);
                window.removeEventListener("keyup", this.escHandler);
            }
        },
        current(v) {
            if (v !== this.localCurrent) {
                this.localCurrent = v;
            }
        },
        localCurrent(v) {
            this.$emit(
                "change",
                this.localMedia[this.localCurrent],
                this.localCurrent
            );
        }
    },
    methods: {
        close() {
            this.localDisplay = false;
        },
        prev() {
            if (this.localCurrent > 0) --this.localCurrent;
        },
        next() {
            if (this.localCurrent < this.localMedia.length - 1)
                ++this.localCurrent;
        },
        canClick(direc) {
            if (direc === "prev") {
                return (
                    this.localMedia &&
                    this.localMedia.length &&
                    this.localCurrent > 0
                );
            } else {
                return (
                    this.localMedia &&
                    this.localMedia.length &&
                    this.localCurrent < this.localMedia.length - 1
                );
            }
        },
        escHandler(e) {
            if(e.keyCode === 37 || e.keyCode === 38) {
              this.prev()
            } else if (e.keyCode === 39 || e.keyCode === 40) {
              this.next()
            } else if (e.keyCode === 27) {
              this.close();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.previewer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
}
.previewer-content {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    user-select: none;
}
.previewer-va-helper {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}
.previewer-content > video,
.previewer-content > audio,
.previewer-content > img {
    vertical-align: middle;
    max-width: 90%;
    max-height: 90%;
}
.previewer-next,
.previewer-prev {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 72px;
    height: 96px;
    overflow: hidden;
    margin-top: -48px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
}
.previewer-next:before,
.previewer-prev:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
}
.previewer-next:hover:before,
.previewer-prev:hover:before {
    opacity: 0.3;
}
.previewer-next:after,
.previewer-prev:after {
    content: "";
    display: inline-block;
    position: relative;
    color: #fff;
    top: 50%;
    left: 6px;
    margin-top: -14px;
    width: 28px;
    height: 28px;
    border-left-width: 1px;
    border-left-style: solid;
    border-top-width: 1px;
    border-top-style: solid;
    transform: rotate(-45deg);
}
.previewer-next {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}
.previewer-disabled:hover {
    cursor: not-allowed;
}
.previewer-disabled:hover:before,
.previewer-disabled:hover:before {
    opacity: 0.1;
}
.previewer-disabled:after,
.previewer-disabled:after {
    opacity: 0.2;
}
.previewer:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    background: #000;
}
</style>