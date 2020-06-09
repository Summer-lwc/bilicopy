<template>
    <div class="rank">
        <bilihead></bilihead>
        <div class="main">
            <ul class="rank-menu">
                <li v-for="(item,i) in mainNav" :key="i" @click="changeTab(i+1)" :class="[currentTab == 'rank'+ (i+1) ? 'active' :'']">
                    <span :class="['rank-icon', 'rank' + (i+1)]"></span>{{ item }}
                </li>
            </ul>
            <div class="rank-nav">
                <ul>
                    <li v-for="(item,i) in nav" :key="i">{{ item }}</li>
                </ul>
                <div>
                    <el-tag size="mini" effect="plain" type="info">全部投稿<i class="el-icon-arrow-down"></i></el-tag>
                    <el-tag size="mini" effect="plain" type="info">三日排行<i class="el-icon-arrow-down"></i></el-tag>
                </div>
            </div>
            <el-alert
                title="统计所有投稿在 2020年01月05日 - 2020年01月08日 的数据综合得分，每日更新一次"
                type="info"
                show-icon>
            </el-alert>
            <ul class="content">
                <li v-for="(item,i) in rankData[currentTab]" :key="i">
                    <div class="info">
                        <span>{{ i }}</span>
                        <img :src="require('../assets/' + item.img + '.jpg')" alt="">
                        <div>
                            <h5>{{ item.title }}</h5>
                            <p>
                                <span><i class="el-icon-video-camera"></i>{{ item.bofang }}</span>
                                <span><i class="el-icon-chat-line-square"></i>{{ item.pinglun }}</span>
                                <span><i class="el-icon-user-solid"></i>{{ item.username }}</span>
                            </p>
                        </div>
                    </div>
                    <div  class="score">
                        <p>{{ item.score }}</p>综合得分
                    </div>
                </li>
            </ul>
        </div>
        <bilifooter></bilifooter>
    </div>
</template>

<script>
    import bilihead from '../components/bilihead'
    import bilifooter from '../components/bilifooter'
    export default {
        name:'rank',
        components:{bilihead,bilifooter},
        data(){
            return {
                activeName: 'rank1',
                mainNav: [
                    '全站榜',
                    '原创榜',
                    '新番榜',
                    '影视榜',
                    '新人榜'
                ],
                nav: [
                    '全站',
                    '动画',
                    '国创相关',
                    '音乐',
                    '舞蹈',
                    '游戏',
                    '科技',
                    '数码',
                    '生活',
                    '鬼畜',
                    '时尚',
                    '娱乐',
                    '影视'
                ],
                currentTab: 'rank' + 1,
                rankData: {
                    "rank1": [
                        {
                            "img" : "rank1",
                            "title" : "【半佛】你知道奶茶加盟到底有多坑人吗？",
                            "bofang" : "115.5万",
                            "pinglun" : "4275",
                            "username" : "硬核的半佛仙人",
                            "score" : 2744019
                        },
                        {
                            "img" : "rank2",
                            "title" : "【现代版！庆余年】反穿越：回到现代（商战AU）",
                            "bofang" : "103.3万",
                            "pinglun" : "5701",
                            "username" : "逆转的桥",
                            "score" : 2496707
                        },
                        {
                            "img" : "rank3",
                            "title" : "耗时110小时！终于攻破云顶之弈【攻击机制】之攻击距离到底是多少？云顶站位代码第一章-攻击顺序及攻击距离",
                            "bofang" : "90.8万",
                            "pinglun" : "4945",
                            "username" : "我是TOO",
                            "score" : 2401518
                        },
                        {
                            "img" : "rank4",
                            "title" : "2019年度沙雕新闻盘点丨人类迷惑行为大赏",
                            "bofang" : "160.5万",
                            "pinglun" : "2.6万",
                            "username" : "三代鹿人",
                            "score" : 1811444
                        },
                        {
                            "img" : "rank5",
                            "title" : "【全明星】火红的萨日朗",
                            "bofang" : "121.1万",
                            "pinglun" : "8003",
                            "username" : "潮汕好男人",
                            "score" : 1781451
                        },
                        {
                            "img" : "rank6",
                            "title" : "大家好，我是理查德•克莱德曼，今天我入驻B站啦！",
                            "bofang" : "153.1万",
                            "pinglun" : "1.4万",
                            "username" : "钢琴家理查德克莱德曼",
                            "score" : 1702340
                        },
                        {
                            "img" : "rank7",
                            "title" : "湖南妹子在家自制手工米粉，一碗粉半斤肉，一口气嗦完，爽！",
                            "bofang" : "88.6万",
                            "pinglun" : "9015",
                            "username" : "绵羊料理",
                            "score" : 1681793
                        },
                        {
                            "img" : "rank8",
                            "title" : "年度致郁短片：《你，真的不行》",
                            "bofang" : "95.8万",
                            "pinglun" : "2317",
                            "username" : "是老胡没错",
                            "score" : 1557838
                        },
                        {
                            "img" : "rank9",
                            "title" : "绝了！未修音的现场太震撼了！阿云嘎费玉清我们的歌现场诠释不同风格的卷珠帘+凤凰于飞",
                            "bofang" : "76.0万",
                            "pinglun" : "1.2万",
                            "username" : "枼不修",
                            "score" : 1245749
                        },
                        {
                            "img" : "rank10",
                            "title" : "水母：这是人干的事？？？",
                            "bofang" : "121.1万",
                            "pinglun" : "558",
                            "username" : "骨头゛",
                            "score" : 1197888
                        }
                    ],
                    "rank2": [
                        {
                            "img" : "rank2",
                            "title" : "【现代版！庆余年】反穿越：回到现代（商战AU）",
                            "bofang" : "103.3万",
                            "pinglun" : "5701",
                            "username" : "逆转的桥",
                            "score" : 2496707
                        },
                        {
                            "img" : "rank5",
                            "title" : "【全明星】火红的萨日朗",
                            "bofang" : "121.1万",
                            "pinglun" : "8003",
                            "username" : "潮汕好男人",
                            "score" : 1781451
                        },
                        {
                            "img" : "rank1",
                            "title" : "【半佛】你知道奶茶加盟到底有多坑人吗？",
                            "bofang" : "115.5万",
                            "pinglun" : "4275",
                            "username" : "硬核的半佛仙人",
                            "score" : 2744019
                        },
                        {
                            "img" : "rank4",
                            "title" : "2019年度沙雕新闻盘点丨人类迷惑行为大赏",
                            "bofang" : "160.5万",
                            "pinglun" : "2.6万",
                            "username" : "三代鹿人",
                            "score" : 1811444
                        },
                        {
                            "img" : "rank3",
                            "title" : "耗时110小时！终于攻破云顶之弈【攻击机制】之攻击距离到底是多少？云顶站位代码第一章-攻击顺序及攻击距离",
                            "bofang" : "90.8万",
                            "pinglun" : "4945",
                            "username" : "我是TOO",
                            "score" : 2401518
                        },
                        {
                            "img" : "rank6",
                            "title" : "大家好，我是理查德•克莱德曼，今天我入驻B站啦！",
                            "bofang" : "153.1万",
                            "pinglun" : "1.4万",
                            "username" : "钢琴家理查德克莱德曼",
                            "score" : 1702340
                        },
                        {
                            "img" : "rank7",
                            "title" : "湖南妹子在家自制手工米粉，一碗粉半斤肉，一口气嗦完，爽！",
                            "bofang" : "88.6万",
                            "pinglun" : "9015",
                            "username" : "绵羊料理",
                            "score" : 1681793
                        },
                        {
                            "img" : "rank8",
                            "title" : "年度致郁短片：《你，真的不行》",
                            "bofang" : "95.8万",
                            "pinglun" : "2317",
                            "username" : "是老胡没错",
                            "score" : 1557838
                        },
                        {
                            "img" : "rank9",
                            "title" : "绝了！未修音的现场太震撼了！阿云嘎费玉清我们的歌现场诠释不同风格的卷珠帘+凤凰于飞",
                            "bofang" : "76.0万",
                            "pinglun" : "1.2万",
                            "username" : "枼不修",
                            "score" : 1245749
                        },
                        {
                            "img" : "rank10",
                            "title" : "水母：这是人干的事？？？",
                            "bofang" : "121.1万",
                            "pinglun" : "558",
                            "username" : "骨头゛",
                            "score" : 1197888
                        }
                    ],
                    "rank3": [
                        {
                            "img" : "rank6",
                            "title" : "大家好，我是理查德•克莱德曼，今天我入驻B站啦！",
                            "bofang" : "153.1万",
                            "pinglun" : "1.4万",
                            "username" : "钢琴家理查德克莱德曼",
                            "score" : 1702340
                        },
                        {
                            "img" : "rank8",
                            "title" : "年度致郁短片：《你，真的不行》",
                            "bofang" : "95.8万",
                            "pinglun" : "2317",
                            "username" : "是老胡没错",
                            "score" : 1557838
                        },
                        {
                            "img" : "rank1",
                            "title" : "【半佛】你知道奶茶加盟到底有多坑人吗？",
                            "bofang" : "115.5万",
                            "pinglun" : "4275",
                            "username" : "硬核的半佛仙人",
                            "score" : 2744019
                        },
                        {
                            "img" : "rank5",
                            "title" : "【全明星】火红的萨日朗",
                            "bofang" : "121.1万",
                            "pinglun" : "8003",
                            "username" : "潮汕好男人",
                            "score" : 1781451
                        },
                        {
                            "img" : "rank2",
                            "title" : "【现代版！庆余年】反穿越：回到现代（商战AU）",
                            "bofang" : "103.3万",
                            "pinglun" : "5701",
                            "username" : "逆转的桥",
                            "score" : 2496707
                        },
                        {
                            "img" : "rank3",
                            "title" : "耗时110小时！终于攻破云顶之弈【攻击机制】之攻击距离到底是多少？云顶站位代码第一章-攻击顺序及攻击距离",
                            "bofang" : "90.8万",
                            "pinglun" : "4945",
                            "username" : "我是TOO",
                            "score" : 2401518
                        },
                        {
                            "img" : "rank4",
                            "title" : "2019年度沙雕新闻盘点丨人类迷惑行为大赏",
                            "bofang" : "160.5万",
                            "pinglun" : "2.6万",
                            "username" : "三代鹿人",
                            "score" : 1811444
                        },
                        {
                            "img" : "rank7",
                            "title" : "湖南妹子在家自制手工米粉，一碗粉半斤肉，一口气嗦完，爽！",
                            "bofang" : "88.6万",
                            "pinglun" : "9015",
                            "username" : "绵羊料理",
                            "score" : 1681793
                        },
                        {
                            "img" : "rank9",
                            "title" : "绝了！未修音的现场太震撼了！阿云嘎费玉清我们的歌现场诠释不同风格的卷珠帘+凤凰于飞",
                            "bofang" : "76.0万",
                            "pinglun" : "1.2万",
                            "username" : "枼不修",
                            "score" : 1245749
                        },
                        {
                            "img" : "rank10",
                            "title" : "水母：这是人干的事？？？",
                            "bofang" : "121.1万",
                            "pinglun" : "558",
                            "username" : "骨头゛",
                            "score" : 1197888
                        }
                    ],
                    "rank4": [
                        {
                            "img" : "rank9",
                            "title" : "绝了！未修音的现场太震撼了！阿云嘎费玉清我们的歌现场诠释不同风格的卷珠帘+凤凰于飞",
                            "bofang" : "76.0万",
                            "pinglun" : "1.2万",
                            "username" : "枼不修",
                            "score" : 1245749
                        },
                        {
                            "img" : "rank7",
                            "title" : "湖南妹子在家自制手工米粉，一碗粉半斤肉，一口气嗦完，爽！",
                            "bofang" : "88.6万",
                            "pinglun" : "9015",
                            "username" : "绵羊料理",
                            "score" : 1681793
                        },
                        {
                            "img" : "rank10",
                            "title" : "水母：这是人干的事？？？",
                            "bofang" : "121.1万",
                            "pinglun" : "558",
                            "username" : "骨头゛",
                            "score" : 1197888
                        },
                        {
                            "img" : "rank1",
                            "title" : "【半佛】你知道奶茶加盟到底有多坑人吗？",
                            "bofang" : "115.5万",
                            "pinglun" : "4275",
                            "username" : "硬核的半佛仙人",
                            "score" : 2744019
                        },
                        {
                            "img" : "rank2",
                            "title" : "【现代版！庆余年】反穿越：回到现代（商战AU）",
                            "bofang" : "103.3万",
                            "pinglun" : "5701",
                            "username" : "逆转的桥",
                            "score" : 2496707
                        },
                        {
                            "img" : "rank3",
                            "title" : "耗时110小时！终于攻破云顶之弈【攻击机制】之攻击距离到底是多少？云顶站位代码第一章-攻击顺序及攻击距离",
                            "bofang" : "90.8万",
                            "pinglun" : "4945",
                            "username" : "我是TOO",
                            "score" : 2401518
                        },
                        {
                            "img" : "rank4",
                            "title" : "2019年度沙雕新闻盘点丨人类迷惑行为大赏",
                            "bofang" : "160.5万",
                            "pinglun" : "2.6万",
                            "username" : "三代鹿人",
                            "score" : 1811444
                        },
                        {
                            "img" : "rank5",
                            "title" : "【全明星】火红的萨日朗",
                            "bofang" : "121.1万",
                            "pinglun" : "8003",
                            "username" : "潮汕好男人",
                            "score" : 1781451
                        },
                        {
                            "img" : "rank6",
                            "title" : "大家好，我是理查德•克莱德曼，今天我入驻B站啦！",
                            "bofang" : "153.1万",
                            "pinglun" : "1.4万",
                            "username" : "钢琴家理查德克莱德曼",
                            "score" : 1702340
                        },
                        {
                            "img" : "rank8",
                            "title" : "年度致郁短片：《你，真的不行》",
                            "bofang" : "95.8万",
                            "pinglun" : "2317",
                            "username" : "是老胡没错",
                            "score" : 1557838
                        }
                    ],
                    "rank5": [
                        {
                            "img" : "rank6",
                            "title" : "大家好，我是理查德•克莱德曼，今天我入驻B站啦！",
                            "bofang" : "153.1万",
                            "pinglun" : "1.4万",
                            "username" : "钢琴家理查德克莱德曼",
                            "score" : 1702340
                        },
                        {
                            "img" : "rank4",
                            "title" : "2019年度沙雕新闻盘点丨人类迷惑行为大赏",
                            "bofang" : "160.5万",
                            "pinglun" : "2.6万",
                            "username" : "三代鹿人",
                            "score" : 1811444
                        },
                        {
                            "img" : "rank5",
                            "title" : "【全明星】火红的萨日朗",
                            "bofang" : "121.1万",
                            "pinglun" : "8003",
                            "username" : "潮汕好男人",
                            "score" : 1781451
                        },
                        {
                            "img" : "rank1",
                            "title" : "【半佛】你知道奶茶加盟到底有多坑人吗？",
                            "bofang" : "115.5万",
                            "pinglun" : "4275",
                            "username" : "硬核的半佛仙人",
                            "score" : 2744019
                        },
                        {
                            "img" : "rank7",
                            "title" : "湖南妹子在家自制手工米粉，一碗粉半斤肉，一口气嗦完，爽！",
                            "bofang" : "88.6万",
                            "pinglun" : "9015",
                            "username" : "绵羊料理",
                            "score" : 1681793
                        },
                        {
                            "img" : "rank2",
                            "title" : "【现代版！庆余年】反穿越：回到现代（商战AU）",
                            "bofang" : "103.3万",
                            "pinglun" : "5701",
                            "username" : "逆转的桥",
                            "score" : 2496707
                        },
                        {
                            "img" : "rank3",
                            "title" : "耗时110小时！终于攻破云顶之弈【攻击机制】之攻击距离到底是多少？云顶站位代码第一章-攻击顺序及攻击距离",
                            "bofang" : "90.8万",
                            "pinglun" : "4945",
                            "username" : "我是TOO",
                            "score" : 2401518
                        },
                        {
                            "img" : "rank8",
                            "title" : "年度致郁短片：《你，真的不行》",
                            "bofang" : "95.8万",
                            "pinglun" : "2317",
                            "username" : "是老胡没错",
                            "score" : 1557838
                        },
                        {
                            "img" : "rank9",
                            "title" : "绝了！未修音的现场太震撼了！阿云嘎费玉清我们的歌现场诠释不同风格的卷珠帘+凤凰于飞",
                            "bofang" : "76.0万",
                            "pinglun" : "1.2万",
                            "username" : "枼不修",
                            "score" : 1245749
                        },
                        {
                            "img" : "rank10",
                            "title" : "水母：这是人干的事？？？",
                            "bofang" : "121.1万",
                            "pinglun" : "558",
                            "username" : "骨头゛",
                            "score" : 1197888
                        }
                    ]
                }
            }
        },
        methods: {
            //标签页切换代码
            changeTab(tab) {
                this.currentTab = 'rank' + tab;
            }
        }
    }
</script>

<style scoped>
    .main{
        width: 1200px;
        margin: 100px auto 0;
    }
    .rank-menu li.active {
        color: #00a1d6;
        height: 38px;
        border-bottom: 2px solid #00a1d6;
    }
    .el-tabs__nav:not(.el-tabs__active-bar){
        width: 116px;
        padding: 0 12px;
    }
    .rank-menu{
        display: flex;
        justify-content: space-around;
        padding: 0 80px;
        position: relative;
    }
    .rank-menu li{
        width: 115px;
        font-size: 18px;
        line-height: 25px;
        padding: 0 12px;
        cursor: pointer;
        text-align: center;
    }
    .rank-nav{
        display: flex;
        justify-content: space-between;
        background-color: #edf2f9;
        border-radius: 4px;
        height: 40px;
        line-height: 40px;
        padding-right: 10px;
        margin-bottom: 10px;
    }
    .rank-nav ul{
        display: flex;
    }
    .rank-nav ul li{
        margin-right: 10px;
        line-height: 40px;
        padding: 0 10px;
    }
    .content li{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        transition: .2s;
        border-bottom: 1px solid #e5e9ef;
        cursor: pointer;
    }
    .content .info{
        display: flex;
        position: relative;
    }
    .info>span{
        width: 70px;
        height: 70px;
        line-height: 88px;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        color: #b8c0cc;
        font-family: simhei;
    }
    .info img{
        border-radius: 4px;
        margin-right: 20px;
    }
    .info h5{
        height: 20px;
        line-height: 20px;
        font-weight: 700;
        font-size: 16px;
        color: #222;
        transition: .3s;
        display: inline-block;
    }
    .info div p{
        margin-top: 20px;
        color: #99a2aa;
    }
    .info div p span{
        padding-right: 10px;
    }
    .score p{
        color: #00a1d6;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 12px;
    }
    .score{
        height: 20px;
        color: #b8c0cc;
        line-height: 20px;
        text-align: center;
        font-size: 12px;

    }
    .rank-icon{
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px;
        background: url(../assets/icons.png) no-repeat;
    }
    .rank1{
        background-position: -83px -979px;
    }
    .rank2{
        background-position: -83px -1041px;
    }
    .rank3{
        background-position: -83px -1107px;
    }
    .rank4{
        background-position: -146px -1555px;
    }
    .rank5{
        background-position: -83px -1170px;
    }
</style>