<template>
  <div class="hello">
    <el-table
      :data="tableData"
      ref="singleTable"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="{row}">
          <span class="displ">
            <vue-qr v-if="row.address1" :value="row.address1" class="qr-code-pic" background="rgba(0,0,0,0)" :valid='true' :displayValue="false" :height="'20px'" :width="'1'"></vue-qr>
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import VueQr from './vue-qr/vue-qr'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.config.value = '1111'
  },
  components: {
    VueQr
  },
  data () {
    return {
      config: {
        value: '',
        logo: require('./2.png')
      },
      tableData: [{
        myIndex: 6,
        date: '2016-05-02',
        name: '王小虎',
        address1: '1900000191'
      }, {
        myIndex: 7,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        address1: '190000019198505'
      }, {
        myIndex: 8,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        address1: '19000001919850'
      }, {
        myIndex: 9,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        address1: '190000019198505'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.qr-code-box{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .qr-code-pic{
    width: 20%;
    height: 10%;
  }
</style>
