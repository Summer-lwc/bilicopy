<template>
    <div class="login">
        <biliNav>
            <img id="logo" width='70px' src="../assets/BILIBILI_LOGO.png" alt="" slot="logo">
        </biliNav>
        <div class="bgbar"><img src="../assets/bg3.png" alt=""></div>
        <main>
            <div id="title-banner">
                <span>登陆</span>
            </div>
            <div id="login-box">
                <div id="qrcode">
                    <img src="../assets/qrcode.png" width="144px" alt="">
                    <div id="qrcode-footer">
                        <p>扫描二维码登陆</p>
                        <p>请使用 <a href="https://app.bilibili.com/">哔哩哔哩客户端</a></p>
                        <p>扫码登陆</p>
                        <p>或扫码下载APP</p>
                    </div>
                </div>
                <div id="line"></div>
                <div id="login">
                    <span :class="login ? 'selected' : ''" @click="login = true">密码登录</span>
                    <span :class="!login ? 'selected' : ''" @click="login = false">短信登陆</span>
                    <div class="box" :class="login ? 'selected-box' : ''">
                        <input type="text" placeholder="用户名" v-model="username">
                        <input type="password" placeholder="密码" v-model="pwd">
                    </div>
                    <div class="box" :class="!login ? 'selected-box' : ''">
                        <input type="text" placeholder="填写常用手机号">
                        <input type="text" placeholder="请输入短信验证码">
                        <button>获取验证码</button>
                    </div>
                    <p :class="!loginErr ? 'display:none' : 'display:block'">{{loginErr}}</p>
                    <div id="remember">
                        <input type="radio" checked="checked" >记住我
                        <span>不是自己电脑不要勾选此项</span>
                        <span>无法验证？  忘记密码？</span>
                    </div>
                    <div id="submit">
                        <a  @click="userLogin">登陆</a>
                        <a >注册</a>
                        <p>微博账号登陆   QQ账号登陆</p>
                    </div>
                </div>
            </div>
            <p>登录即代表你同意<strong>用户协议</strong>和<strong>隐私政策</strong></p>
        </main>
        <bilifooter></bilifooter>
    </div>
</template>

<script>
    import biliNav from '../components/bilinav';
    import bilifooter from '../components/bilifooter'
    export default {
        name:'login',
        components:{biliNav,bilifooter},
        data() {
            return {
                login: true,
                username: '',
                pwd: '',
                loginErr: ''
            }
        },
        methods:{
            userLogin() {
                this.$axios.post('/users/login',{username:this.username,pwd:this.pwd}).then(res => {
                    console.log(res)
                    if(res.data.code == 200){
                        localStorage.setItem('token',res.data.token);
                        this.$store.commit('getUserInfo',{userImgurl:res.data.userImgurl,username:res.data.username});
                        this.$router.push('/');
                    }else{
                        this.loginErr = res.data.message;
                    }
                })
            },
            // userSign() {
            //     this.$axios.post('/users/sign',{username:this.username,pwd:this.pwd}).then(res => {
            //         console.log(res);
            //     })
            // }
        }
    }

</script>

<style scoped>
    .login{
        width: 100%;
        min-width: 1200px;
    }
    .bilinav{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
    .bgbar{
        width: 100%;
        background-color: #00A0D8;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .bgbar img{
        margin: 0 auto -20px;
    }
    main{
        width: 980px; 
        margin: 0 auto;
    }
    main #title-banner{
        height: 28px;
        margin: 0 auto;
        border-bottom: 1px solid #ddd;
        margin-bottom: 28px;
        text-align: center;
    }
    main #title-banner span{
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 38px;
        background: #fff;
        text-align: center;
    }
    main #login-box{
        height: 367px;
    }
    main #login-box::after{
        clear: both;
        display: block;
        content: "";
    }
    main #qrcode{
        float: left;
        text-align: center;
        position: relative;
        padding-top: 40px;
    }
    main #qrcode-footer{
        width: 480px;
        height: 150px;
        background: url(../assets/img2.png) no-repeat;
    }
    main #qrcode-footer p:first-of-type{
        text-align: center;
        color: #222;
        font-size: 18px;
        letter-spacing: 3px;
        margin:0 0 5px;
    }
    main #qrcode-footer p{
        color: #717171;
        font-size: 14px;
        margin: 0;
    }
    main #qrcode-footer a{
        text-decoration: none;
        color: #00a0d8;
    }
    main #line{
        float: left;
        border-right: 1px solid #ddd;
        height: 300px;
        margin-top: 28px;
    }
    main #login{
        float: right;
        width: 440px;
        padding-left: 50px;
        padding-top: 32px;
    }
    main #login>p{
        font-size: 14px;
        color: rgb(240, 85, 85);
    }
    main #login>span{
        padding: 0 15px 12px 0;
    }
    main #login .selected{
        color: #00a0d8;
    }
    main #login .box{
        display: none;
        position: relative;
    }
    main #login .box button{
        color: #fff;
        background-color: #00a1d6;
        border-color: #00a1d6;
        width: 130px;
        height: 36px;
        position: absolute;
        right: 31px;
        top: 87px;
        padding: 0 4px;
        border: none;
    }
    main #login .box input{
        width: 388px;
        border: 1px solid #ddd;
        color: #aaa;
        font-size: 14px;
        padding: 10px;
        height: 18px;
        vertical-align: middle;
        border-radius: 4px;
        margin: 15px 0;
    }
    main #login .selected-box{
        display: block;
    }
    main #remember span:first-of-type{
        color: #bbb;
        margin-left: 10px;
        font-size: 12px;
    }
    main #remember span:last-of-type{
        float: right;
        margin-right: 20px;
        color: #00a1d6;
        font-size: 12px;
    }
    main #remember{
        color: #717171;
        font-size: 12px;
        margin-top: 20px;
    }
    main #submit a{
        display: inline-block;
        height: 36px;
        border-radius: 2px;
        width: 184px;
        line-height: 38px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        margin:20px 12px;
        border: 1px solid #0381aa;
        color: #fff;
        background-color: #00a7de;
    }
    main #submit>input{
        color: #555;
        background-color: #fff;
        border: 1px solid #ccc;
    }
    main #submit p{
        color: #717171;
        font-size: 12px;
        margin: 0;
    }
    main>p{
        margin: 14px auto 20px;
        width: 980px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #99a2aa;
        text-align: center;
        line-height: 16px;
    }
</style>