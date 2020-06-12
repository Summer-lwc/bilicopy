<template>
    <div class="forum">
         <biliNav>
            <img id="logo" width='70px' src="../assets/BILIBILI_LOGO.png" alt="" slot="logo">
        </biliNav>
        <div id="main" class='clearfix'>
            <aside>
                <div id="info">
                    <img :src="'http://qbnqzf5cb.bkt.clouddn.com/image/'+this.$store.state.userImgurl+'.jpg'" alt="">
                    <span>{{this.$store.state.username}}</span>
                    <ul>
                        <li>
                            <p>29</p>
                            <p>关注</p>
                        </li>
                        <li>
                            <p>0</p>
                            <p>粉丝</p>
                        </li>
                        <li>
                            <p>2</p>
                            <p>动态</p>
                        </li>
                    </ul>
                </div>
                <div class="topics">
                    <div class="topics_header">
                        <span>我关注的话题</span>
                        <span>更多></span>
                    </div>
                    <ul>
                        <li>#生活#</li>
                        <li>#旅游#</li>
                        <li>#技术#</li>
                        <li>#摄影#</li>
                        <li>#宠物#</li>
                    </ul>
                </div>
            </aside>
            <main>
                <div id="release">
                    <textarea placeholder="有什么和大家分享的？" name="content" cols="30" rows="10"></textarea>
                    <ul>
                        <li>表情</li>
                        <li>图片</li>
                        <li>话题</li>
                        <li>投票</li>
                        <li>定时</li>
                    </ul>
                    <button>发布</button>
                </div>
                <div id="nav">
                    <ul>
                        <li :class="navId == 1? 'selected' : ''" @click="navId = 1">全部</li>
                        <li :class="navId == 2? 'selected' : ''" @click="navId = 2">投稿视频</li>
                        <li :class="navId == 3? 'selected' : ''" @click="navId = 3">追番</li>
                        <li :class="navId == 4? 'selected' : ''" @click="navId = 4">小视频</li>
                        <li :class="navId == 5? 'selected' : ''" @click="navId = 5">图片</li>
                        <li :class="navId == 6? 'selected' : ''" @click="navId = 6">专栏</li>
                    </ul>
                </div>
                <ul id="contents">
                    <li :style="navId != 1?'display:none' : ''">
                        <img class="usericon" src="../assets/user1.jpg" alt="">
                        <span class="username">doyoudo</span>
                        <span class="releaseTime">14小时前</span>
                        <span class="userContent">考虑买书的小伙伴 要看这条视频呀...了解一下内容再购买哦。最后谢谢大家这一年对我们的支持。新的一年，我们也会加油ヾ(◍°∇°◍)ﾉﾞヾ(◍°∇°◍)ﾉﾞ哒！</span>
                        <div class="content">
                            <img src="../assets/imguser1.jpg" alt="">
                            <h6>【小白小莫】来doyoudo的第三年~我们出书啦！！！</h6>
                            <p>一定要仔细看过视频之后再考虑是否购买哦~ 希望大家在新的一年里 继续支持我们~我们会努力的做好一股清流的 哈哈哈哈哈 书籍在京东 当当 天猫都有卖</p>
                            <div>
                                <span>播放量 2.5万</span>
                                <span>评论 161</span>
                            </div>
                        </div>
                        <div class="ui">
                            <span>转发 15</span>
                            <span>评论 208</span>
                            <span>点赞 1720</span>
                        </div>
                    </li>
                    <li :style="navId != 1?'display:none' : ''">
                        <img class="usericon" src="../assets/user3.jpg" alt="">
                        <span class="username">是落拓呀</span>
                        <span class="releaseTime">17小时前</span>
                        <span class="userContent">跟落拓一起来做年度计划吧。关注落拓的公众号：落拓的全能教室(id:luotuojiaoshi)，回复年度计划，获取我的年度计划高清大图。</span>
                        <div class="content">
                            <img src="../assets/userimg3.jpg" alt="">
                            <h6>“现充”程序员手把手带你做2020年度计划 | 做个能做到...</h6>
                            <p>跟落拓一起来做年度计划吧。关注落拓的公众号：落拓的全能教室(id:luotuojiaoshi)，回复年度计划，获取我的年度计划高清大图。</p>
                            <div>
                                <span>播放量 9692</span>
                                <span>评论 57</span>
                            </div>
                        </div>
                        <div class="ui">
                            <span>转发 10</span>
                            <span>评论 70</span>
                            <span>点赞 772</span>
                        </div>
                    </li>
                    <li :style="navId != 1?'display:none' : ''">
                        <img class="usericon" src="../assets/user2.jpg" alt="">
                        <span class="username">fly51fly</span>
                        <span class="releaseTime">23小时前</span>
                        <span class="userContent">#AI##机器学习##深度学习#【Kaggle开放日：Kaggle比赛教程】《Kaggle Competition Tutorial | Kaggle - YouTube》by Gabor Fodor</span>
                        <div class="content">
                            <img src="../assets/imguser2.jpg" alt="">
                            <h6>Kaggle开放日：Kaggle比赛教程 by Gabor Fodor</h6>
                            <p>https://www.youtube.com/watch?v=Vb9rm34uw3w
                                    【Kaggle开放日：Kaggle比赛教程】《Kaggle Competition Tutorial | Kaggle - YouTube》by Gabor Fodor https://www.youtube.com/watch?v=Vb9rm34uw3w</p>
                            <div>
                                <span>播放量 205</span>
                                <span>评论 0</span>
                            </div>
                        </div>
                        <div class="ui">
                            <span>转发 1</span>
                            <span>评论</span>
                            <span>点赞 8</span>
                        </div>
                    </li>
                    <li :style="navId != 1?'display:none' : ''">
                        <img class="usericon" src="../assets/user4.jpg" alt="">
                        <span class="username">塔塔丁小瓜</span>
                        <span class="releaseTime">1天前</span>
                        <span class="userContent">#跨年加油站##阅读##读书#2020想拍更多的vlog记录生活 顺便练习下剪辑 请大家多多给我意见呀 爱你们</span>
                        <div class="content">
                            <img src="../assets/imguser3.jpg" alt="">
                            <h6>读书vlog/宅在家里的一天/做饭/看书/画画/整理家</h6>
                            <p></p>
                            <div>
                                <span>播放量 651</span>
                                <span>评论 30</span>
                            </div>
                        </div>
                        <div class="ui">
                            <span>转发</span>
                            <span>评论 25</span>
                            <span>点赞 62</span>
                        </div>
                    </li>
                    <li id="noData" :style="navId != 1?'display:block' : ''">
                        <img src="../assets/nodata02.png" alt="">
                    </li>
                </ul>
            </main>
            <div id="bbs">
                <div id="notice">
                    <span>公告栏</span>
                    <img src="../assets/img1.jpg" alt="">
                </div>
                <div class="topics">
                        <div class="topics_header">
                        <span>热门话题</span>
                        <span>更多></span></div>
                        <ul>
                            <li>#bilibili晚会#</li>
                            <li>#2019年最不舍的删掉的照片#</li>
                            <li>#UP荣誉年报#</li>
                            <li>#bilibili新星计划#</li>
                            <li>#年度红黑盛典#</li>
                            <li>#我要捉虫#</li>
                            <li>#创作训练营#</li>
                            <li>#1月打卡挑战#</li>
                        </ul>
                </div>
            </div>
        </div>
        <img id="top" src="../assets/top.png" alt="" >
    </div>
</template>

<script>
    import biliNav from '../components/bilinav';
export default {
    name:'Fourm',
    components:{biliNav},
    data() {
        return {
            navId:1
        }
    },
}
</script>
<style scoped>
    .bilinav{
        z-index: 3;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
    .bilinav ul li#download div p{ 
        left: 442px;
    }
    .forum{
        width: 100%;
        min-height: 100vh;
        position: relative;
        background: url(../assets/bg.png) no-repeat fixed;
        min-width: 1198px;
    }
    #top{
        display: none;
        position: fixed;
        top: 80%;
        right: 30px;
    }
    #main{
        width: 1200px;
        margin: -40px auto 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 14px;
        position: relative;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }
    .clearfix:after {
        clear: both
    }
    aside{
        float: left;
        margin: 50px 0;
        width: 244px;
    }
    aside #info{
        position: relative;
        width: 244px;
        height: 188px;
        background-color: #fff;
        border-radius: 4px;
        background-image: url(../assets/bg2.png);
        background-size: 100% 64px;
        background-repeat: no-repeat;
    }
    aside #info img{
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        top: 48px;
        left: 16px;
    }
    aside #info span{
        font-size: 13px;
        letter-spacing: 0;
        margin-left: 85px;
        padding-top: 10px;
        position: absolute;
        top: 60px;
    }
    aside #info ul{
        width: 192px;
        height: 92px;
        margin: 0 26px 0 26px;
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 100px;
    }
    aside #info ul li{
        width: calc(100% / 3);
        height: 92px;
        text-align: center;
        font-weight: bold;
    }
    aside #info ul li p:first-of-type{
        font-size: 14px;
        color: rgb(0, 161, 214);
        margin-bottom: 13px;
        margin-top: 20px;
    }
    aside #info ul li p:last-of-type{
        font-size: 12px;
        color: #99a2aa;
    }
    .topics{
        background-color: #fff;
        position: relative;
        width: 244px;
        border-radius: 4px;
        margin-top: 8px;
    }
    .topics .topics_header{
        display: flex;
        justify-content: space-between;
        padding: 12px 16px 2px;
        padding-bottom: 2px;
        color: rgb(34, 34, 34);
    }
    .topics .topics_header span:last-of-type{
        color: rgb(153, 162, 170);
        font-size: 12px;
    }
    .topics ul{
        padding: 14px 16px 2px;
    }
    .topics ul li{
        display: block;
        color: #00a1d6;
        margin-bottom: 14px;
    }
    main{
        margin: 0 8px 10px;
        width: 675px;
        float: left;
    }
    main>div{
        margin-top: 8px;
        background-color: #fff;
        border-radius: 4px;
    }
    main #release{
        position: relative;
        padding: 15px;
        height: 116px;
        margin-top: 50px;
    }
    main #release ul{
        display: flex;
        flex-direction: row;
        font: 400 14px Arial;
        color: #99a2aa;
        line-height: 45px;
    }
    main #release ul li{
        padding: 0px 7px;
    }
    main #release textarea{
        width: 100%;
        height: 76px;
        letter-spacing: 1px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 4px 12px;
        overflow: auto;
        white-space: pre-wrap;
        color: #222;
        background-color: #e5e9ef;
        font-size: 14px;
        vertical-align: baseline;
        outline: none;
        border: 1px solid transparent;
        line-height: 22px;
        border-radius: 4px;
        word-break: break-all;
        resize: none;
    }
    textarea::-webkit-input-placeholder {
        font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
    }
    main #release button{
        position: absolute;
        top: 100px;
        right: 13px;
        width: 70px;
        height: 32px;
        outline: none;
        background-color: #ffaec9;
        color: #fff;
        border: none;
        border-radius: 4px;
        font: 400 14px Arial;
    }
    main #nav{
        width: 100%;
        height: 48px;
        position: relative;
    }
    main #nav ul{
        display: flex;
        flex-direction: row; 
    }
    main #nav ul li{
        display: inline-block;
        min-width: 56px;
        height: 46px;
        text-align: center;
        margin-left: 20px;
        line-height: 46px;
        color: #99a2aa;
    }
    main #nav .selected{
        color: #00a1d6;
        border-bottom: 2px solid #00a1d6;
    }
    main #contents li{
        margin-top: 8px;
        background-color: #fff;
        position: relative;
        height: 295px;
    }
    main #contents li .usericon{
        position: absolute;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        top: 24px;
        left: 24px;
    }
    main #contents li .username{
        position: absolute;
        top: 30px;
        left: 80px;
        color: #222;
        font-size: 16px;
    }
    main #contents li .releaseTime{
        position: absolute;
        top: 45px;
        left: 80px;
        font-size: 12px;
        margin-top: 8px;
        color: #99a2aa;
    }
    main #contents li .userContent{
        font-size: 14px;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: normal;
        word-wrap: break-word;
        width: 512px;
        position: relative;
        top: 75px;
        left: 80px;
    }
    main #contents .content{
        width: 520px;
        height: 127px;
        background: #fff;
        border-radius: 4px;
        text-align: left;
        position: relative;
        border: 1px solid #e5e9ef;
        overflow: hidden;
        top: 85px;
        left: 80px;
    }
    main #contents .content h6{
        position: absolute;
        top: 0px;
        margin: 8px 0px 15px;
        left: 210px;
    }
    main #contents .content p{
        position: absolute;
        top: 20px;
        left: 213px;
        font-size: 12px;
        color: #99a2aa;
    }
    main #contents .content div{
        position: absolute;
        top: 100px;
        left: 215px;
        font-size: 12px;
        color: #99a2aa;
    }
    main #contents .ui{
        position: absolute;
        top: 267px;
        left: 80px;
        font-size: 12px;
        color: #99a2aa;
    }
    main #contents .ui span{
        margin-right: 92px;
    }
    #noData{
        display: none;
    }
    #noData img{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    #bbs{
        float: left;
        width: 255px;
        margin-top: 50px;
    
    }
    #notice {
        height: 135px;
        padding-top: 12px;
        background-color: #fff;
        border-radius: 4px;
    }
    #notice span{
        padding-top: 20px;
        padding-left: 16px;
        padding-bottom: 8px;
    }
    #notice img{
        padding: 8px 16px;
        padding-bottom: 8px;
        width:223px;
    }
    #bbs .topics{
        width: 255px;
    }
</style>