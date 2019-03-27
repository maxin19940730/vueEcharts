<template>
  <div class="echarts-box">
    <chart :option="option" ></chart>
  </div>
</template>
<style>
 .echarts-box{
   width: 500px;
  height: 500px;
 }

</style>
<script>
import {chart} from "../components/echarts";
export default {
  components:{
    chart
  },
  data(){
    return {
      option: {
        type: "many",
        legend: true,
        maxXAxis: 8,
        dataUrl: "/api/chartData?id=002",
      }
    }
    
  }
}
</script>