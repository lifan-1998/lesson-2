<template>
  <div id="app">
       <el-container>
      <!-- 左边列表 -->
      <el-aside width="200px">
        <el-menu>
          <el-submenu
            :default-openeds="['1', '3']"
            v-for="(item,i) in list"
            :key="i"
            :index="`${i+1}`+`' '`"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              {{item.title}}
            </template>
            
            <el-menu-item
              v-for="(gItem,gIndex) in item.groupItem"
              :key="gIndex"
              :index="gItem.groupIndex" 
              @click="gtitleClick(gItem.groupTitle)"      
            ><router-link :to="gItem.router">{{gItem.groupTitle}}</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="top">
            <div class="top-left">
              <img src="./assets/caidan.png" alt class="top-img" />
              <span class="tl-name">{{gTitle}}</span>
            </div>
            <div class="top-right">
              <img src="./assets/caidan.png" alt class="top-img" />
              <span class="tr-time">{{date}}</span>
              <span class="btn" v-for="(item,index) in toprightBtn" :key="index">
                <el-button type="primary">{{item}}</el-button>
              </span>
            </div>
          </div>
        </el-header>
        <!-- 主体 -->
        <el-main class="main">
            <router-view/>    
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
       list: [
        {
          title: "概况",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/"
            },
          ],
        },
        {
          title: "监控视频",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/about"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test2"
            },
          ],
        },
        {
          title: "运营分析",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
          ],
        },
        {
          title: "监控管理",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test"
            },
          ],
        },
        {
          title: "告警管理",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test"
            },
          ],
        },
        {
          title: "配置管理",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test"
            },
          ],
        },
        {
          title: "健康度评估",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test"
            },
          ],
        },
        {
          title: "监控大屏",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
              router:"/test"
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
              router:"/test"
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
              router:"/test"
            },
          ],
        },
      ],
       toprightBtn: ["近7天", "近15天", "近30天", "自定义"],
       gTitle:"选项一"
    }
  },
  methods:{
        //获取当前时间
    getTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 0 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let currentDate = year + "/" + month + "/" + strDate;
      // console.log(currentDate);
      this.date = currentDate;
    },
    gtitleClick(e){
      // console.log(e)
      this.gTitle=e
      
    }
  },
    created() {
    this.getTime();
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
  margin: 0;

}
 .el-main{
  height: calc(100% - 60px);
  overflow-y: hidden;
   color: #333;
  text-align: center;
  line-height: 160px;
  padding: 10px!important;
   line-height: 0;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom:1px solid #e0e0e0;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
::v-deep .el-menu {
  text-align: left;
}
.el-container {
  height: 100%;
}
.main {
  background: #f5f7fa;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
}
.el-submenu__title{
  text-align: left;
}
// 头部
::v-deep .el-button--primary {
  padding: 8px 12px;
}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  .top-left {
    .top-img {
      width: 16px;
      padding-right: 8px;
    }
  }
  .top-right {
    .top-img {
      width: 16px;
      padding-right: 8px;
    }
    .btn {
      padding-left: 8px;
    }
  }
}
.router-link-active{
  text-decoration: none;
}
a{
  text-decoration: none;
}
.el-menu-item *{
  color: black;
}
</style>
