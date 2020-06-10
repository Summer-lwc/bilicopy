<template>
    <div class="bilihead">
        <biliNav>
            <img id="logo" width='20px' src="../assets/bilibili-fill.png" alt="" slot="logo">
            <div slot="foot">
                <img id="wlogo" src="../assets/wlogo.png" alt="">
                <div class="shadow"></div>
            </div>
        </biliNav>
        <div class="bili-wrap">
            <ul>
                <li>
                    <router-link to="/"><a href="#"><div><i class="icon el-icon-s-home"></i><p>首页</p></div></a></router-link>
                    <router-link to="/forum"><a href="#"><div><i class="icon el-icon-orange"></i><p>动态</p></div></a></router-link>
                    <router-link to="/rank"><a href="#"><div><i class="icon el-icon-s-data"></i><p>排行榜</p></div></a></router-link>
                </li>
                <span class="line"></span>
                <li>
                    <div>动画<em>999+</em></div>
                    <div>音乐<em>999+</em></div>
                    <div>舞蹈<em>653</em></div>
                    <div>科技<em>999+</em></div>
                    <div>生活<em>999+</em></div>
                    <div>时尚<em>914</em></div>
                    <div>娱乐<em>999+</em></div>
                    <div>放映厅<em>467</em></div>
                    <div>番剧<em>107</em></div>
                    <div>国创<em>147</em></div>
                    <div>游戏<em>999+</em></div>
                    <div>数码<em>608</em></div>
                    <div>鬼畜<em>67</em></div>
                    <div>广告<em>141</em></div>
                    <div>影视<em>999+</em></div>
                    <div>搞笑<em>608</em></div>
                    <div>动物圈<em>67</em></div>
                    <div>美食圈<em>141</em></div>
                    <div>单机游戏<em>999+</em></div>
                    <div>VLOG</div>
                </li>
                <span class="line"></span>
                <li>
                    <div><i class="icon el-icon-data-board"></i><span>专栏</span></div>
                    <div><i class="icon el-icon-house"></i><span>小黑屋</span></div>
                    <div><i class="icon el-icon-s-flag"></i><span>活动</span></div>
                    <div><i class="icon el-icon-video-camera"></i><span>直播</span></div>
                    <div><i class="icon el-icon-document"></i><span>专题</span></div>
                    <div><i class="icon el-icon-medal-1"></i><span>赛事</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import biliNav from '../components/bilinav';
    export default {
        name:'bilihead',
        components:{
            biliNav
        }
    }
</script>

<style scpoed lang="less">
.bilihead{
    min-width: 1200px;
    width: 100%;
    background: url(../assets/bbg.png) no-repeat ;
    margin: 0 auto;
    position: relative;
    z-index: 0;
    min-height: 155px;
    color: #000;
    background-position: center center;
    background-size: cover;
    .bilinav{
        a{
            color: white;
        }
        .shadow{
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100px;
            background: linear-gradient(rgba(0,0,0,.4),transparent);
        }
        #wlogo{
            position: absolute;
            z-index: 3;
            top: 70px;
            left: 110px;
            width: 163px;
            height: 77px;
        }
    }
    .bili-wrap{
        position: relative;
        top: 100px;
        height: 108px;
        width: 1198px;
        margin: 0 auto;
        padding: 0 20px;
        ul{
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            padding: 20px 0;
            width: 100%;
            li{
                div{
                    float: left;
                    cursor: pointer;
                }
                &:nth-of-type(1){
                    a{
                        div{
                            cursor: pointer;
                            width: 50px;
                            height: 68px;
                            text-align: center;
                            white-space: nowrap;
                            border: 1px solid #fff;
                            border-radius: 16px;
                            transition: all .3s;
                            .icon{
                                width: 36px;
                                height: 36px;
                                border-radius: 50%;
                                font-size: 28px;
                                line-height: 36px;
                                color: #fff;
                            p{
                                margin-top: 5px;
                                font-size: 12px;
                            }
                            }
                        }
                        color: black;
                        &:hover{
                            color: #00a1d6;
                        }
                        &:nth-of-type(1) i{
                            background-color: #fb7299;
                        }
                        &:nth-of-type(2) i{
                            background-color: #fcba2a;
                        }
                        &:nth-of-type(3) i{
                            background-color: #00a1d6;
                        }
                    }
                }
                &:nth-of-type(2){
                    flex-wrap: wrap;
                    flex-direction: column;
                    height: 68px;
                    flex: 1;
                    color: #000;
                    font-size: 14px;
                    div{
                        padding: 7px 4px;
                        cursor: pointer;
                    }
                } 
                &:nth-of-type(3){
                    width: 220px;
                    display: flex;
                    flex-wrap: wrap;
                    height: 68px;
                    div{
                        line-height: 34px;
                        height: 34px;
                        width: 68px;
                    }
                    .icon{
                        font-size: 16px;
                        color: #00a1d6;
                    }
                    span{
                        padding-left: 5px;
                    }
                }
            }
        }
        em{
            font-style: normal;
            font-size: 12px;
            display: inline-block;
            background: #73c9e5;
            border-radius: 2px;
            color: #fff;
            margin-left: 1px;
            transform: scale(.85);
            width: 32px;
            text-align: center;
        }
        .line{
            margin: 0 15px;
            display: inline-block;
            height: 46px;
            border-left: 1px solid #e7e7e7;
        }
    }
}
</style>