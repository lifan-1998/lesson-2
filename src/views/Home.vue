<template>
  <div class="home">
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
        <el-header style="border-bottom:1px solid #e0e0e0">
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
        <el-main class="main">
          <!-- 左边 -->
          <div class="mainLeft">
            <div class="mainLeftTopMid">
              <div class="mainLeftTop">
                <div class="blank">
                  <span class="blankSpan" v-for="(item,index) in blankLi" :key="index">
                    <li class="blankLi1" v-show="index==1">{{item.num}}</li>
                    <li class="blankLi1" v-show="index==0" style="color:red">{{item.num}}</li>
                    <li class="blankLi1" v-show="index==2">
                      {{item.num}}
                      <span class="blankLichild">分钟</span>
                    </li>
                    <li class="blankLi2">{{item.font}}</li>
                  </span>
                </div>
              </div>
              <div class="mainLeftMid">
                <div class="linechartTitle">故障趋势图</div>
                <div id="lineChart"></div>
              </div>
            </div>
            <div class="mainLeftBut">
              <!-- 下左 -->
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div class="piechartTitle">各资源类型故障占比</div>
              <div id="pieChart" style="width: 60%;height:100%;"></div>
              <div class="line"></div>
              <!-- 下右 -->
              <div class="verChart" style="width: 35%;">
                <ver-chart :verData="verData"></ver-chart>
              </div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="mainRight">
            <div class="mainRigTop">
              <div class="rigchartTitle">按故障等级计算故障数量</div>
              <div id="rightChart" style="width: 100%;height:100%;"></div>
            </div>
            <div class="mainRigBut">
              <div class="rightTable">
                <div class="rightTable-title">故障影响的资源TOP5</div>
                <div class="rightTable-body">
                  <el-table :data="tableData" height="96%">
                    <el-table-column type="index" width="50" class="tableIndex"></el-table-column>
                    <el-table-column
                      prop="address"
                      label="日期"
                      min-width="400"
                      show-overflow-tooltip="true"
                    ></el-table-column>
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
import VerChart from "../components/verChart.vue";
export default {
  components: {
    VerChart,
  },
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
          num: "3",
          font: "未处理完成故障数",
        },
        {
          num: "3",
          font: "故障总数",
        },
        {
          num: "32",
          font: "故障平均处理时长",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "1",
          address:
            "【上海市】普陀区金沙江路 1518 弄【上海市】普陀区金沙江路 1518 弄【上海市】普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "11",
          address: "【上海市】普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "11",
          address: "【上海市】普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "11",
          address:
            "【上海市】普陀区金沙江路 1518 弄【上海市】普陀区金沙江路 1518 弄【上海市】普陀区金沙江路 1518 弄【上海市】普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "11",
          address: "【上海市】普陀区金沙江路 1518 弄",
        },
      ],
      verData: [
        {
          title: "IaaS",
          font: ["主机", "防火墙", "交换机"],
          data: [6, 4, 2],
          color: "#94B3F9",
          show: true,
          isRotate: false
        },
        {
          title: "PaaS",
          font: ["Mysql", "DBProxy", "Geteway"],
          data: [6, 4, 2],
          color: "#E8BE90",
          show: true,
          isRotate: false
        },
        {
          title: "SaaS",
          font: ["应用", "场景", "服务"],
          data: [6, 4, 2],
          color: "#FCE69F",
          show: true,
          isRotate: false
        },
      ],
      screenWidth: document.body.clientWidth,
      date: "",
      isFixed: false,
      offsetTop: 0,
      clickShow: true,
    };
  },
  mounted() {
    this.chartFn();
    this.lineChartFn();
    this.rightChartFn();
    const that = this;
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
        // title: {
        //   left: "2.5%",
        //   top: 20,
        //   text: "大数据量面积图",
        //   textStyle: {
        //     fontSize: 15,
        //   },
        // },
        grid: {
          // top
          // left
          bottom: 20,
          left: 35,
          right: 15,
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
          ],
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
            data: [
              4,
              2,
              2,
              4,
              0,
              2,
              2,
              4,
              4,
              2,
              2,
              4,
              0,
              2,
              2,
              4,
              0,
              1,
              2,
              2,
              4,
            ],
            type: "line",
            //实现折点为圆
            showSymbol: true,
            symbol: "circle",
            symbolSize: 6,
            areaStyle: {
              //  实现渐变色
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    // 0代表上面
                    offset: 0,
                    color: "#97AFF9",
                  },
                  {
                    offset: 1,
                    color: "white",
                  },
                ]),
              },
            },
            smooth: true,
            itemStyle: {
              borderWidth: 2,
              color: "#97AFF9",
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
        // title: {
        //   left: "4%",
        //   top: 20,
        //   text: "大数据量面积图",
        //   textStyle: {
        //     fontSize: 15,
        //   },
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        //自定义颜色
        color: ["#94B3F9", "#E8BE90", "#FCE69F"],
        legend: {
          textStyle: {
            rich: {
              a: {
                width: "100%",
                fontSize: 13,
              },
              b: {
                width: 40,
                align: "left",
                fontSize: 13,
              },
              c: {
                width: 20,
                align: "left",
                fontSize: 13,
              },
            },
          },
          itemWidth: 18,
          type: "scroll",
          orient: "vertical",
          left: "56%",
          right: "10%",
          top: "40%",
          width: "auto",
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
            // data.forEach()
            let p = ((tarValue / total) * 100).toFixed(2);
            if (name.length >= 3) {
              name = name.substr(0, 3) + "...";
            }
            return [`{a|${name}}`, `{b|中间}`, `{c|${p}%}`].join("");
          },
        },

        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "45%",
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
        // title: {
        //   left: "4%",
        //   top: 20,
        //   text: "大数据量面积图",
        //   textStyle: {
        //     fontSize: 15,
        //   },
        // },
        grid: {
          bottom: 40,
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["一级故障", "二级故障", "三级故障", "四级故障"],
          axisLabel:{
             textStyle:{
            color:'#676767',
            fontSize:15
          }
          }
          ,
         
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
    verTileCLick(e) {
      console.log("点击我了");
      let title = document.querySelector(".verEle-Title");
      this.clickShow = !this.clickShow;
      console.log(this.clickShow);
    },
  },
  created() {
    this.getTime();
  },
};
</script>
<style lang="scss" scoped>
[data-v-fae5bece] .el-main[data-v-fae5bece][data-v-fae5bece] {
  height: calc(100% - 60px);
  overflow-y: hidden;
}
body {
  margin: 0;
}
.home {
  height: 100%;
  overflow: hidden;
  min-width: 900px;
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
.el-container {
  height: 100%;
}
// 头部
::v-deep .el-button--primary {
  padding: 8px 12px;
}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  // margin: 0 0% 0 0;
  // border: 1px solid #e0e0e0;
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
  background: #f5f7fa;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
}
.mainLeft {
  width: 54%;
  display: inline-block;
  .line {
    width: 0.5%;
    height: 90%;
    background: #efefef;
    margin-top: 20px;
    margin-right: 2%;
  }
  .mainLeftTopMid {
    height: 40%;
    .mainLeftTop {
      height: 30%;
      width: 100%;
      padding: 0;
      top: 0;
      background: white;
      border: 1px solid #e0e0e0;
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
            .blankLichild {
              font-size: 15px;
              color: #9e9e9e;
              font-weight: 500;
            }
          }
          .blankLi2 {
            // margin-top: 55%;
            color: #9e9e9e;
            font-size: 15px;
            font-weight: 700;
            padding-top: 30px;
          }
        }
      }
    }
    .mainLeftMid {
      width: 100%;
      height: calc(70% - 12px);
      margin: 10px 0 0 0;
      background: white;
      border: 1px solid #e0e0e0;
      position: relative;
      .linechartTitle {
        position: absolute;
        padding-top: 20px;
        font-size: 15px;
        font-weight: 600;
        padding-left: 20px;
        color: black;
      }
      #lineChart {
        width: 100%;
        height: 90%;
      }
    }
  }
}
.mainLeftBut {
  width: 100%;
  height: 55%;
  margin: 12px 10px 0 0;
  background: white;
  display: flex;
  border: 1px solid #e0e0e0;
  position: relative;
  .piechartTitle {
    position: absolute;
    padding-top: 20px;
    font-size: 15px;
    font-weight: 600;
    padding-left: 20px;
    color: black;
  }
  .verChart {
    height: 70%;
    margin-top: 10%;
  }
}

.mainRight {
  width: 44%;
  display: inline-block;
  .mainRigTop {
    height: 40%;
    width: 100%;
    padding: 0;
    top: 0;
    margin: 0 0 0 10px;
    background: white;
    border: 1px solid #e0e0e0;
    position: relative;
    .rigchartTitle {
      position: absolute;
      padding-top: 20px;
      font-size: 15px;
      font-weight: 600;
      padding-left: 20px;
      color: black;
    }
  }
  .mainRigBut {
    width: 100%;
    height: 55%;
    margin: 10px 0 0 10px;
    background: white;
    border: 1px solid #e0e0e0;
    // 表格
    .rightTable {
      height: 100%;
      display: flex;
      position: relative;
      .rightTable-title {
        position: absolute;
        padding-top: 20px;
        font-size: 15px;
        font-weight: 600;
        padding-left: 20px;
        color: black;
      }
      .rightTable-body {
        width: 92%;
        padding-top: 6%;
        padding-left: 4%;
      }
    }
  }
}

::v-deep .el-main[data-v-fae5bece] {
  line-height: 0;
  height: 550px;
}

::v-deep .el-table th > .cell {
  height: 34px;
  line-height: 34px;
  background: #efefef;
  color: black;
  font-size: 15px;
}

::v-deep .el-progress {
  width: 100%;
}
::v-deep .el-progress-bar__inner {
  background-color: #e8be90;
}
::v-deep .el-table--enable-row-transition .el-table__body td {
  font-weight: 700;
  color: grey;
}
</style>