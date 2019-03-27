<template>
  <el-row>
    <el-col v-for="item in items" :key="item.key" :span="item.colSpan" :style="item.styleObject">
      <chart :option="item.data" v-if="item.type==='chart'"></chart>
      <pie :option="item.data" v-if="item.type==='pie'"></pie>
    </el-col>
  </el-row>
</template>

<script>
 import { chart, pie } from "../components/echarts";

 
export default {
  components:{
    chart,
    pie,
  },
  data(){
    return {
      items:[
      {
        type: 'chart',
        key: '0',
        colSpan: 12,
        styleObject: {
          height: '300px'
        },
        data: {
          type: 'many',
          dataUrl: "/api/chartData?id=002",
        },
      },
      {
        key: '1',
        type: 'chart',
        colSpan: 6,
        styleObject: {
          height: '300px'
        },
        data: {
          type: "single",
          seriesType: "bar",
          legend: true,
          dataUrl: "/api/chartData?id=001",
        }
      },
      {
        type: 'pie',
        key: '2',
        colSpan: 12,
        styleObject: {
          height: '300px'
        },
        data: {
          legend: true,
          dataUrl: "/api/pieData?id=002",
          legendConfig: {
            orient: 'vertical',
            x: 'right',
          },
          emphasis: {
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
            }
          },
          label: {
            normal: {
              show: true,
              position: 'center'
            },
            emphasis:{
              show: true,
              position: 'center'
            }
          }
          
        }
      },
      {
        type: 'pie',
        key: '3',
        colSpan: 12,
        styleObject: {
          height: '300px'
        },
        data: {
          legend: true,
          radius: ['0', '70%'],
          dataUrl: "/api/pieData?id=001",
          legendConfig: {
            orient: 'vertical',
            x: 'right',
          },
        }
      }
    ]
        
      
    }
    
  }
}
</script>