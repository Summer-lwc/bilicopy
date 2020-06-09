<template>
    <div class="bilifooter">
        <ul>
            <li>
                <h6>bilibili</h6>
                <div>关于我们</div>
                <div>联系我们</div>
                <div>加入我们</div>
                <div>友情链接</div>
                <div>bilibili认证</div>
                <div>Investor Relations</div>
            </li>
            <li>
                <h6>传送门</h6>
                <div>帮助中心</div>
                <div>高级弹幕</div>
                <div>活动专题页</div>
                <div>侵权申诉</div>
                <div>活动中心</div>
                <div>用户反馈论坛</div>
                <div>壁纸站</div>
                <div>名人堂</div>
                <div>专车号服务中心</div>
            </li>
            <li>
                <div>
                    <div class="img"></div>
                    <em>客户端下载</em>
                </div>
                <div>
                    <div class="img"></div>
                    <em>新浪微博</em>
                </div>
                <div>
                    <div class="img"></div>
                    <em>官方微信</em>
                </div>
            </li>
        </ul>
        <div id="foot">
            <ul>
                <li><img src="../assets/partner.png" alt=""></li>
                <li><img src="../assets/pic962110.png" alt=""></li>
                <li><img src="../assets/websafe.png" alt=""></li>
            </ul>
            <div>
                <p>广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案：沪ICP备13002172号-3 沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 | 营业执照</p>
                <p>上海互联网举报中心 |12318 全国文化市场举报网站 | 沪公网安备 31011002002436号 |儿童色情信息举报专区 | 网上有害信息举报专区： 中国互联网违法和不良信息举报中心</p>
                <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'bilifooter'
    }
</script>

<style scpoed lang="less">
.bilifooter{
    width: 100%; 
    min-width: 1198px;
    padding-top: 20px;
    color: #99a2aa;
    font-size: 12px;
    background-color: #f6f9fa;
    >ul{
        width: 1160px;
        display: flex;
        margin: 0 auto;
        padding: 0;
        li{
            float: left;
            text-align: left;
            list-style: none;
            height: 112px;
            padding-right: 25px;
            line-height: 1;
            font-size: 14px;
            h6{
                margin: 0 0 22px;
            }
            div{
                cursor: pointer;
                color: #222;
                float: left;
                width: 120px;
                position: relative;
                margin-bottom: 16px;
                box-shadow: 0 0 black;
                &:hover{
                    color: #00a0d8;
                }
            }
            &:first-of-type{
                width: 360px;
                div{
                    width: 120px;   
                }
            }
            &:nth-of-type(2){
                padding-right: 40px;
                padding-left: 39px;
                width: 360px;
                border-left: solid 1px #e5e9ef;
            }
            &:last-of-type{
                width: 280px;
                padding-right: 0;
                height: 112px;
                padding-right: 25px;
                padding-left: 24px;
                border-left: solid 1px #e5e9ef;
                >div{
                    position: relative;
                    width: 82px;
                    height: 80px;
                    float: left;
                    &:nth-of-type(1) .img{
                        background: url(../assets/icons.png) no-repeat -1024px -194px;
                    }
                    &:nth-of-type(2) .img{
                        background: url(../assets/icons.png) no-repeat -1024px -322px;
                    }
                    &:nth-of-type(3) .img{
                        background: url(../assets/icons.png) no-repeat -1024px -66px;
                    }
                }
            }
        }
    }
    .img{
        position: relative;
        margin-left: 11px;
        width: 60px;
        height: 60px;
    }
    em{
        position: absolute;
        width: 82px;
        line-height: 14px;
        float: left;
        bottom: 0;
        left: 0;
        text-align: center;
        font-weight: normal;
        font-style: normal;
        cursor: pointer;
    }
    >div{
        width: 980px;
        margin: 0 auto;
    }
    #foot{
        width: 1160px;
        display: flex;
        ul{
            display: block;
            padding: 0px;
            img{
                width: 100px;
            }
        }
        div{
            padding: 10px 0px 20px 20px;
            line-height: 25px;
        }
    }
}
</style>