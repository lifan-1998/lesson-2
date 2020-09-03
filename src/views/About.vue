<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <!-- 头左 -->
      <div class="top-left">
        <div class="top-leftitem" v-for="(item,index) in topleft" :key="index">
          <div :class="index==1 ? 'top-leftnum1' : 'top-leftnum'">{{item.leftnum}}</div>
          <div class="top-lefttext">{{item.lefttext}}</div>
        </div>
      </div>
      <!-- 头右 -->
      <div class="top-right">
        <div class="top-righttitle">未清除告警数/告警总数</div>
        <div class="top-rightitem" v-for="(item,index) in topright" :key="index">
          <div class="top-rightnum">
            <span class="top-rightnum1">{{item.rightnum}}</span>
            / {{item.rightdeno}}
          </div>
          <div class="top-righttext">{{item.righttext}}</div>
        </div>
      </div>
    </div>

    <!-- 中间 -->
    <div class="middle">
      <div class="middle-con">
        <div class="middle-title">按各监控模块告警统计分布</div>
        <div class="middle-chart">
          <pie-chart :pieChartData="pieChartData1"></pie-chart>
        </div>
      </div>
      <div class="middle-con">
        <div class="middle-title">按告警等级统计分布</div>
        <div class="middle-chart">
          <pie-chart :pieChartData="pieChartData2"></pie-chart>
        </div>
      </div>
      <div class="middle-con">
        <div class="middle-title">告警总数趋势图</div>
        <div class="middle-chart">
          <line-chart :lineChartxData="lineChartxData" :lineChartValue="lineChartValue"></line-chart>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="botton">
      <div class="bottom-item" v-for="(item,index) in data" :key="index">
        <div class="bottom-itemtitle">
          <span class="bottom-itemtileft">{{item.leftTitle}}</span>
          <span class="bottom-itemrig" v-if="index==0 || index==1">
            告警总数：
            <span class="bottom-itemrignum">{{item.rigTitle}}</span>
          </span>
        </div>
        <div class="bottom-chart">
          <div class="bottom-chartitem">
            <div class="bottom-chartleft" v-if="index!=0 && index!=1">
              <div class="bottom-chartmonitor">
                <monitor-chart v-if="item.monitorData.num!=0" :monitorData="item.monitorData"></monitor-chart>
                <img v-else src="..\assets\null.png" alt />
              </div>
              <div v-if="item.monitorData.num!=0" class="bottom-chartmonitor-font">告警占比</div>
              <div v-if="item.monitorData.num==0" class="bottom-chartmonitor-font">无告警</div>
              <div class="bottom-chartmonitor-text1">服务总数：{{item.monitorData.sum}}</div>
              <div class="bottom-chartmonitor-text2">告警服务数：{{item.monitorData.num}}</div>
            </div>
            <div :class="index==0 || index==1 ?'bottom-charttable' : 'bottom-chartright'">
              <progress-chart
                :tableData="item.tableData"
                :tableColum="item.tableColum"
                :showIndex="item.showIndex"
              ></progress-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import Echarts from "vue-echarts";
import pieChart from "../components/pieChart";
import lineChart from "../components/lineChart";
import progressChart from "../components/progressChart";
import monitorChart from "../components/monitorChart";
export default {
  components: {
    echarts,
    Echarts,
    pieChart,
    lineChart,
    progressChart,
    monitorChart,
  },
  data() {
    return {
      option: {},
      topleft: [
        {
          leftnum: 24,
          lefttext: "告警总数",
        },
        {
          leftnum: 8,
          lefttext: "未清除告警数",
        },
        {
          leftnum: 30,
          lefttext: "涉及资源",
        },
      ],
      topright: [
        {
          rightnum: 1,
          rightdeno: 3,
          righttext: "IaaS层",
        },
        {
          rightnum: 3,
          rightdeno: 7,
          righttext: "PasS层",
        },
        {
          rightnum: 1,
          rightdeno: 5,
          righttext: "服务",
        },
        {
          rightnum: 1,
          rightdeno: 4,
          righttext: "IT场景",
        },
        {
          rightnum: 1,
          rightdeno: 2,
          righttext: "客户监控",
        },
        {
          rightnum: 1,
          rightdeno: 3,
          righttext: "营业效能",
        },
      ],
      pieChartData1: [
        {
          name: "IaaS层|36|12",
          value: 36,
          rate: 12,
          legLeft: "45%",
          legTop: "20%",
        },
        {
          name: "PaaS层|20|20",
          value: 20,
          rate: 20,
        },
        {
          name: "服务|16|-40",
          value: 16,
          rate: -40,
        },
        {
          name: "IT场景|10|-15",
          value: 10,
          rate: -15,
        },
        {
          name: "客户监控|9|12",
          value: 9,
          rate: 12,
        },
        {
          name: "营业效能|9|-6",
          value: 9,
          rate: -6,
        },
      ],
      pieChartData2: [
        {
          name: "严重告警|2|10",
          value: 2,
          rate: 10,
          legLeft: "45%",
          legTop: "30%",
        },
        {
          name: "重要告警|6|30",
          value: 6,
          rate: 30,
        },
        {
          name: "一般告警|8|40",
          value: 8,
          rate: 40,
        },
        {
          name: "预警|4|20",
          value: 4,
          rate: 20,
        },
      ],
      lineChartxData: [
        "01/12",
        "02/12",
        "03/12",
        "04/12",
        "05/12",
        "06/12",
        "07/12",
      ],
      lineChartValue: [4, 2, 2, 4, 0, 2, 3],
      data: [
        {
          tableColum: [
            {
              prop: "type",
              label: "设备类型",
              width: 160,
              align: "right",
            },
            {
              prop: "pro",
              label: "告警数分布",
              width: 300,
            },
            {
              prop: "percen",
              label: "告警设备数/设备总数",
              width: 170,
              align: "right",
            },
            {
              prop: "scale",
              label: "设备告警率",
              width: 170,
              align: "right",
            },
          ],
          tableData: [
            { type: "主机", pro: 6, num1: 15, num2: 300 },
            {
              type: "交换机",
              pro: 1,
              num1: 2,
              num2: 20,
            },
            {
              type: "存储",
              pro: 2,
              num1: 1,
              num2: 15,
            },
            {
              type: "光纤交换机",
              pro: 1,
              num1: 1,
              num2: 5,
            },
            {
              type: "防火墙",
              pro: 0,
              num1: 0,
              num2: 4,
            },
          ],
          leftTitle: "IaaS层监控情况",
          rigTitle: 10,
        },
        {
          tableColum: [
            {
              prop: "type",
              label: "设备类型",
              width: 160,
              align: "right",
            },
            {
              prop: "pro",
              label: "告警数分布",
              width: 300,
            },
            {
              prop: "percen",
              label: "告警设备数/设备总数",
              width: 170,
              align: "right",
            },
            {
              prop: "scale",
              label: "设备告警率",
              width: 170,
              align: "right",
            },
          ],
          tableData: [
            {
              type: "分布式数据库",
              pro: 6,
              num1: 15,
              num2: 300,
            },
            {
              type: "分布式缓存",
              pro: 1,
              num1: 2,
              num2: 20,
            },
            {
              type: "分布式消息",
              pro: 2,
              num1: 1,
              num2: 15,
            },
            {
              type: "容器",
              pro: 1,
              num1: 1,
              num2: 5,
            },
            {
              type: "其他",
              pro: 0,
              num1: 0,
              num2: 4,
            },
          ],
          showIndex: false,
          leftTitle: "PaaS层监控情况",
          rigTitle: 10,
        },
        {
          tableColum: [
            {
              prop: "section",
              label: "告警最多的系统TOP 5",
              width: 240,
            },
            {
              prop: "warmnum",
              label: "告警服务数/服务总数",
              width: 210,
              align: "right",
            },
          ],
          tableData: [
            {
              section: "",
              warmnum: '',
            },
            {
              section: "",
              warmnum: '',
            },
            {
              section: "",
              warmnum: '',
            },
            {
              section: "",
              warmnum: '',
            },
            {
              section: "",
              warmnum: '',
            },
          ],
          monitorData: {
            sum: 100,
            num: 0,
          },
          showIndex: true,
          leftTitle: "服务监控情况",
        },
        {
          tableColum: [
            {
              prop: "section",
              label: "告警最多的场景TOP 5",
              width: 240,
            },
            {
              prop: "warmnum",
              label: "告警数量",
              width: 210,
              align: "right",
            },
          ],
          tableData: [
            {
              section: "计费系统",
              warmnum: 8,
            },
            {
              section: "CPM",
              warmnum: 12,
            },
            {
              section: "渠道受理",
              warmnum: 2,
            },
            {
              section: "客户服务",
              warmnum: 1,
            },
            {
              section: "财务辅助",
              warmnum: 7,
            },
          ],
          monitorData: {
            sum: 100,
            num: 8,
          },
          showIndex: true,
          leftTitle: "IT场景监控情况",
        },
        {
          tableColum: [
            {
              prop: "section",
              label: "告警最多的指标TOP 5",
              width: 240,
            },
            {
              prop: "warmnum",
              label: "告警数量",
              width: 210,
              align: "right",
            },
          ],
          tableData: [
            {
              section: "线上查询端到端成功率",
              warmnum: 6,
            },
            {
              section: "电渠发货及时率",
              warmnum: 1,
            },
            {
              section: "投诉工单一次性解决率",
              warmnum: 2,
            },
            {
              section: "缴费复机及时率",
              warmnum: 1,
            },
            {
              section: "营业厅服务满意率",
              warmnum: 10,
            },
          ],
          monitorData: {
            sum: 100,
            num: 8,
          },
          showIndex: true,
          leftTitle: "客户监控情况",
        },
        {
          tableColum: [
            {
              prop: "section",
              label: "告警最多的环节TOP 5",
              width: 240,
            },
            {
              prop: "warmnum",
              label: "告警数量",
              width: 210,
              align: "right",
            },
          ],
          tableData: [
            {
              section: "新建客户",
              warmnum: 6,
            },
            {
              section: "业务选择",
              warmnum: 1,
            },
            {
              section: "信息录入",
              warmnum: 2,
            },
            {
              section: "实名认证",
              warmnum: 1,
            },
            {
              section: "客户定位",
              warmnum: 7,
            },
          ],
          monitorData: {
            sum: 9,
            num: 8,
          },
          showIndex: true,
          leftTitle: "营业效能监控情况",
        },
      ],
    };
  },
  mounted() {
    this.option = {
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
          data: [4, 2, 2, 4, 0, 2, 2, 4, 4, 2, 2, 4, 0, 2, 2, 4, 0, 1, 2, 2, 4],
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
  },
};
</script>

<style lang="scss" scoped >
::v-deep .echarts {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 95px;
  display: flex;
  .top-left {
    flex: 3;
    display: flex;
    justify-content: space-around;
    background: white;
    margin-right: 10px;
    .top-leftitem {
      height: 50px;
      line-height: 50px;
      margin: auto;
      .top-leftnum {
        height: 25px;
        line-height: 25px;
        font-size: 22px;
        color: #4477ee;
        // font-weight: 600;
      }
      .top-leftnum1 {
        height: 25px;
        line-height: 25px;
        font-size: 22px;
        color: red;
        // font-weight: 600;
      }
      .top-lefttext {
        height: 25px;
        line-height: 25px;
        font-size: 15px;
        color: #8b8c8e;
      }
    }
  }

  .top-right {
    flex: 5;
    display: flex;
    justify-content: space-around;
    background: white;
    position: relative;
    .top-righttitle {
      position: absolute;
      height: 35px;
      line-height: 25px;
      width: 100%;
      font-size: 15px;
      padding-right: 20px;
      color: #abacb2;
      display: flex;
      justify-content: flex-end;
    }
    .top-rightitem {
      height: 50px;
      line-height: 50px;
      margin: auto;
      .top-rightnum {
        height: 25px;
        line-height: 25px;
        font-size: 18px;
        .top-rightnum1 {
          height: 25px;
          line-height: 25px;
          font-size: 22px;
          // font-weight: 600;
          color: red;
        }
      }
      .top-righttext {
        height: 25px;
        line-height: 25px;
        font-size: 15px;
        color: #8b8c8e;
      }
    }
  }
}
.middle {
  width: 100%;
  height: 204px;
  display: flex;
  margin-top: 10px;
  .middle-con {
    flex: 1;
    height: 100%;
    background: white;
    margin-right: 10px;
    position: relative;
    .middle-title {
      height: 20px;
      float: left;
      padding: 20px 0 0 15px;
      font-size: 15px;
      font-weight: 600;
    }
    .middle-chart {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.botton {
  width: 100%;
  // display: flex;
  justify-content: space-between;
  .bottom-item {
    width: calc((100% - 10px) / 2);
    height: 288px;
    display: inline-block;
    background: white;
    margin-top: 10px;
    margin-right: 10px;
    .bottom-chart {
      width: 98%;
      height: 90%;
      // overflow: auto;
      // display: flex;

      .bottom-chartitem {
        display: flex;
        width: 100%;
        height: 95%;
        margin-top: 40px;
        margin-left: 15px;
        .bottom-charttable {
          // margin-top: 40px;
          height: calc(100% - 20px);
          overflow: hidden;
          // margin-left: 15px;
        }
        .bottom-chartleft {
          flex: 3;
          display: flex;
          flex-direction: column;
          .bottom-chartmonitor {
            // width: 100%;
            // height: 100%;
            flex: 7;
            font-size: 15px;
            img {
              display: inherit;
              width: 160px;
              margin: 10px auto;
            }
          }
          .bottom-chartmonitor-font {
            flex: 1;
            margin-top: 10px;
            color: #8b8c8e;
          }
          .bottom-chartmonitor-text1 {
            flex: 1;
          }
          .bottom-chartmonitor-text2 {
            flex: 1;
          }
        }

        .bottom-chartright {
          flex: 5;
          // background: green;
          margin-right: 15px;
          overflow: hidden;
        }
      }
    }
    .bottom-itemtitle {
      .bottom-itemtileft {
        font-size: 15px;
        font-weight: 600;
        float: left;
        padding: 20px 0 0 15px;
      }
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
.bottom-itemrig {
  font-size: 14px;
  color: #8b8c8e;
  float: right;
  padding: 20px 15px 0 0;
  .bottom-itemrignum {
    color: red;
  }
}
</style>
