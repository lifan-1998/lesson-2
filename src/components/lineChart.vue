<template>
  <section class="line-chart">
    <v-chart autoresize :options="option"></v-chart>
  </section>
</template>

<script>
import echarts from "echarts";
import Echarts from "vue-echarts";

import "echarts/lib/chart/line";
import "echarts/lib/component/grid";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

export default {
  components: {
    "v-chart": Echarts,
  },
  // props: ["lineChartxData", "lineChartValue"],
  props:{
    lineChartxData:{
      type:Array,
      required:false,
      default:() => []
    },
    lineChartValue:{
      type:Array,
      required:false,
      default:() => []
    },
     },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.option = {
      grid: {
        bottom: 35,
        left: 35,
        right: 25,
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        axisTick: [
          {
            show: false,
          },
        ],
        boundaryGap: false,
        data: this.lineChartxData,
        //显示竖轴参考线
        splitLine: { show: true },
        //改变x/y轴的颜色
        axisLine: {
          lineStyle: {
            color: "#BABBBF",
            width: 1,
          },
        },
      },
      yAxis: {
        type: "value",
        axisTick: [
          {
            show: false,
          },
        ],
        //改变x/y轴的颜色
        axisLine: {
          lineStyle: {
            color: "#BABBBF",
            width: 1,
          },
        },
      },

      series: [
        {
          data: this.lineChartValue,
          type: "line",
          //实现折点为圆
          showSymbol: false,
          //   symbol: "circle",
          //   symbolSize: 6,
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

<style>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>