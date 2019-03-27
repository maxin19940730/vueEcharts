<template>
    <v-chart :options="options" theme="macarons" v-loading="loading" />
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
// require("echarts/lib/chart/pie");
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
export default {
  props: ['option'],
  data () {
    return {
        options: {},
        loading: true,
    }
  },
  methods:{
    success(response){
        const { data = [], name='' } = response.body
        const { legend= false, legendConfig={}, type='pie', roseType=false, radius=['50%', '70%'], label={} }= this.option
        let legendData=[]
        legend && data && data.length && data.forEach(element => {
            legendData.push(element.name)
        });
        this.options={
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                show: legend,
                data: legendData,
                ...(legend && legendConfig) ? legendConfig : {}
            },
            series: [
                {
                    name,
                    type,
                    radius,
                    roseType,
                    avoidLabelOverlap: false,
                    label,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data,
                }
            ]
        }
        this.loading=false
    },
    error(){
        console.log('请求失败');
        console.log(error);
    },
    getOptions(){
      const { dataUrl='' } = this.option 
      this.$http.get(dataUrl).then(this.success,this.error);
    }
  },
  
  created: function () {
    this.getOptions()
  }
}
</script>