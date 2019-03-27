<template>
    <v-chart :options="options" theme="macarons" v-loading="loading"/>
</template>

<style>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%!important;
  height: 100%!important;
}
</style>

<script>
//格式
// (function (){

// return {} //option
// })()

export default {
  props: ['option'],
  data () {
    return {
        loading: true,
        optionFun: '(function(option){return option})',
        options: {}
    }
  },
  methods:{
    getOptions(){
      let option = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      };
      this.options=eval(this.optionFun +'(option)')
      this.loading=false
    }
  },
  created: function () {
    this.getOptions()
  },
   //这里用watch方法来监听父组件传过来的值，来实现实时更新
  watch:{
    option(val){    //option即为父组件的值，val参数为值
    
      // let nevVal=eval('('+val+')')
      let newVal=eval(val)
      if(typeof newVal === 'object'){
        this.options=eval(val)
        this.loading=false
      }else{
        alert('错误的格式')
      }
      
    }
  }

}
</script>