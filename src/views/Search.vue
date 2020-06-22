<template>
    <div class="search">
        <biliNav>
            <img id="logo" width='70px' src="../assets/BILIBILI_LOGO.png" alt="" slot="logo">
        </biliNav>
        <main>
            <div class="searchBar">
                <img src="../assets/search_logo.png" alt="">
                <input id="search-keyword" type="text" maxlength="100" autocomplete="off" v-model="input" :placeholder="input" @keyup.enter="search()">
                <button class="searchBtn" @click="search()"><i class="el-icon-search"></i>搜索</button>
            </div>
            <menu>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">综合</el-menu-item>
                    <el-menu-item index="2">视频<span> 99+</span></el-menu-item>
                    <el-menu-item index="3">番剧<span> 0</span></el-menu-item>
                    <el-menu-item index="4">影视<span> 0</span></el-menu-item>
                    <el-menu-item index="5">直播<span> 0</span></el-menu-item>
                    <el-menu-item index="6">专栏<span> 0</span></el-menu-item>
                    <el-menu-item index="7">话题<span> 0</span></el-menu-item>
                    <el-menu-item index="8">用户<span> 0</span></el-menu-item>
                    <el-menu-item index="9">相簿<span> 0</span></el-menu-item>
                </el-menu>
                <div :class="sortClass">
                    <div :class="'tag-group' + i" v-for="(items,i) in lists" :key="i">
                        <span 
                            v-for="(item,j) in items" 
                            :key="j" 
                            :class="j == activeitems[i] ? 'active': ''" 
                            @click="changeTag(i,j);i==0 && j == 5&&down();i==2 && j == items.length-1&&up()">
                            {{item}}
                            <i class="el-icon-arrow-down" v-show="i==0 && j == 5"></i>
                            <i class="el-icon-arrow-up" v-if="i==2 && j == items.length-1"></i>
                        </span>
                    </div>
                    <div class="listClass">
                        <i :class="['el-icon-s-grid', listStyle=='grid' ? 'active' :'']" @click="changeListStyle('grid')"></i>
                        <i :class="['el-icon-notebook-2', listStyle=='list' ? 'active' :'']" @click="changeListStyle('list')" ></i>
                    </div>
                </div>
                <ul :class="listStyle" v-loading="loading">
                    <li @click="videoPlayer(item)" v-for="(item,key) in videoList" :key="key">
                        <img :src="'http://qbnqzf5cb.bkt.clouddn.com/image/'+ item.cover +'.jpg'" alt="">
                        <span class="time">01:55</span>
                        <div class="details">
                            <h5 class="title"><span class="label">{{item.classify.split(">")[1]}}</span>{{item.title}}</h5>
                            <p>{{item.des}}</p>
                            <div class="tags">
                                <span class="viewCounts"><i class="el-icon-video-camera"></i>123</span>
                                <span class="comments"><i class="el-icon-chat-line-square"></i>123</span>
                                <span class="date"><i class="el-icon-time"></i>{{item.uploadtime | formateDate}}</span>
                                <span class="upName"><i class="el-icon-user"></i>123</span>
                            </div>
                        </div>
                    </li>                                                
                </ul>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    @prev-click='prevPage'
                    @next-click='nextPage'
                    :total="videoListNum"
                    :page-size="listStyle=='grid' ? 15 : 5"
                    :current-page="currentPage">
                </el-pagination>
            </menu>
        </main>
        <bilifooter></bilifooter>
    </div>
</template>

<script>
    import biliNav from '../components/bilinav';
    import bilifooter from '../components/bilifooter';
    export default {
        name:'search',
        components:{biliNav,bilifooter},
        data() {
            return {
                activeIndex: '1',
                activeitems: [0,0,0],
                sortClass: 'sort',
                listStyle:'grid',
                loading:true,
                input: this.$store.state.keyword,
                videoList: this.$store.state.videoList,
                videoListNum: this.$store.state.videoList.length,
                currentPage: 1,
                pageSize: 15,
                lists: [['综合排序','点击最多','最新发布','最多弹幕','最多收藏'],['全部时长','10分钟以下','10~30分钟','30-60分钟','60分钟以上'],['全部分区','动画','番剧','国创','音乐','舞蹈','游戏','知识','数码','生活','鬼畜','时尚','资讯','娱乐','影视','纪录片','电影','电视剧','收起']],
            }
        },
        filters: {
            formateDate: function (datetime) {
                function addDateZero(num) {
                        return (num < 10 ? "0" + num : num);
                    }
                let d = new Date(datetime);
                let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate());
                return formatdatetime;
            }
        },
        mounted(){
            
            this.search();
        },
        methods:{
            search(){
                this.loading = true;
                var keyword = this.input;
                this.$store.commit('keyword',this.input);
                var currentPage = this.currentPage - 1;
                this.$axios.get('/video/search',{params:{keyword:keyword,currentPage:currentPage,pageSize:this.pageSize}}).then(res => {
                    this.$store.commit('getvideoList', res.videoList);
                    this.videoList = res.videoList;
                    this.videoListNum = res.totalPages;
                    this.$router.push('/search',{params:{
                        query: keyword
                    }})
                    this.loading = false;
                });
                
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            changeTag(i,j){
                this.$set(this.activeitems, i, j)
            },
            up(){
                this.sortClass = 'sort up';
                this.$set(this.activeitems, 0, 0);
                this.$set(this.lists[0], this.lists[0].length, '更多筛选');
            },
            down(){
                this.sortClass = 'sort down';
                this.$set(this.activeitems, 2, 0);
                this.$set(this.activeitems, 0, 0);
                this.lists[0].length = this.lists[0].length-1;
            },
            changeListStyle(str){
                this.listStyle = str;
                this.pageSize = this.listStyle == 'grid' ? 15 : 5;
                this.currentPage = Math.min(Math.ceil(this.videoListNum/this.pageSize),this.currentPage);
                this.search()
            },
            videoPlayer(item){
                this.$store.commit('getVideoItem',item);
                this.$router.push({path: '/video', query:{videoList: item}});
            },
            handleCurrentChange(val){
                this.currentPage = val;
                this.search();
            },
            prevPage(){
                this.currentPage--;
                this.search();
            },
            nextPage(){
                this.currentPage++;
                this.search();
            }
        }
    }
</script>

<style lang="less">
    .search{
        width: 100%;
        min-width: 980px;
        margin: 0 auto;
        .bilinav {
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
            .el-input{
                display: none;
            }
        }
        main{
            width: 980px;
            margin: 0 auto;
            text-align: center;
            .searchBar{
                margin-top: 40px;
                img{
                    width: 131px;
                    height: 35px;
                    vertical-align: top;
                }
                input{
                    height: 18px;
                    box-shadow: none;
                    padding: 11px 15px;
                    background: transparent;
                    width: 296px;
                    border: 2px solid #ccd0d7;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #222;
                    margin: 0 10px;
                }
                .searchBtn{
                    cursor: pointer;
                    border: none;
                    color: #fff;
                    background: #00a1d6;
                    font-size: 16px;
                    letter-spacing: 2px;
                    line-height: 42px;
                    text-align: center;
                    width: 90px;
                    border-radius: 4px;
                }
            }
            menu{
                .el-menu--horizontal{
                    >.el-menu-item{
                        width: 104px;
                        font-size: 16px;
                        margin-top: 15px;
                        box-sizing: border-box;
                        height: 56px;
                        line-height: 56px;
                        color: #000;
                        span{
                            font-size: 14px;
                        }
                    }
                    >.el-menu-item.is-active{
                        color: #00A1D6;
                        border-bottom: 2px solid #00A1D6;
                    }
                }
                .sort{
                    position: relative;
                    text-align: left;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #e6e6e6;
                    &.up{
                        div:nth-of-type(2),div:nth-of-type(3){
                            display: none;
                        }
                        border-bottom: none;
                    }
                    &.down{
                        div:nth-of-type(2),div:nth-of-type(3){
                            display: block;
                        }
                    }
                    div{
                        margin: 10px 0 10px 0;
                        &:first-of-type span:last-of-type,
                        &:last-of-type span:last-of-type{
                            &:hover{
                                color: #00a1d6;
                            }
                        }
                    }
                    span{
                        padding: 2px 6px;
                        margin-right: 5px;
                        color: #000;
                        font-size: 12px;
                        border-radius: 10px;
                        cursor: pointer;
                        &:hover{
                            color: #00A1D6;
                        }
                        &.active{
                            color: #fff;
                            background: #00A1D6;
                        }
                    }
                    .listClass{
                        position: absolute;
                        top: -16px;
                        right: 40px;
                        font-size: 20px;
                        i:hover{
                            color: #00a1d6;
                            cursor: pointer;
                        }
                        i.active{
                            color: #00a1d6;
                        }
                    }
                }
                .time{
                    background-color: rgba(0, 0, 0, 0.5);
                    position: absolute;
                    color: #fff;
                    padding: 2px 5px;
                    font-size: 12px;
                    border-radius: 2px;
                }
                .grid{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin: 20px 20px 0 0;
                        width: 170px;
                        height: 210px;
                        border: 1px solid #e5e9ef;
                        border-radius: 5px;
                        position: relative;
                        &:nth-of-type(5n){
                            margin-right: 0px;
                        }
                        img{
                            width: 170px;
                            height: 100px;
                            border-radius: 5px;
                        }
                        .details{
                            h5>span , p, .tags>.comments{
                                display: none;
                            }
                            h5{
                                text-align: left;
                                margin: 0;
                                padding: 8px 10px 0;
                                font-size: 12px;
                                line-height: 20px;
                                color: #222;
                                cursor: pointer;
                                max-height: 40px;
                                overflow: hidden;
                            }
                        }
                        .tags{
                            position: absolute;
                            top: 154px;
                            display: flex;
                            justify-content: space-between;
                            padding: 8px 10px;
                            color: #99a2aa;
                            font-size: 12px;
                            margin: 0 8px 20px 0;
                            flex-wrap: wrap;
                            span{
                                margin-bottom: 12px;
                            }
                        }
                        .time{
                            left: 128px;
                            top: 80px;
                        }
                    }
                }
                .list{
                    li{
                        width: 940px;
                        display: flex;
                        padding: 20px 0 0;
                        position: relative;
                        border-bottom: 1px solid #e6e6e6;
                        img{
                            float: left;
                            width: 160px;
                            height: 100px;
                        }
                        .time{
                            top: 100px;
                            left: 119px;
                        }
                        .details{
                            text-align: left;
                            position: relative;
                            height: 120px;
                            margin-left: 25px;
                            h5{
                                line-height: 26px;
                                margin: 5px 0 5px 0;
                                color: #222;
                                max-width: 592px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                cursor: pointer;
                                &:hover{
                                    color: #00A1D6;
                                }
                                span{
                                    padding: 3px 6px;
                                    border: 1px solid #e5e9ef;
                                    border-radius: 15px; margin-right: 10px;
                                    font-size: 12px;
                                    color: #6d757a;
                                }
                                font-size: 16px;
                                font-weight: normal;

                            }
                            p{
                                width: 742px;
                                font-size: 12px;
                                color: #999;
                                padding-top: 10px;
                                max-height: 34px;
                                overflow: hidden;
                            }
                            .tags{
                                position: absolute;
                                bottom: 15px;
                                color: #99a2aa;
                                font-size: 12px;
                                span{
                                    i{
                                        margin-right: 5px;
                                    }
                                    margin-right: 25px;
                                }
                            }

                        }
                    }
                }
                .el-pagination.is-background .el-pager li:not(.disabled).active{
                    background: #00a1d6;
                }
                .el-pagination{
                    margin-top: 20px;
                }
            }
        }
    }
</style>