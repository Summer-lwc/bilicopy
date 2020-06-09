<template>
  <div class="home">
    <bilihead>
    </bilihead>
      <a href="" class="aside">试用反馈</a>
      <a href="" class="aside">联系客服</a>
      <div class="content-box">
        <div class="report">
          <el-carousel height="240px">
              <el-carousel-item v-for="(item,i) in imgList" :key="i">
                  <img :src="item.img" alt="">
                  <h3 class="small">{{ item.title }}</h3>
              </el-carousel-item>
          </el-carousel>
          <ul>
              <li v-for="(item,i) in activeList1" :key="i">
                  <img :src="item.img" alt="">
                  <p class="small">{{ item.title }}</p>
              </li>
          </ul>
        </div>
        <div class="tuiguang clearfix">
          <el-card class="box-card clearfix">
            <div slot="header" class="clearfix">
              <img src="../assets/tuiguang.png" alt="" height="36px;">
              <span>推广     </span>
              <i class="el-icon-service"></i>
              <span> B站和QQ音乐的小秘密竟然是......</span>
            </div>
            <ul>
              <li v-for="(item,i) in tuiguangData" :key="i">
                  <img :src="item.img" alt="" width="206px">
                  <p class="time">{{ item.time }}</p>
                  <p class="vtitle">
                      <el-tag size="mini" effect="plain" type="info" v-if="item.isAd" style="height: 15px;padding: 0px;line-height:15px;">广告</el-tag>
                      <span>{{ item.title }}</span>
                  </p>
                  <p class="username">
                      <el-tag size="mini" effect="plain" type="info" style="height: 15px;padding: 0px;line-height:15px;">UP</el-tag>
                      <span>{{ item.username }}</span>
                  </p>
              </li>
            </ul>
          </el-card>
          <div class="ad">
            <el-button plain type="info">在线列表</el-button>
            <img src="../assets/tuiguang5.jpg" alt="">
          </div>
        </div>
        <img src="../assets/bg4.jpg" alt="" height="100px">
        <div class="documentary clearfix">
          <el-card class="box-card clearfix">
            <div slot="header" class="box-header clearfix">
              <div>
                <img src="../assets/documentary.png" alt="" height="36px;">
                <span>纪录片</span>
              </div>
              <div>
                <el-tag size="mini" effect="plain" type="info">换一下</el-tag>
                <el-tag size="mini" effect="plain" type="info">更多></el-tag>
              </div>
            </div>
            <ul>
              <li v-for="(item,i) in documentaryData" :key="i">
                <img :src="item.img" alt="" width="206px">
                <p class="time">{{ item.time }}</p>
                <p class="vtitle">
                  <el-tag size="mini" effect="plain" type="info" v-if="item.isAd" style="height: 15px;padding: 0px;line-height:15px;">广告</el-tag>
                  <span>{{ item.title }}</span>
                </p>
                <p class="username">
                    <el-tag size="mini" effect="plain" type="info" style="height: 15px;padding: 0px;line-height:15px;">UP</el-tag>
                    <span>{{ item.username }}</span>
                </p>
              </li>
            </ul>
          </el-card>
          <div class="rank clearfix">
            <el-card class="box-card clearfix">
              <div slot="header" class="box-header">
                <span>排行榜</span>
                <el-tag size="mini" effect="plain" type="info">更多></el-tag>
              </div>
              <ul>
                <li v-for="(item,i) in documentaryRankData" :key="i">
                  <span><b>{{ i+1 }}</b>{{ item.title }}</span>
                  <span>{{ item.isOver ? '全' : '更新至第'}}{{item.episodes + '集'}}</span>
                </li>
              </ul>
            </el-card>
          </div>
        </div>
    </div>
    <bilifooter></bilifooter>
  </div>
</template>

<script>

import bilihead from '../components/bilihead'
import bilifooter from '../components/bilifooter'
export default {
  name: 'Home',
  components:{bilihead,bilifooter},
  data(){
    return {
        imgList: [
            {
                title: "尼克杨已经求婚成功了，而我",
                img:require( "../assets/image1.jpg")
            },
            {
                title: "王子异街舞教学获康辉盛赞",
                img:require( "../assets/image2.jpg")
            },
            {
                title: "开服就送SSR！快来~",
                img:require( "../assets/image3.jpg")
            },
            {
                title: "2019年的舞区回忆都在这里",
                img:require( "../assets/image4.png")
            },
        ],
        activeList1: [
            {
                title: "凑阿库娅-LUVORATORR...",
                img:require( '../assets/small6.jpg')
            },
            {
                title: "试吃价格相差十倍的蓝纹奶...",
                img:require( '../assets/small3.jpg')
            },
            {
                title: "《Sadistic Love》翻唱【鹿...",
                img:require( '../assets/small1.jpg')
            },
            {
                title: "【明日方舟】真！全员手书...",
                img:require( '../assets/small2.jpg')
            },
            {
                title: "成了：CCTV-6在线吹京紫...",
                img:require( '../assets/small5.jpg')
            },
            {
                title: "【慎重勇者X绝对魔兽战线...",
                img:require( '../assets/small4.jpg')
            },
        ],
        tuiguangData: [
            {
                img:require( '../assets/tuiguang1.jpg'),
                title: '独家爆料：尹正接过最中二的工作竟然是！？',
                username: '大王不高兴官方手游',
                isAd: true,
                time: '15:46'
            },
            {
                img:require( '../assets/tuiguang2.jpg'),
                title: '【独家】《大王不高兴》童年阴影斗战尊者上线！',
                username: '哔哩哔哩国创',
                isAd: false,
                time: '07:31'
            },
            {
                img:require( '../assets/tuiguang3.jpg'),
                title: '在灾厄与毁灭面前，以真正的意志迎战吧！',
                username: '剑与远征',
                isAd: true,
                time: '02:25'
            },
            {
                img:require( '../assets/tuiguang4.jpg'),
                title: '天津之子',
                username: '善良的诚哥',
                isAd: false,
                time: '02:20'
            }
        ],
        documentaryData: [
            {
                img:require( '../assets/documentary1.jpg'),
                title: 'Oasis绿洲乐队纪录片《Supersonic 超音速》中文字幕',
                username: 'insulinum',
                time: '1:57:13',
                bofang: '7.9万',
                dianzan: '2237'
            },
            {
                img:require( '../assets/documentary2.jpg'),
                title: '【纪录片/BBC】蓝色星球 THE BLUE PLANET （2001）',
                username: '哔哩哔哩纪录片',
                time: '6:29:07',
                bofang: '166.8万',
                dianzan: '2593'
            },
            {
                img:require( '../assets/documentary3.jpg'),
                title: '【央视纪录片】二十世纪中国文化名人 100集全',
                username: '鱼香的肉丝',
                time: '16:40:05',
                bofang: '19.5万',
                dianzan: '1802'
            },
            {
                img:require( '../assets/documentary4.jpg'),
                title: '【越野千里】贝尔和奥巴马的阿拉斯加探险之旅 S02E09@柚子木字幕组',
                username: '柚子木字幕组',
                time: '41:32',
                bofang: '107.4万',
                dianzan: '2586'
            },
            {
                img:require( '../assets/documentary5.jpg'),
                title: '【纪录片】埃隆·马斯克：让人类成为跨星球的物种【中英字幕】',
                username: '魔术师Magic',
                time: '1:04:47',
                bofang: '6.3万',
                dianzan: '807'
            },
            {
                img:require( '../assets/documentary6.jpg'),
                title: '神秘的茜茜公主',
                username: 'kopykawai',
                time: '42:36',
                bofang: '9.3万',
                dianzan: '493'
            },
            {
                img:require( '../assets/documentary7.jpg'),
                title: '【冒险雷探长】116集 蒲甘古塔夜行的国王之灵——缅甸',
                username: '冒险雷探长',
                time: '22:11',
                bofang: '3.2万',
                dianzan: '201'
            },
            {
                img:require( '../assets/documentary8.jpg'),
                title: '【纪录片】急诊室故事两季全（共36集）',
                username: '历史启示录',
                time: '22:53:28',
                bofang: '148.4万',
                dianzan: '1.7万'
            },
        ],
        documentaryRankData: [
            {
                title: '派出所的故事2019',
                episodes: '3',
                isOver: false
            },
            {
                title: '可爱的小崽子们',
                episodes: '5',
                isOver: false
            },
            {
                title: '生活如沸',
                episodes: '3',
                isOver: false
            },
            {
                title: '百家讲坛之易中天品...',
                episodes: '52',
                isOver: true
            },
            {
                title: '冒险雷探长',
                episodes: '226',
                isOver: false
            },
            {
                title: '箭厂 时代当下',
                episodes: '56',
                isOver: false
            },
            {
                title: '浪费了的粮食',
                episodes: '1',
                isOver: true
            },
            {
                title: '但是还有书籍',
                episodes: '5',
                isOver: true
            },
            {
                title: '肉的真相',
                episodes: '1',
                isOver: true
            },
            {
                title: '这就是中国',
                episodes: '44',
                isOver: false
            }
        ]
    }
  }
}
</script>
<style scoped>
  .content-box{
    margin-top: 100px;
  }
  span:hover{
    color: #00a1d6;
  }
  .aside{
    text-decoration: none;
    position: fixed;
    z-index: 101;
    left: 0;
    margin-top: -36px;
    width: 14px;
    height: 54px;
    font-size: 12px;
    transition: all .3s;
    padding: 8px 7px;
    line-height: 14px;
  }
  .aside:last-of-type{

    top: calc(50% + 84px);
    color: #505050;
    background: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: 0 6px 10px 0 #e7e7e7;
    border-radius: 0 2px 2px 0;

  }
  .aside:first-of-type{
    top: 50%;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #fb7299;
    color: #fff;
    box-shadow: 0 6px 10px 0 rgba(251,114,153,.4);
  }
  .el-carousel{
    width: 85%;
    height: 240px;
    overflow-y:hidden;
  }
  .el-carousel__item h3 {
    height: 40px;
    color: #fff;
    font-size: 14px;
    position: relative;
    width: 550px;
    top: -52px;
    line-height: 40px;
    padding-left: 20px;
    background-color: rgba(137,137,137,.6);
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img{
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
  .report{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .report ul{
    width: 100%;
    position: relative;
    left: 10px;
    font-size: 14px;
    color: #fff;
  }
  .report ul li{
    height: 116px;
    width: 206px;
    float: left;
    margin: 0 0px 8px 0;
  }
  .report ul li:nth-child(3n+2) {
    padding: 0 5px;
  }
  .report ul li p{
    background-color: rgba(137,137,137,.6);
    position: relative;
    top: -30px;
    padding: 4px 10px;
    width: 186px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .box-card {
    width: 854px;
    border:none;
    float: left;
  }
  .box-card ul{
    margin: -20px;
  }
  .el-card.is-always-shadow{
    box-shadow: none;
  }
  .tuiguang{
    width: 1198px;
    margin: 0 auto;
    position: relative;
  }
  .documentary{
    width: 1198px;
    margin: 0 auto;
    position: relative;
    height: 500px;
  }
  .el-card__header{
    padding: 10px 0;;
    border: none;
    font-size: 20px;
    line-height: 36px;
    color: #212121;
    display: flex;
  }
  .el-card__header img{
    float: left;
    margin-right: 10px;
  }
  .el-card__header i{
    margin-left: 5px;
  }
  .el-card ul li{
    width: 206px;
    padding-right: 5px;
    float: left;
    margin-bottom: 20px;
  }
  .el-card ul li:last-of-type{
    padding-right: 0px;
  }
  .el-card ul li .time{
    position: relative;
    top: -28px;
    font-size: 12px;
    padding-right: 10px;
    color: #fff;
    text-align: right;
    line-height: 25px;
    width: 196px;
    background-color: rgba(137,137,137,.6);
  }
  .vtitle{
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    margin: -20px 0 8px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
    padding-right: 12px;
  }
  .username{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
  }
  .ad{
    float: right;
    width: 320px;
  }
  .ad .el-button{
    width: 100%;
    margin-bottom: 20px;
  }
  .ad img{
    width: 100%;
  }
  .content-box>img{
    display: block;
    margin: 25px auto;
    padding-top: 25px;
  }
  .rank{
    float: right;
    width: 320px;
  }
  .rank .el-card{
    width: 320px;
  }
  .box-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }
  .rank .el-card ul li{
    width: 310px;
    padding: 0px 5px;
    display: flex;
    justify-content: space-between;
  }
  .rank .el-card ul li:first-of-type{
    margin-top: 20px;
  }
  .rank .el-card ul li span:first-of-type{
    font-size: 14px;
    line-height: 20px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .rank .el-card ul li span:last-of-type{
    font-size: 12px;
    color: #999;
    text-align: right;
    width: 290px;
    cursor: pointer;
  }
  .rank .el-card ul li b{
    font-size: 14px;
    color: #999;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    margin-right: 10px;
  }
  .rank .el-card ul li:nth-child(-n+3) b{
    color: #fff;
    background: #00a1d6;
  }
</style>
