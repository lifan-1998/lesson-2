<template>
  <div class="monitor-cahrt">
    <!-- <el-progress type="circle" :percentage="25"
      stroke-width="18"  color="#EE2A09"
    ></el-progress>-->
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
    title: [{
        text: '60%',
        x: 'center',
        top: '47%',
        textStyle: {
            fontSize: '18',
            color: '#EF2D0D',
            fontFamily: 'Lato',
            foontWeight: '600',
        },
    }],
    polar: {
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)',
            },
            data: [60],
            coordinateSystem: 'polar',
//渐变色
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: '#EF2D0D'
                    }, {
                        offset: 0,
                        color: '#FEA494'
                    }]),
                }
            }

        }, 
       
    ]
};
  },
};
</script>

<style>
.monitor-cahrt {
  width: 100%;
  height: 100%;
}
</style>