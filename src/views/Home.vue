<template>
  <div class="home">
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="pieChart" style="width: 600px;height:400px;"></div>
  </div>
</template>
   
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.chartFn();
  },
  methods: {
    chartFn() {
      // 基于准备好的dom，初始化echarts实例
      var pieChart = echarts.init(document.getElementById("pieChart"));
      var data = genData(3);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        color:['#d48265', '#91c7ae', '#61a0a8'],
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
          selected: data.selected,
          //显示百分比，重写formatter函数
          formatter: function (name) {
            // 获取legend显示内容
            let data = option.series[0].data;
            console.log(data);
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = ((tarValue / total) * 100).toFixed(2);
            return name + "  " + "我就是喜欢中间" + "  " + p + "%";
          },
        },

        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
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
                shadowColor: "rgba(0, 0, 0, 0.5)"
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
  },
};
</script>
