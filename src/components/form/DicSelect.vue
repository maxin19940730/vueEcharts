<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: ['dic'],
    data() {
      return {
        value: '',
        options: []
      }
    },
    methods:{
      success(response){
        this.options= response.body
      },
      error(){
          console.log('请求失败');
          console.log(error);
      },
      getOptions(){
        const dic = this.dic || ''
        dic && this.$http.get('/api/dicData',{params:{dic}}).then(this.success,this.error);
      }
    },
    created: function () {
      this.getOptions()
    }
  }
</script>