<template>
  <div class="loading-warehouse-two">
    <div class="loading-warehouse-content">
      <span class="border row1" />
      <span class="border row2" />
      <span class="border col1" />
      <span class="border col2" />
      <div class="data-content">
        <!-- 直接 区分---计算  主要 相同的分到一个数组中 这样就可以区分开 -->
        <div class="table-details">
          <el-table
            :data="clallStatisticsData"
            style="width: 100%"
            border
            :span-method="arraySpanMethod"
          >
            <el-table-column
              prop="doNo"
              label="发车单号"
              show-overflow-tooltip
              align="center"
            />
            <el-table-column
              prop="name"
              label="工单号"
              show-overflow-tooltip
              align="center"
            />
            <el-table-column
              prop="province"
              label="机型"
              show-overflow-tooltip
              align="center"
            />
            <el-table-column
              prop="city"
              label="在库数量"
              show-overflow-tooltip
              align="center"
            />
            <el-table-column
              prop="address"
              label="合计"
              show-overflow-tooltip
              align="center"
            />
            <el-table-column
              prop="storage"
              label="所在库位"
              show-overflow-tooltip
              align="center"
            />
          </el-table>
        </div>
        <!-- 封装好的插件 这个合并如果 是双层合并 没有这个功能(如 先根据发车单号进行合并 , 再根据发车单号里面的  机型合并 )-->
        <!-- <div class="table-plug-in">
          <lb-Table
            border
            :column="lbTableData.column"
            :data="lbTableData.data"
            :merge="['shipNo', 'skuName', 'totalQty']"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import { getLoadingWarehouseData } from '../../api/index';
// import json from './2.json'
// import lbTable from './lb-table/lb-table'

export default {
  data () {
    return {
      lbTableData: {
        column: [
          {
            prop: 'shipNo',
            label: '发车单号'
          },
          {
            prop: 'lotAtt06',
            label: '工单号'
          },
          {
            prop: 'skuName',
            label: '机型'
          },
          {
            prop: 'qty',
            label: '在库数量'
          },
          {
            prop: 'totalQty',
            label: '合计'
          },
          {
            prop: 'locCode',
            label: '所在库位'
          }
        ],
        data: [
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz11',
            qty: 12,
            locCode: 'A06',
            totalQty: 711,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678905'
          },
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz11',
            qty: 12,
            locCode: 'A06',
            totalQty: 711,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678905'
          },
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz11',
            qty: 12,
            locCode: 'A06',
            totalQty: 71,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678906'
          },
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz111',
            qty: 12,
            locCode: 'A06',
            totalQty: 71,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678907'
          },
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz111',
            qty: 12,
            locCode: 'A06',
            totalQty: 70,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678906'
          },
          {
            lotAtt06: 'QZ总部1316020800303',
            rownum: 'f9804daa-637a-497c-b015-936e27906e26',
            skuName: 'MB55-V3006G 波轮全自动洗衣机 灰色 门盖透明烟灰220V,1Ph 50Hz222',
            qty: 12,
            locCode: 'A06',
            totalQty: 72,
            rowState: null,
            skuCode: '0000255609',
            shipNo: 'T1911132678906'
          }
        ]
      },
      timeArr: [],
      refreshTime: 5 * 60 * 1000,
      cutDateTime: null,
      // 库位
      allStatisticsData: [
        {
          doNo: '11111111111111',
          storage: 'A013',
          name: 'QAOZ-12345677',
          commodity: '201710041126330',
          province: '请求请求群群群群',
          city: '100',
          address: '1'
        },
        {
          doNo: '11111111111111',
          storage: 'A013',
          name: 'QAOZ-1234567811',
          commodity: '201710041126330',
          province: '请求请求群群群群',
          city: '100',
          address: '1'
        },
        {
          doNo: '11111111111111',
          storage: 'A011',
          name: 'QAOZ-12345677',
          commodity: '201710041126330',
          province: '请求请求群群群1111群',
          city: '100',
          address: '84'
        },
        {
          doNo: '11111111111111',
          storage: 'A013',
          name: 'QAOZ-1234567811',
          commodity: '201710041126330',
          province: '请求请求群群群群',
          city: '100',
          address: '11'
        },
        {
          doNo: '22222222222',
          storage: 'A01',
          name: 'QAOZ-123456789',
          commodity: '201710041126330',
          province: '请求请求群群群群',
          city: '1100',
          address: '11'
        },
        {
          doNo: '22222222222333',
          storage: 'A02',
          name: 'QAOZ-123456789',
          commodity: '201710041126330',
          province: '请求请求群群群群111',
          city: '11200',
          address: '12'
        },
        {
          doNo: '22222222222',
          storage: 'A02',
          name: 'QAOZ-123456789',
          commodity: '201710041126330',
          province: '请求请求群群群群111',
          city: '11200',
          address: '12'
        }
      ],
      // 展示的数据
      clallStatisticsData: [],
      // 发车单号
      startSingle: '',
      rowLine: [],
      rowLinetwo: [],
      rowLinethree: []
    }
  },
  mounted () {
    this.refreshData('cutDate', 1000, 'cutDateTime')
    this.searchChange()
  },
  methods: {
    // 返回 时间格式 yyyy-MM-dd hh:mm:ss
    parseTime (time, cFormat) {
      if (arguments.length === 0) {
        return null
      }
      const date = new Date(time)
      let fmt = cFormat || 'yyyy-MM-dd hh:mm:ss'
      const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3) // 季度
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      Object.keys(o).forEach(k => {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      })
      return fmt
    },
    getNowFormatDate (data, pattern) {
      // 格式化时间和拿到当前星期几
      const dataTime = data || new Date()
      const time = this.parseTime(dataTime)
      return [
        time,
        '星期' + '日一二三四五六'.charAt(new Date().getDay())
      ]
    },
    cutDate () {
      const dataArr = this.getNowFormatDate('', 'YYYY-MM-DD HH:mm:ss')
      const [data, timer] = dataArr[0].split(' ')
      const week = dataArr[1]
      this.timeArr = [data, week, timer]
    },
    refreshData (fn, timeInterval, timeName) {
      this[fn]()
      this[timeName] = window.setTimeout(() => {
        this.refreshData(fn, timeInterval, timeName)
      }, timeInterval)
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
      console.log(this.rowLine)
      /*   tableData
          (2) [Array(4), Array(3)]
          0: (4) [{…}, {…}, {…}, {…}]
          1: (3) [{…}, {…}, {…}]
          length: 2
          循环遍历 tableData 里面的值
          item 每次都执行一次
      */
      var AllprovinceData = []
      tableData.map((item, index) => {
        const provinceName = []
        const provinceData = []
        item.map(xh => {
          var provinceIndex = provinceName.indexOf(xh.province)
          if (provinceIndex > -1) {
            provinceData[provinceIndex].push(xh)
          } else {
            provinceName.push(xh.province)
            var arr1 = [xh]
            provinceData[provinceData.length] = arr1
          }
        })
        console.log('provinceData', provinceData)
        // 将数据合并之后再去算 需要合并的数组
        provinceData.map(item => {
          AllprovinceData.push(item)
        })
      })
      AllprovinceData.map((itemtwo, value) => {
        let arr = []
        if (value > 0) {
          arr = [
            this.rowLinetwo[value - 1][0] + this.rowLinetwo[value - 1][1],
            itemtwo.length
          ]
        } else {
          arr = [0, itemtwo.length]
        }
        this.rowLinetwo[this.rowLinetwo.length] = arr
      })
      console.log(AllprovinceData)
      // 合计的合并
      var AlladdressData = []
      tableData.map((item, index) => {
        const addressName = []
        const addressData = []
        item.map(xh => {
          var addressIndex = addressName.indexOf(xh.address)
          if (addressIndex > -1) {
            addressData[addressIndex].push(xh)
          } else {
            addressName.push(xh.address)
            var arr1 = [xh]
            addressData[addressData.length] = arr1
          }
        })
        addressData.map(item => {
          AlladdressData.push(item)
        })
      })
      AlladdressData.map((itemthree, value) => {
        this.clallStatisticsData = [...this.clallStatisticsData, ...itemthree]
        let arr = []
        if (value > 0) {
          arr = [
            this.rowLinethree[value - 1][0] + this.rowLinethree[value - 1][1],
            itemthree.length
          ]
        } else {
          arr = [0, itemthree.length]
        }
        this.rowLinethree[this.rowLinethree.length] = arr
      })
    },
    // 合并列 的 函数
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      const arr = this.rowLine.filter(item => item[1] !== 1)
      const arr1 = this.rowLinetwo.filter(item => item[1] !== 1)
      const arr2 = this.rowLinethree.filter(item => item[1] !== 1)
      let rowMerge = [1, 1]
      arr.some(item => {
        if (rowIndex === item[0]) {
          if (columnIndex === 0) {
            rowMerge = [item[1], 1]
          }
        } else if (columnIndex === 0 && rowIndex > item[0] && rowIndex < item[0] + item[1]) {
          rowMerge = [0, 0]
        }
      })
      arr1.some(item => {
        if (rowIndex === item[0]) {
          if (columnIndex === 2) {
            rowMerge = [item[1], 1]
          }
        } else if (columnIndex === 2 && rowIndex > item[0] && rowIndex < item[0] + item[1]) {
          rowMerge = [0, 0]
        }
      })
      arr2.some(item => {
        if (rowIndex === item[0]) {
          if (columnIndex === 4) {
            rowMerge = [item[1], 1]
          }
        } else if (columnIndex === 4 && rowIndex > item[0] && rowIndex < item[0] + item[1]) {
          rowMerge = [0, 0]
        }
      })
      return rowMerge
    }
  }
}
</script>
<style lang='less'>
@import "./style/style.less";
</style>
