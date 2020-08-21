<template>
  <div class="home" :style="{width:`${screenWidth}px`}">
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
            >{{gItem.groupTitle}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="top">
            <div class="topLeft">
              <img src="../assets/caidan.png" alt class="topImg" />
              <span class="tlName">概况</span>
            </div>
            <div class="topRight">
              <img src="../assets/caidan.png" alt class="topImg" />
              <span class="trTime">{{date}}</span>
              <span class="btn" v-for="(item,index) in topRightBtn" :key="index">
                <el-button type="primary">{{item}}</el-button>
              </span>
            </div>
          </div>
        </el-header>
        <!-- 主体 -->
        <el-main class="main" height="700px">
          <!-- 左边 -->
          <div class="mainLeft">
            <div class="mainLeftTop">
              <div class="blank">
                <span class="blankSpan" v-for="(item,index) in blankLi" :key="index">
                  <li class="blankLi1">{{item.num}}</li>
                  <li class="blankLi2">{{item.font}}</li>
                </span>
              </div>
            </div>
            <div class="mainLeftMid">
              <div id="lineChart"></div>
            </div>
            <div class="mainLeftBut">
              <!-- 下左 -->
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div id="pieChart" style="width: 60%;height:100%;"></div>
              <div class="line"></div>
              <!-- 下右 -->
              <div class="verChart" style="width: 35%;">
                <div class="verEle">
                  <div class="ver" v-for="(item,index) in verData" :key="index">
                    <span class="verFont">{{item.font}}</span>
                    <el-progress :percentage="getPercentage(item.data)" :show-text="false" color="#94B3F9"></el-progress>
                    <span class="verNum">{{item.data}}</span>
                  </div>
                </div>
                <div class="verEle">
                  <div class="ver" v-for="(item,index) in verData" :key="index">
                    <span class="verFont">{{item.font}}</span>
                    <el-progress :percentage="getPercentage(item.data)" :show-text="false" color="#E8BE90"></el-progress>
                    <span class="verNum">{{item.data}}</span>
                  </div>
                </div>
                <div class="verEle">
                  <div class="ver" v-for="(item,index) in verData" :key="index">
                    <span class="verFont">{{item.font}}</span>
                    <el-progress :percentage="getPercentage(item.data)" :show-text="false" color="#FCE69F"></el-progress>
                    <span class="verNum">{{item.data}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="mainRight">
            <div class="mainRigTop">
              <div id="rightChart" style="width: 100%;height:100%;"></div>
            </div>
            <div class="mainRigBut">
              <div class="rightTable">
                <div class="rightTable-title">故障影响的资源TOP5</div>
                <div class="rightTable-body">
                  <el-table :data="tableData" height="96%">
                    <el-table-column prop="date" label="日期" min-width="400"></el-table-column>
                    <el-table-column prop="name" label="姓名" min-width="100"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
   
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      list: [
        {
          title: "概况",
          icon: "el-icon-message",
          groupItem: [
            {
              groupTitle: "选项一",
              groupIndex: "1",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
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
            },
            {
              groupTitle: "选项二",
              groupIndex: "2",
            },
            {
              groupTitle: "选项三",
              groupIndex: "3",
            },
          ],
        },
      ],
      topRightBtn: ["近7天", "近15天", "近30天", "自定义"],
      blankLi: [
        {
          num: 1,
          font: "第一列",
        },
        {
          num: 2,
          font: "第二列",
        },
        {
          num: 3,
          font: "第三列",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      verData: [
        {
          font: "aad",
          data: 6,
        },
        {
          font: "aad",
          data: 4,
        },
        {
          font: "aad",
          data: 2,
        },
      ],
      screenWidth: document.body.clientWidth,
      date:""
    };
  },
  mounted() {
    this.chartFn();
    this.lineChartFn();
    this.rightChartFn();
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
    },
  },
  methods: {
    lineChartFn() {
      var lineChart = echarts.init(document.getElementById("lineChart"));
      //实现自适应，写setTimeout延迟是为了适应窗口缩放所产生的读写延迟
      window.addEventListener("resize", function () {
        setTimeout(function () {
          lineChart.resize();
        }, 10);
      });

      let option = {
        title: {
          left: "2.5%",
          top: "4%",
          text: "大数据量面积图",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          //显示竖轴参考线
          splitLine: { show: true },
          //改变x/y轴的颜色
          axisLine: {
            lineStyle: {
              color: "#bcbcbc",
              width: 1,
            },
          },
        },
        yAxis: {
          //改变y轴的值，先要把type改成category然后给data赋值
          type: "value",
          //改变x/y轴的颜色
          axisLine: {
            lineStyle: {
              color: "#bcbcbc",
              width: 1,
            },
          },
        },

        series: [
          {
            data: [10, 12, 5, 4, 8, 9, 6],
            type: "line",
            //实现折点为圆
            showSymbol: true,
            symbol: "circle",
            symbolSize: 20,
            areaStyle: {},
            smooth: true,
            itemStyle: {
              borderWidth: 2,
              normal: {
                //  实现渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    // 1代表上面
                    offset: 0,
                    color: "#97AFF9",
                  },
                  {
                    offset: 1,
                    color: "white",
                  },
                ]),
                opacity: 0.1, // 填充区域透明度
                // 改变折线颜色
                lineStyle: {
                  color: "#97AFF9",
                },
              },
            },
          },
        ],
      };
      lineChart.setOption(option);
    },
    chartFn() {
      // 基于准备好的dom，初始化echarts实例
      var pieChart = echarts.init(document.getElementById("pieChart"));
      window.addEventListener("resize", function () {
        setTimeout(function () {
          pieChart.resize();
        }, 10);
      });
      var data = genData(3);
      let option = {
        title: {
          left: "4%",
          top: "4%",
          text: "大数据量面积图",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        //自定义颜色
        color: ["#94B3F9", "#E8BE90", "#FCE69F"],
        legend: {
          textStyle: {
            fontSize: 14,
          },
          type: "scroll",
          orient: "vertical",
          left: "57%",
          right: "10%",
          top: "35%",
          data: data.legendData,
          selected: data.selected,
          //显示百分比，重写formatter函数
          formatter: function (name) {
            // 获取legend显示内容
            let data = option.series[0].data;
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = ((tarValue / total) * 100).toFixed(2);
            return name + "  " + "中间" + "  " + p + "%";
          },
        },

        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: data.seriesData,
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },

            itemStyle: {
              normal: {
                //使饼状图出现白色缝隙
                borderWidth: 2,
                borderColor: "#ffffff",
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      pieChart.setOption(option);

      function genData(count) {
        var nameList = ["强", "贾", "路", "娄", "危"];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < count; i++) {
          name =
            Math.random() > 0.65
              ? makeWord(4, 1) + "·" + makeWord(3, 0)
              : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000),
          });
          selected[name] = i < 6;
        }
        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected,
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(
              nameList[Math.round(Math.random() * nameList.length - 1)]
            );
          }
          return name.join("");
        }
      }
    },
    rightChartFn() {
      var rightChart = echarts.init(document.getElementById("rightChart"));
      window.addEventListener("resize", function () {
        setTimeout(function () {
          rightChart.resize();
        }, 10);
      });
      let option = {
        title: {
          left: "4%",
          top: "4%",
          text: "大数据量面积图",
        },
        xAxis: {
          type: "category",
          data: ["Thu", "Fri", "Sat", "Sun"],
          axisTick: [
            {
              show: false,
            },
          ],
          //改变x/y轴的颜色
          axisLine: {
            lineStyle: {
              color: "#bcbcbc",
              width: 1,
            },
          },
        },
        yAxis: {
          type: "value",
          //改变x/y轴的颜色
          axisLine: {
            lineStyle: {
              color: "#bcbcbc",
              width: 1,
            },
          },
        },
        series: [
          {
            data: [120, 80, 70, 110, 130],
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              normal: {
                color: "#6E90F8",
                label: {
                  // 柱状图数值
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#6E90F8",
                  },
                },
              },
            },
          },
        ],
      };
      rightChart.setOption(option);
    },
    //先把进度条里面的比例计算出来，再传送到进度条组件进行渲染
    getPercentage(data) {
      return (data / this.dataMax) * 100
    },
    //获取当前时间
    getTime(){
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1 
      let strDate = date.getDate()
      if( month >= 0 && month <= 9){
        month = "0" + month
      }
      if( strDate >= 0 && strDate <= 9){
        strDate = "0" + strDate
      }
      let currentDate = year + "/" + month + "/" + strDate
      console.log(currentDate)
      this.date=currentDate
    },
  },
  computed: {
    //计算进度条里面data的最大值
    dataMax() {
      return Math.max(...(this.verData.map(i => i.data)));
    }
  },
  created(){
    this.getTime()
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin: 2%;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
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
[data-v-fae5bece] .el-main[data-v-fae5bece] {
  height: 700px;
}
// 头部
::v-deep .el-button--primary {
  padding: 8px 12px;
}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin: 0 2% 0 0;
  .topLeft {
    .topImg {
      width: 16px;
      padding-right: 8px;
    }
  }
  .topRight {
    .topImg {
      width: 16px;
      padding-right: 8px;
    }
    .btn {
      padding-left: 8px;
    }
  }
}
//主体
.main {
  background: #efefef;
  display: flex;
  padding-top: 1%;
}
.mainLeft {
  width: 55%;
  display: inline-block;
  .mainLeftTop {
    height: 16%;
    width: 100%;
    padding: 0;
    top: 0;
    background: white;
    .blank {
      height: 100%;
      display: flex;
      justify-content: space-around;
      list-style: none;
      .blankSpan {
        align-self: center;
        .blankLi1 {
          font-weight: 700;
          font-size: 20px;
        }
        .blankLi2 {
          margin-top: 53%;
          color: grey;
          font-size: 14px;
        }
      }
    }
  }
  .mainLeftMid {
    width: 100%;
    height: 30%;
    margin: 2% 2% 0 0;
    background: white;
    #lineChart {
      width: 100%;
      height: 180px;
    }
  }
  .mainLeftBut {
    width: 100%;
    height: 45%;
    margin: 2% 2% 0 0;
    background: white;
    display: flex;
  }
}
.mainRight {
  width: 45%;
  display: inline-block;
  .mainRigTop {
    height: 49%;
    width: 100%;
    padding: 0;
    top: 0;
    margin: 0% 0% 2% 3%;
    background: white;
  }
  .mainRigBut {
    width: 100%;
    height: 45%;
    margin: 2.5% 0% 0 3%;
    background: white;
    // 表格
    .rightTable {
      height: 100%;
      display: flex;
      position: relative;
      .rightTable-title {
        position: absolute;
        padding-top: 3%;
        height: 20px;
        font-size: 18px;
        font-weight: 600;
        padding-left: 4%;
        color: black;
      }
      .rightTable-body {
        width: 92%;
        padding-top: 5%;
        padding-left: 4%;
      }
    }
  }
}

::v-deep .el-main[data-v-fae5bece] {
  line-height: 0;
  height: 550px;
}
.line {
  width: 3px;
  height: 90%;
  background: #efefef;
  margin-top: 20px;
}

::v-deep .el-table th > .cell {
  height: 34px;
  line-height: 34px;
  background: #efefef;
}
.verChart {
  margin-top: 5%;
  .verEle {
    margin-top: 4%;
    .ver {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-left: 5%;
      height: 20px;
      .verFont {
        padding-right: 5%;
        color: grey;
        // line-height: 20px;
      }
      .verNum {
        color: grey;
        padding-left: 5%;
      }
    }
  }
}
::v-deep .el-progress {
  width: 100%;
}
::v-deep .el-progress-bar__inner {
  background-color: #e8be90;
}
</style>