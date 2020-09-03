<template>
  <div class="monitor-chart">
    <v-chart autoresize :options="option"></v-chart>
  </div>
</template>

<script>
import echarts from "echarts";
import ECharts from "vue-echarts";

import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
export default {
  props:{
    monitorData:{
      type:Object,
      required:false,
      default:() => {}
    },
  },
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.option = {
      title: [
        {
          text: (this.monitorData.num / this.monitorData.sum ).toFixed(3)* 100 + "%",
          x: "center",
          top: "43%",
          textStyle: {
            fontSize: "17",
            color: "#EF2D0D",
            fontWeight:"400"
          },
        },
      ],
      polar: {
        radius: ["65%", "80%"],
        center: ["50%", "50%"],
      },
      angleAxis: {
        max: 100,
        show: false,
      },
      radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: "",
          type: "bar",
          roundCap: true,
          barWidth: 60,
          showBackground: true,
          backgroundStyle: {
            color: "#EBECF1",
          },
          data: [(this.monitorData.num / this.monitorData.sum ).toFixed(4)* 100],
          coordinateSystem: "polar",
          //渐变色
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 1,
                  color: "#EF2D0D",
                },
                {
                  offset: 0,
                  color: "#FEA494",
                },
              ]),
            },
          },
        },
      ],
    };
  },
};
</script>

<style>
.monitor-chart {
  width: 100%;
  height: 100%;
}
</style>