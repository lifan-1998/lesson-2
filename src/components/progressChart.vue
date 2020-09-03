<template>
  <div class="progree-chart">
    <el-table :data="tableData" style="width: 100%" height="100%">
      <el-table-column type="index" v-if="showIndex"></el-table-column>
      <el-table-column
        v-for="(item,index) in tableColum"
        :prop="item.prop"
        :key="index"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      >
        <template slot-scope="scope">
          <!-- 进度条 -->
          <div class="row" v-if="item.prop=='pro'">
            <div class="progress">
              <el-progress
                :text-inside="true"
                :stroke-width="18"
                :percentage="scope.row.pro / 10 * 100"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="num">{{scope.row.pro}}</div>
            <span class="percentage">{{scope.row.pro / 10 * 100}}%</span>
          </div>
          <!-- 比例 -->
          <div v-else-if="item.prop=='percen'">
            {{scope.row.num1}}/{{scope.row.num2}} 
          </div>
          <!-- 比率 -->
          <div v-else-if="item.prop=='scale'">
           {{  (scope.row.num1 / scope.row.num2).toFixed(3) * 100}}% 
          </div>
          <!-- 其他 -->
          <div v-else>
            {{scope.row[item.prop]}}
            </div>

        </template>
      </el-table-column>
    </el-table>
   
  </div>
</template>

  <script>
export default {
  props:{
    tableData:{
      type:Array,
      required:false,
      default:() => []
    },
    tableColum:{
      type:Array,
      required:false,
      default:() => []
    },
     showIndex:{
      type:Boolean,
      required:false,
      
    }
  },
  data() {
    return {
  
    };
  },
  mounted(){
    // console.log(this.showIndex)
  },
  methods: {
  
  },
};
</script>

<style>
.progree-chart {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.el-progress-bar__inner {
  background-image: linear-gradient(to right, #577ce8, #b0c5fd);
  border-radius: 0px;
}
.el-progress-bar__outer {
  border-radius: 0px;
}
.el-table th>.cell { 
     padding-right: 20px;
}
.el-table .cell{
  padding-right: 20px;
}
.row {
  position: relative;
  height: 18px;
  width: 80%;
}
.num {
  /* float: right; */
  width: 100%;
  height: 100%;
  position: absolute;
  line-height: 18px;
  vertical-align: middle;
  text-align: end;
}
.progress {
  position: absolute;
  width: 100%;
  height: 100%;
}
.percentage {
  position: absolute;
  line-height: 18px;
  margin-left: 46px;
  width: 100%;
  height: 100%;
  text-align: end;
  color: #ff5500;
}
.el-table th {
  background: #ebecf1;
  color: black;
  font-size: 15px;
}
</style>