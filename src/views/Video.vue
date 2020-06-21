<template>
    <div class="bilivideo">
        <biliNav>
            <img id="logo" width='70px' src="../assets/BILIBILI_LOGO.png" alt="" slot="logo">
        </biliNav>
        <main>
            <div class="left-content">
                <div class="title">
                    <h4>{{videoInfo.title}}</h4>
                    <div class="video-data">
                        <span class="a-crumbs">{{videoInfo.classify}}</span>
                        <span class="time">{{videoInfo.uploadtime | formateDate}}</span>
                        <span class="play-data"> 5播放 · 0弹幕</span>
                    </div>
                </div>
                <div class="player">
                        <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions">
                    </video-player>
                </div>
                <div class="interact">
                    <div class="interact-btn" :v-model="interact">
                        <span><i class="el-icon-message-solid"></i>{{interact[0] > 0 ? interact[0]:'点赞'}}</span>
                        <span><i class="el-icon-s-finance"></i>{{interact[1] > 0 ? interact[1]:'投币'}}</span>
                        <span><i class="el-icon-star-on"></i>{{interact[2] > 0 ? interact[2]:'收藏'}}</span>
                        <span><i class="el-icon-s-promotion"></i>{{interact[3] > 0 ? interact[3]:'分享'}}</span>
                    </div>
                    <span>稿件投诉</span>
                </div>
                <div class="des">
                    <p>{{videoInfo.des}}</p>
                    <span v-show="videoInfo.des.split('\r').length > 5">展开更多</span>
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
                <img width="638px" src="../assets/ad.jpg" alt="" class="ad">
                <div class="comments">
                    <h3>评论</h3>
                    <div class="title-tags">
                        <span :class="{'active':titleTags}" @click="titleTags = true">按热度排序</span>
                        <span :class="{'active':!titleTags}"  @click="titleTags = false">按时间排序</span>
                    </div>
                    <div class="sendComment">
                        <img src="../assets/user.jpg" alt="">
                        <textarea cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></textarea>
                        <button>发表评论</button>
                        <span>😀表情</span>
                    </div>
                    <ul class="commentsList">
                        <li>
                            <img src="../assets/user.jpg" alt="">
                            <div>
                                <h5>超超是小超人5</h5>
                                <p>这是一条评论。。就不存数据库了，，太多了</p>
                                <span>来自IOS客户端</span>
                                <span>2017-02-12 03：27</span>
                                <span>👍</span>
                                <span>👎</span>
                                <span>回复</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-content">
                <div class="upInfo">
                    <img src="../assets/user.jpg" alt="">
                    <span class="upname">超超是小超人5 </span>
                    <span class="send"><i class="el-icon-message"></i>发消息</span>
                    <span class="follow"><i class="el-icon-plus"></i>  关注</span>
                </div>
                <div class="liveCommenting">
                    <div class="title">
                        <span>弹幕列表</span>
                        <span>展开</span>
                    </div>
                </div>
                <img src="../assets/ad1.jpg" alt="" class="ad">
                <div class="recommend">
                    <div>相关推荐</div>
                    <ul>
                        <li>
                            <img src="../assets/cover32.jpg" alt="">
                            <div class="video-data">
                                <h5>【flumpool】【flumpool】【flumpool】【flumpool】【flumpool】【flumpool】【flumpool】【flumpool】【flumpool】</h5>
                                <p>超超是小超人</p>
                                <p>3187播放 · 30弹幕</p>
                            </div>
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
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
                titleTags: true,
                interact: [0,4,0,0],
                videoInfo: this.$store.state.videoItem,
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
                        src: '' 
                    }],
                    //你的封面地址
                    poster: '', 
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
        filters: {
            formateDate: function (datetime) {
                function addDateZero(num) {
                        return (num < 10 ? "0" + num : num);
                    }
                let d = new Date(datetime);
                let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
                return formatdatetime;
            }
        },
        mounted() { 
            this.playerOptions.sources[0].src = 'http://qbnqzf5cb.bkt.clouddn.com/'+this.videoInfo.videourl +'.mp4';
            this.playerOptions.poster = 'http://qbnqzf5cb.bkt.clouddn.com/image/'+this.videoInfo.cover+'.jpg';
            this.dynamicTags = this.videoInfo.tag.split(",");
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
        width: 988px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        .left-content{
            width: 638px;
            .title{
                h4{
                    margin: 0  0 12px;
                    font-size: 18px;
                    font-weight: 500;
                    color: #212121;
                    line-height: 26px;
                    height: 26px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .video-data{
                    font-size: 12px;
                    color: #999;
                    display: flex;
                    width: 250px;
                    flex-wrap: wrap;
                    span{
                        margin: 0  16px 14px 0;
                    }
                }
            }
            .player{
                width: 638px;
                height: 447px;
                background-color: black;
                position: relative;
                .video-player{
                    display: inline-block;
                    width: 624px;
                    height: 351px;
                    text-align: center;
                    border-radius: 4px;
                    overflow: hidden;
                    background: #fff;
                    position: relative;
                    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
                    margin: 48px 7px;
                }
            }
            .interact{
                display: flex;
                justify-content: space-between;
                padding-right: 10px;
                margin-top: 16px;
                padding-bottom: 12px;
                border-bottom: 1px solid #e5e9f0;
                .interact-btn{
                    span{
                        display: inline-block;
                        font-size: 14px;
                        margin-right: 10px;
                        line-height: 30px;
                        height: 30px;
                        :hover{
                            color: #00a1d6;
                            cursor: pointer;
                        }
                        i{
                            height: 30px;
                            font-size: 30px;
                            margin-left: 30px;
                            color: #757575;
                            vertical-align: middle;
                            &:first-of-type{
                                margin-left: 5px;
                            }
                        }
                    }
                }
                span{
                    font-size: 12px;
                    line-height: 30px;
                }
            }
            .des{
                white-space: pre-line;
                transition: all .3s;
                font-size: 12px;
                color: #212121;
                letter-spacing: 0;
                line-height: 18px;
                // min-height: 20px;
                // display: block;
                // height: 80px;
                width: 573px;
                margin: 16px 0;
                p{
                    margin-bottom: 10px;
                    max-height: 38px;
                    overflow: hidden;
                }
                span:hover{
                    color: #00a1d6;
                    cursor: pointer;
                }

            }
            .addTags{
                padding-bottom: 16px;
                border-bottom: 1px solid #e5e9f0;
                .el-tag{
                    background: #f4f4f4;
                    border-radius: 100px;
                    padding: 0 8px;
                    position: relative;
                    height: 28px;
                    line-height: 28px;
                    transition: all .3s;
                    font-size: 12px;
                    border: 1px solid #f4f4f4;
                    margin-right: 10px;
                    color: #000;
                    &:hover{
                        color: #00a1d6;
                        cursor: pointer;
                    }
                }
                .button-new-tag {
                    padding: 0 5px;
                    margin-left: 6px;
                    height: 28px;
                    line-height: 28px;
                    padding-bottom: 0;
                    vertical-align: middle;
                }
                .input-new-tag {
                    width: 90px;
                    margin-left: 6px;
                    vertical-align: middle;
                }
            }
            .comments{
                img{
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    margin-right: 32px;
                }
                h3{
                    font-weight: normal;
                }
                .title-tags {
                    border-bottom: 1px solid #e5e9f0;
                    padding: 8px 0;
                    span{
                        cursor: pointer;
                        margin-right: 14px;
                        padding: 8px 0;
                        &.active{
                            border-bottom: 1px solid #00a1d6;
                            color: #00a1d6;
                        }
                    }
                }
                .sendComment{
                    padding: 30px 0;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    border-bottom: 1px solid #e5e9f0;
                    textarea{
                        font-size: 12px;
                        display: inline-block;
                        box-sizing: border-box;
                        background-color: #f4f5f7;
                        border: 1px solid #e5e9ef;
                        overflow: auto;
                        border-radius: 4px;
                        color: #555;
                        width: 460px;
                        height: 65px;
                        transition: 0s;
                        padding: 5px 10px;
                        line-height: normal;
                        margin-right: 20px;
                        resize: none;
                    }
                    button{
                        width: 70px;
                        height: 64px;
                        padding: 4px 15px;
                        font-size: 14px;
                        color: #fff;
                        border-radius: 4px;
                        text-align: center;
                        min-width: 60px;
                        cursor: pointer;
                        background-color: #00a1d6;
                        border: 1px solid #00a1d6;
                        transition: .1s;
                        user-select: none;
                        outline: none;
                    }
                    >span{
                        margin-left: 80px;
                        padding: 0;
                        width: 66px;
                        height: 24px;
                        color: #99a2aa;
                        border: 1px solid #e5e9ef;
                        border-radius: 4px;
                        font-size: 12px;
                        text-align: center;
                        line-height: 23px;
                        margin-top: 3px;
                        cursor: pointer;
                        display: inline-block;
                    }
                }
                .commentsList{
                    li{
                        display: flex;
                        align-items: flex-start;
                        padding: 16px 0;
                        border-bottom: 1px solid #e5e9f0;
                        h5{
                            margin: 0;
                            color: #6d757a;
                            font-weight: normal;
                        }
                        p{
                            line-height: 20px;
                            padding: 2px 0;
                            font-size: 14px;
                            text-shadow: none;
                            overflow: hidden;
                            word-wrap: break-word;
                            word-break: break-word;
                        }
                        span{
                            margin-right: 20px;
                            color: #99a2aa;
                            line-height: 26px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .right-content{
            width: 320px;
            .upInfo{
                margin-bottom: 15px;
                img{
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    margin-right: 15px;
                }
                .upname{
                    font-size: 14px;
                    color: #212121;
                    font-weight: 500;
                    display: inline-block;
                    max-width: 180px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: top;
                    padding-top: 5px;
                }
                .send{
                    margin-left: 12px;
                    font-size: 12px;
                    color: #505050;
                    display: inline-block;
                    vertical-align: top;
                    padding-top: 6px;
                }
                .follow{
                    display: block;
                    background: #00a1d6;
                    color: #fff;
                    width: 156px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    margin-left: 64px;
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
            .liveCommenting{
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    height: 46px;
                    width: 100%;
                    background: #f4f4f4;
                    color: #222;
                    border-radius: 2px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    cursor: pointer;
                    padding: 0 16px;
                    span{
                        &:first-of-type{
                            font-size: 16px;
                            color: #222;
                        }
                        &:last-of-type{
                            font-size: 12px;
                        }
                    }
                }

            }
            .ad{
                width: 320px;
                height: 182px;
                margin: 24px 0;
            }
            .recommend{
                >div{
                    font-size: 16px;
                    color: #222;
                    margin-bottom: 6px;
                }
                li{
                    width: 320px;
                    height: 80px;
                    padding: 6px 0;
                    display: flex;
                    img{
                        width: 141px;
                        height: 80px;
                    }
                    .video-data{
                        margin-left: 10px;
                        h5{
                            font-size: 14px;
                            font-weight: 500;
                            height: 36px;
                            line-height: 18px;
                            margin-bottom: 6px;
                            word-break: break-all;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin: 0;
                        }
                        p{
                            color: #999;
                            font-size: 12px;
                            &:first-of-type{
                                margin: 6px 0 4px 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>