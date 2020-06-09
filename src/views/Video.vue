<template>
    <div class="bilivideo">
        <biliNav>
            <img id="logo" width='70px' src="../assets/BILIBILI_LOGO.png" alt="" slot="logo">
        </biliNav>
        <main>
            <div class="left-content">
                <div class="title">
                    <h4>2020的第一个日出</h4>
                    <div>
                        <span>生活 > 日常</span>
                        <span>2020-01-01 22:36:57</span>
                        <span> 5播放 · 0弹幕</span>
                        <span>🚫 未经作者授权，禁止转载</span>
                    </div>
                </div>
                <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">
                </video-player>
                <div>
                    <div>
                        <i class="el-icon-message-solid"></i>
                        <i class="el-icon-s-finance"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-s-promotion"></i>
                    </div>
                    <span>稿件投诉</span>
                </div>
                <div class="des">
                    <p></p>
                    <span>展开更多</span>
                </div>
                <div class="addTags">
                    <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                        >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ New Tag</el-button>
                </div>
                <img src="" alt="" class="ad">
                <div class="comments">
                    <h3>评论</h3>
                    <div>
                        <span>按热度排序</span>
                        <span>按时间排序</span>
                    </div>
                    <div class="sendComment">
                        <img src="" alt="">
                        <textarea cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></textarea>
                        <button>发表评论</button>
                        <span>😀表情</span>
                    </div>
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h5>暖色的梅子酱</h5>
                            <p>我已经对这个live中毒了…满脑子都是这个live鲜艳色彩的画面 这首歌轻快愉悦的旋律 和这个穿白踢的青年的笑颜QAQ</p>
                            <span>来自IOS客户端</span>
                            <span>2017-02-12 03：27</span>
                            <span>👍</span>
                            <span>👎</span>
                            <span>回复</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-content">
                <div class="upInfo">
                    <img src="" alt="">
                    <span><i class="el-icon-message"></i>发消息</span>
                    <span></span>
                    <span>+  关注</span>
                </div>
                <div class="liveCommenting">
                    <div class="title">
                        <span>弹幕列表</span>
                        <span>收起</span>
                    </div>
                    <div class="head">
                        <span>时间</span>
                        <span>弹幕内容</span>
                        <span>发送时间</span>
                    </div>
                    <ul>
                        <li>
                            <span class="time">00:01</span>
                            <span class="content">好清爽的少年啊</span>
                            <span class="sendtime">03-02 22:10</span>
                        </li>
                    </ul>
                    <span>查看历史弹幕</span>
                </div>
                <div class="recommend">
                    <span>相关推荐</span>
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h5>【flumpool】</h5>
                            <p>超超是小超人</p>
                            <p>3187播放 · 30弹幕</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import biliNav from '../components/bilinav';
    export default {
        name:'bilivideo',
        components:{biliNav},
        data() {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: 'http://qbnqzf5cb.bkt.clouddn.com/video1.mp4' 
                    }],
                    //你的封面地址
                    poster: 'http://qbnqzf5cb.bkt.clouddn.com/image/cover1.jpg', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }
 
            }
        },
        mounted() { 

        },
        methods: {
            showInput() {
                this.inputVisible = true;
                this.$nextTick(() => {
                this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style lang="less" scoped>
    .bilivideo{
        width: 100%;
        min-width: 1200px;
    }
    .bilinav {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
    main{
        width: 980px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        .left-content{
            .video-player{
                display: inline-block;
                width: 624px;
                height: 351px;
                text-align: center;
                line-height: 100px;
                border: 1px solid transparent;
                border-radius: 4px;
                overflow: hidden;
                background: #fff;
                position: relative;
                box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
                margin-right: 4px;
            }
            .video-player:hover{
                display: block;
            }
        }
        .el-tag{
            margin: 0 6px 8px 0;
            background: #f4f4f4;
            border-radius: 100px;
            padding: 0 8px;
            position: relative;
            height: 22px;
            line-height: 22px;
            transition: all .3s;
            font-size: 12px;
            border: 1px solid #f4f4f4;
            margin-left: 10px;
            color: #000;
            &:hover{
                color: #00a1d6;
                cursor: pointer;
            }
        }
        .button-new-tag {
            padding: 0 5px;
            margin-left: 6px;
            height: 22px;
            line-height: 22px;
            padding-bottom: 0;
            vertical-align: middle;
        }
        .input-new-tag {
            width: 90px;
            margin-left: 6px;
            vertical-align: middle;
        }
    }
</style>