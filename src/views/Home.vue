<template>
  <div class="home">
        <!-- 主体 -->
          <!-- 左边 -->
          <div class="main-left">
            <div class="main-lefttopmid">
              <div class="main-lefttop">
                <div class="blank">
                  <span class="blan-span" v-for="(item,index) in blankLi" :key="index">
                    <li class="blank-li1" v-show="index==1">{{item.num}}</li>
                    <li class="blank-li1" v-show="index==0" style="color:red">{{item.num}}</li>
                    <li class="blank-li1" v-show="index==2">
                      {{item.num}}
                      <span class="blank-lichild">分钟</span>
                    </li>
                    <li class="blank-li2">{{item.font}}</li>
                  </span>
                </div>
              </div>
              <div class="main-leftmid">
                <div class="linechart-title">故障趋势图</div>
                <div id="linechart"></div>
              </div>
            </div>
            <div class="main-leftbut">
              <!-- 下左 -->
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div class="piechart-title">各资源类型故障占比</div>
              <div id="piechart" style="width: 60%;height:100%;"></div>
              <div class="line"></div>
              <!-- 下右 -->
              <div class="verchart" style="width: 35%;">
                <ver-chart :verData="verData"></ver-chart>
              </div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="main-right">
            <div class="main-rigtop">
              <div class="rigchart-title">按故障等级计算故障数量</div>
              <div id="rightchart" style="width: 100%;height:100%;"></div>
            </div>
            <div class="main-rigbut">
              <div class="righttable">
                <div class="righttable-title">故障影响的资源TOP5</div>
                <div class="righttable-body">
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
  </div>
</template>
   
<script>
import echarts from "echarts";
import verChart from "../components/verChart";
export default {
  components: {
    verChart,
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
      toprightBtn: ["近7天", "近15天", "近30天", "自定义"],
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
    };
  },
  mounted() {
    this.chartFn();
    this.linechartFn();
    this.rightchartFn();
  },

  methods: {
    linechartFn() {
      var linechart = echarts.init(document.getElementById("linechart"));
      
      //实现自适应，写setTimeout延迟是为了适应窗口缩放所产生的读写延迟
      window.addEventListener("resize", function () {
        setTimeout(function () {
          linechart.resize();
        }, 10);
      });

      let option = {
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
           axisTick: [
            {
              show: false,
            }],
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
           axisTick: [
            {
              show: false,
            }],
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
      linechart.setOption(option);
    },
    chartFn() {
      // 基于准备好的dom，初始化echarts实例
      var piechart = echarts.init(document.getElementById("piechart"));
      window.addEventListener("resize", function () {
        setTimeout(function () {
          piechart.resize();
        }, 10);
      });
      var data = genData(3);
      let option = {
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
      piechart.setOption(option);

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
    rightchartFn() {
      var rightchart = echarts.init(document.getElementById("rightchart"));
      window.addEventListener("resize", function () {
        setTimeout(function () {
          rightchart.resize();
        }, 10);
      });
      let option = {
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
            fontSize:13
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
      rightchart.setOption(option);
    },

  },

};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  // overflow: hidden;
  display: flex;
}
.main-left {
  width: 55%;
  display: inline-block;
  height: 100%;
  .line {
    width: 0.5%;
    height: 90%;
    background: #efefef;
    margin-top: 20px;
    margin-right: 2%;
  }
  .main-lefttopmid {
    height: 40%;
    .main-lefttop {
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
        .blan-span {
          align-self: center;

          .blank-li1 {
            font-weight: 700;
            font-size: 20px;
            .blank-lichild {
              font-size: 15px;
              color: #9e9e9e;
              font-weight: 500;
            }
          }
          .blank-li2 {
            color: #9e9e9e;
            font-size: 15px;
            font-weight: 700;
            padding-top: 30px;
          }
        }
      }
    }
    .main-leftmid {
      width: 100%;
      height: calc(70% - 12px);
      margin: 10px 0 0 0;
      background: white;
      border: 1px solid #e0e0e0;
      position: relative;
      .linechart-title {
        position: absolute;
        padding-top: 20px;
        font-size: 15px;
        font-weight: 600;
        padding-left: 20px;
        color: black;
      }
      #linechart {
        width: 100%;
        height: 90%;
      }
    }
  }
}
.main-leftbut {
  width: 100%;
  height: 55%;
  margin: 12px 10px 0 0;
  background: white;
  display: flex;
  border: 1px solid #e0e0e0;
  position: relative;
  .piechart-title {
    position: absolute;
    padding-top: 20px;
    font-size: 15px;
    font-weight: 600;
    padding-left: 20px;
    color: black;
  }
  .verchart {
    height: 70%;
    margin-top: 10%;
  }
}

.main-right {
  width: 44%;
  display: inline-block;
  height: 100%;
  .main-rigtop {
    height: 40%;
    width: 100%;
    padding: 0;
    top: 0;
    margin: 0 0 0 10px;
    background: white;
    border: 1px solid #e0e0e0;
    position: relative;
    .rigchart-title {
      position: absolute;
      padding-top: 20px;
      font-size: 15px;
      font-weight: 600;
      padding-left: 20px;
      color: black;
    }
  }
  .main-rigbut {
    width: 100%;
    height: 55%;
    margin: 10px 0 0 10px;
    background: white;
    border: 1px solid #e0e0e0;
    // 表格
    .righttable {
      height: 100%;
      display: flex;
      position: relative;
      .righttable-title {
        position: absolute;
        padding-top: 20px;
        font-size: 15px;
        font-weight: 600;
        padding-left: 20px;
        color: black;
      }
      .righttable-body {
        width: 92%;
        padding-top: 50px;
        padding-left: 4%;
      }
    }
  }
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
::v-deep .el-table--enable-row-transition .el-table__body td {
  font-weight: 700;
  color: grey;
}
</style>