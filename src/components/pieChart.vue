<template>
  <section class="pie-chart">
    <v-chart  autoresize :options="option"></v-chart>
  </section>
</template>
<script>
import echarts from 'echarts';
import ECharts from 'vue-echarts';

import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
// import 'echarts/lib/component/series';

export default {
  components: {
    "v-chart": ECharts,
  },
    props:["pieChartData"],
  data() {
    return {
      option: {},
      chartData:this.pieChartData
    };
  },
  mounted() {
    // console.log(this.pieChartData)
    this.option = {
      title: {
        // text: '{header1| 名称与占比}' +
        //     '{header2| 数量}' +
        //     '{header3| 比例}',
        textAlign: "left",
        left: "49%",
        top: "30%",
        textStyle: {
          color: "#ccc",
          rich: {
            header1: {
              width: 130,
              fontSize: 15,
            },
            header2: {
              width: 85,
              fontSize: 15,
            },
            header3: {
              fontSize: 15,
            },
          },
        },
      },
      color: ["#E8BE90", "#FCE69F", "#F7A484", "#7593EE", "#86A6F4","#94B3F9"],
      legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: "plain",
        icon: "square",
        orient: "vertical",
        left: this.chartData[0].legLeft,
        top: this.chartData[0].legTop,
        // align: "left",
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
          color:"#000",
          rich: {
            name: {
                color: "#BABBBF",
              verticalAlign: "right",
              align: "left",
              width: 90,
              fontSize: 12,
            },
            value: {
              align: "left",
              width: 40,
              fontSize: 12,
            },
            rate: {             
              width: 50,
              align: "right",
              fontSize: 12,
            },
          },
        },
        // data: data.map(item => item.name),
        formatter: function (name) {
          let className = "upRate";
          let nameArr = name.split("|");
          // console.log(nameArr)
          let rateIcon = "▲";
          if (nameArr.length != 0) {
            for (var i = 0; i < nameArr.length; i++) {
              //         if (name === nameArr[i]) {
              if (nameArr[2] < 0) {
                className = "downRate";
                rateIcon = "▼";
              }
              return (
                "{name| " +
                nameArr[0] + "} "
                 +
                "{value|" +
                nameArr[1] +"}"
                +
                "{rate| " +
                Math.abs(nameArr[2]) +
                "%}"
              );
            //    return [`{name| ${nameArr[0]}}`, `{value |${nameArr[1]}`, `{rate |${nameArr[2]}%`].join("");
              // }
            }
          }
        },
      },
      series: [
        {
          name: "数量",
          type: "pie",
          radius: ["25%", "55%"],
          center: ["25%", "60%"],
          data: this.chartData,
          label: {
            normal: {
              show: false,
              position: "center",
              formatter: "{text|{c}}\n{b}",
              rich: {
                text: {
                  align: "center",
                  verticalAlign: "middle",
                  padding: 8,
                  fontSize: 15,
                },
                value: {
                  align: "center",
                  verticalAlign: "middle",
                  fontSize: 15,
                },
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "12",
              },
            },
          },
          labelLine: {
            normal: {
              show: true,
            },
          },
        },
      ],
    };
    // console.log(JSON.stringify(this.option))
  },
};
</script>

<style>
.pie-chart{
  height: 100%;
  width: 100%;
}
</style>