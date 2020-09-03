<template>
  <div>
    <div class="ver-ele" v-for="(item,index) in verData" :key="index">
      <div class="ver-eletitle">
         <span class="ver-but">
          <i :class="[item.isRotate ? 'el-icon-arrow-down rotate-right':'el-icon-arrow-down rotate-down']" @click="ratoteClick(item)"></i>
        </span>
        <span>{{item.title}}</span>
      </div>
      <div v-show="item.show">
        <div class="ver" :id="item.idName" v-for="(text,textIndex) in item.font" :key="textIndex">
          <span class="ver-font">{{text}}</span>
          <el-progress
            :percentage="getPercentage(item.data[textIndex])"
            :show-text="false"
            :color="item.color"
          ></el-progress>
          <span class="ver-num">{{item.data[textIndex]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["verData"],
  data() {
    return {
      isRotate:false
    };
  },
  methods: {
    //先把进度条里面的比例计算出来，再传送到进度条组件进行渲染
    getPercentage(data) {
      return (data / this.dataMax) * 100;
    },
    ratoteClick(e){
        e.isRotate=!e.isRotate;
        e.show=!e.show
    }
  },
  computed: {
    //计算进度条里面data的最大值
    dataMax() {
      let max = 0;
      this.verData.forEach((value, index) => {
        this.verData[index].data.forEach((data, dataIndex) => {
          if (max < data) {
            max = data;
          }
        });
      });
      return max;
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes mymove{
  from{
    transform: rotate(0 deg);
  }
  to{
    transform: rotate(90 deg);
  }
}
.ver-ele {
  margin-top: 4%;
  .ver-eletitle {
    margin: 0 0 7% 0;
    display: flex;
    color: grey;
    .ver-but {
      margin-top: -10px;
      .rotate-right{
        transition:transform 0.5s ;
        transform:  rotate(-90deg);
      }
      .rotate-down{
        transition:transform 0.5s ;
      }
    }
    .ver-but i:hover {
      cursor: pointer;
    }
  }
  .ver {
    display: flex;
    justify-content: space-around;
    width: 86%;
    margin-left: 3%;
    height: 20px;
    font-size: 15px;
    .ver-font {
      color: grey;
      width: 120px;
    }
    .ver-num {
      color: grey;
      padding-left: 5%;
    }
  }
}
</style>
