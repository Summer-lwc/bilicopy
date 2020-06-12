<template>
    <div class="bilinav">
        <ul>
            <li>
                <slot name="logo"></slot>
            </li>
            <li><a href="#">主站</a></li>
            <li><a href="#">游戏中心</a></li>
            <li><a href="#">直播</a></li>
            <li><a href="#">会员购</a></li>
            <li><a href="#">漫画</a></li>
            <li><a href="#">赛事</a></li>
            <li id="download">
                <a href="#">下载APP</a>
                <div>
                    <img src="../assets/app-download.png" alt="下载APP">
                    <p>扫码下载手机客户端</p>
                </div>
            </li>
        </ul>
        <el-input placeholder="累了就看一下鬼畜" v-model="input3" class="input-with-select"> 
            <el-button slot="append" icon="el-icon-search" @click="search(input3)"></el-button>
        </el-input>
        <ul>
            <li><img  id="userImg" :src="isLogin ? 'http://qbnqzf5cb.bkt.clouddn.com/image/'+ this.$store.state.userImgurl +'.jpg' : require('../assets/akari.jpg')" alt="头像"></li>
            <li v-if="isLogin"><a href="#">大会员</a></li>
            <li v-if="isLogin"><a href="#">消息</a></li>
            <li v-if="isLogin"><a href="#">动态</a></li>
            <li v-if="isLogin"><a href="#">稍后再看</a></li>
            <li v-if="isLogin"><a href="#">收藏</a></li>
            <li v-if="isLogin"><a href="#">历史</a></li>
            <li v-if="isLogin"><a href="#">创作中心</a></li>
            <li v-if="!isLogin"><router-link to="/login"><a href="#">登陆</a></router-link></li>
            <li v-if="!isLogin"><router-link to="/login"><a href="#">注册</a></router-link></li>
            <li><el-button  id="upload">投稿</el-button></li>
        </ul>
        <slot name="foot"></slot>
    </div>
</template>

<script>

    export default {
        name:'bilinav',
        data() {
            return {
                input3:'',
                isLogin: this.$store.state.isLogin,
            }
        },

        mounted(){
            this.islogin();
        },
        methods:{
            islogin(){
                const token = localStorage.getItem('token');
                this.isLogin = token ? true : false;
            },
            search(keyword){
                this.$router.push({name:'Search',params:{
                    keyword: keyword,
                }})
            }
        }
    }
</script>

<style scpoed lang="less">

.bilinav{
    position: relative;
    height: 56px;
    box-sizing: border-box;
    display: flex;
    line-height: 36px;
    padding: 10px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 14px;
    ul{
        display: flex;
        li{
            margin-right: 12px;
            white-space:nowrap;
            &#download{
                a:hover + div{
                    display: block;
                }
                div{
                    display: none;
                    position: relative;
                    img{
                        z-index: 5;
                        position: absolute;
                        transform: translate(-80px,10px);
                        height: 200px;
                        width: 240px;
                    }
                    p{
                        z-index: 6;
                        position: absolute;
                        top: 165px;
                        left: -15px;
                    }
                }

            }
            #userImg{
                border: 0 solid #fff;
                border-radius: 50%;
                height: 35px;
                margin-left: 5px;
            }
            #upload{
                cursor: pointer;
                position: relative;
                color: #fff;
                font-size: 14px;
                display: block;
                width: 100px;
                height: 36px;
                text-align: center;
                background: #fb7299;
                border-radius: 2px;
                border: none;
            }
            #logo{
                vertical-align: middle;
            }
        }
    }
    .el-input{
        max-width: 500px;
    }
    .el-input__inner{
        height: 35px;
    }
}

</style>