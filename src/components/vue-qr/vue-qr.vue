<template>
  <div>
    <canvas class="vue-barcode-element" v-show="valid"></canvas>
    <div v-show="!valid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
let JsBarcode = require("jsbarcode");
export default {
  name: "JsBarcode",
  props: {
    value: [String, Number],
    //选择要使用的条形码类型
    format: [String],
    //设置条之间的宽度
    width: {
      type: [String, Number],
      default: "2px"
    },
    height: {
      type: [String, Number],
      default: "36px"
    },
    //覆盖显示的文本
    text: [String, Number],
    //使文字加粗体或变斜体
    fontOptions: [String],
    //设置文本的字体
    font: [String, Number],
    //设置文本的水平对齐方式
    textAlign: [String],
    //设置文本的垂直位置
    textPosition: [String],
    //设置条形码和文本之间的间距
    textMargin: [String, Number],
    //设置文本的大小
    fontSize: {
      type: [String, Number],
      default: "14px"
    },
    //设置条和文本的颜色
    lineColor: [String],
    //设置条形码的背景
    background: {
      type: [String],
      default: "rgba(0,0,0,0)"
    },
    //设置条形码周围的空白边距
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    //是否在条形码下方显示文字
    displayValue: {
      type: [String, Boolean],
      default: true
    }
  },
  data() {
    return {
      valid: true
    };
  },
  mounted() {
    this.$watch("$props", this.render, { deep: true, immediate: true });
    this.render.call(this);
  },
  methods: {
    render() {
      let that = this;
      let settings = {
        format: this.format,
        height: this.height,
        width: this.width,
        text: this.text,
        fontOptions: this.fontOptions,
        font: this.font,
        textAlign: this.textAlign,
        textPosition: this.textPosition,
        textMargin: this.textMargin,
        fontSize: this.fontSize,
        background: this.background,
        lineColor: this.lineColor,
        margin: this.margin,
        marginTop: this.marginTop,
        marginBottom: this.marginBottom,
        marginLeft: this.marginLeft,
        marginRight: this.marginRight,
        valid: function(valid) {
          that.valid = valid;
        },
        displayValue: this.displayValue
      };

      this.removeUndefinedProps(settings);

      JsBarcode(
        this.$el.querySelector(".vue-barcode-element"),
        this.value,
        settings
      );
    },

    removeUndefinedProps(obj) {
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
          delete obj[prop];
        }
      }
    }
  }
};
</script>
