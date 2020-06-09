<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="success">全部处理</el-button>
    </div>
    <el-table
      :data="clallStatisticsData"
      tooltip-effect="dark"
      :span-method="arraySpanMethod"
      @selection-change="handleSelectionChange"
      :row-class-name="rowclassname"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        prop="doNo"
        label="发车单号"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="alarmLevel"
        label="告警级别"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="area"
        label="区域"
        align="center"
      ></el-table-column>
      <el-table-column label="详情" align="center">
        <template slot-scope="{row}">
          <span class="displ">
            <vue-qr v-if="row.address1" :logoSrc="config.logo" :text="row.address1" class="qr-code-pic"  :correctLevel="3" :margin="0"  :size="95" :dotScale="1"></vue-qr>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="equip"
        label="设备"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="pointName"
        label="测点"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="limit"
        label="限值"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="alarmValue"
        label="报警值"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="alarmTime"
        label="报警时间"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
/* eslint-disable */
import VueQr from '../components/packages/vue-qr';
export default {
  components: {
    VueQr
  },
  data() {
    return {
      // 初始数据变量
      // 寻找不到热爱..
      config: {
        value: '',
        logo: require('../components/2.png')
      },
      allStatisticsData: [
        {
          doNo: '11111111111',
          class: 'one',
          confirm: true,
          alarmLevel: "紧急告警",
          area: "北京市昌平区",
          equip: "昌平气象采集",
          pointId: 1,
          pointName: "温度",
          limit: "35",
          alarmValue: "41",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
           doNo: '11111111111',
          class: 'two',
          confirm: false,
          alarmLevel: "一般告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 2,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
          doNo: '222222222222',
          class: 'three',
          confirm: false,
          alarmLevel: "紧急告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 3,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
          doNo: '3333333333333',
          class: 'three',
          confirm: false,
          alarmLevel: "紧急告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 3,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
          doNo: '222222222222',
          class: 'three',
          confirm: false,
          alarmLevel: "紧急告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 3,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
          doNo: '3333333333333',
          class: 'three',
          confirm: false,
          alarmLevel: "紧急告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 3,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
        {
          doNo: '3333333333333',
          class: 'three',
          confirm: false,
          alarmLevel: "紧急告警",
          area: "北京市朝阳区",
          equip: "昌平光感采集",
          pointId: 3,
          pointName: "紫外线",
          limit: "60",
          alarmValue: "61",
          alarmTime: "2019-6-1 12:00:00",
          address1: 'https://segmentfault.com/a/1190000019198505?utm_source=tag-newest'
        },
      ],
      multipleSelection: [],
      rowLine: [],
      clallStatisticsData: []
    };
  },
  mounted() {
    this.searchChange()
  },
  methods: {
    handleSelectionChange(val) {
      // 复选框选中操作
      console.log(val);
      // 
    },
    rowclassname(row) {
      // console.log(row); 
      if (row.row.class === 'one') {
        return "warning-row";
      } else if (row.row.class === 'two') {
        return "success-row";
      } else if (row.row.class === 'three') {
        return "red-row";
      }
    },
    // 表格合并
    searchChange () {
      var allSiteName = []
      var tableData = []
      // 总的数据
      this.allStatisticsData.map(item => {
        var doNoIndex = allSiteName.indexOf(item.doNo)
        if (doNoIndex > -1) {
          tableData[doNoIndex].push(item)
        } else {
          allSiteName.push(item.doNo)
          var arr = [item]
          tableData[tableData.length] = arr
        }
      })
      this.clallStatisticsData = []
      // 获取发车单号合并 数组 
      tableData.map((item, index) => {
        let arr = []
        if (index > 0) {
          arr = [
            this.rowLine[index - 1][0] + this.rowLine[index - 1][1],
            item.length
          ]
        } else {
          arr = [0, item.length]
        }
        this.rowLine[this.rowLine.length] = arr
      })
      
      // 车型的合并
      console.log(tableData)
      tableData.map(item => {
        item.map(item1 => {
          this.clallStatisticsData.push(item1)
        })
      })
      console.log(this.rowLine)
    },
    // 合并列 的 函数
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      const arr = this.rowLine.filter(item => item[1] !== 1)
      let rowMerge = [1, 1]
      arr.some(item => {
        if (rowIndex === item[0]) {
          if (columnIndex === 1) {
            rowMerge = [item[1], 1]
          }
        } else if (columnIndex === 1 && rowIndex > item[0] && rowIndex < item[0] + item[1]) {
          rowMerge = [0, 0]
        }
      })
      return rowMerge
    }
  }
};
</script>
<style lang="less">
  .el-table .warning-row {
    color:#01eb90;
  }
  .el-table .success-row {
    color:#eae909;
  }
  .el-table .red-row {
    color:#ba071d;
  }
  .qr-code-box{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .qr-code-pic{
    width: 100%;
    height: 100%;
  }
  .displ {
    display: inline-block;
    height: 4vw;
    width: 6vw;
  }
</style>
