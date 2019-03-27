<template>
  <div class="echarts-box">
    <pie :option="option"></pie>
  </div>
</template>
<style>
 .echarts-box{
   width: 500px;
  height: 500px;
 }

</style>
<script>
import { pie } from "../components/echarts";
export default {
  components:{
    pie
  },
  data(){
    return {
      option: {
        legend: true,
        legendConfig: {
          orient: 'vertical',
          x: 'right',
        },
        dataUrl: "/api/pieData?id=001",
      }
    }
    
  }
}
</script>