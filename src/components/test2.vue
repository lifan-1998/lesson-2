<template>
  <div><div class="chart">
    <el-progress type="circle" :percentage="25" stroke-width="18"></el-progress>
     </div>
    <svg width="100%" height="100%">
      <defs>
        <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(255,189,25)" stop-opacity="1" />
          <stop offset="100%" style="stop-color:rgb(0,200,255)" stop-opacity="1" />
        </linearGradient>
      </defs>
    </svg>
 
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
 .chart::v-deep svg>path:nth-child(2){
    stroke:url(#blue)
}
</style>