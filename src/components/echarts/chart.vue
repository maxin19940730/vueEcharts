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
// 引入柱状图
// require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require("echarts/lib/chart/line");
// require("echarts/lib/component/dataZoom");
export default {
  props: ['option'],
  //type 类型 单线single  多线many
//   seriesType 图类型 线性line  柱状图 bar
  data () {
    return {
        options: {},
        loading: true
    }
  },
  methods:{
    success(response){
        const { type='single', seriesType='line', legend= false, maxXAxis=0 } = this.option 
        const { data = [], xAxis=[] } = response.body
        let legendData=[],series=[]
        if(type==='single'){
            series.push(
            {
                type:seriesType,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data,
            })
        }else{
            data && data.length && data.forEach(element => {
                legendData.push(element.name)
                series.push(
                {
                    name:element.name,
                    type: seriesType,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: element.value
                })
            });
            
        }
        this.options={
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show: legend,
                data: legendData
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : xAxis
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            dataZoom: [
                {
                    show: maxXAxis>=xAxis.length,
                    type: 'slider',
                },
            
            ],
            series
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