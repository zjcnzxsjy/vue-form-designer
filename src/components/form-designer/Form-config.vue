<template>
  <div class="form-config-wrapper">
    <div class="config-manager-head">
      表单设置
    </div>
    <div class="config-manager-body">
      <div class="setting-field">
        <span class="field-name">标签位置</span>
        <div class="field-container" style="width: 220px;">
          <el-radio-group size="mini" v-model="data.labelPosition">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="setting-field" v-show="data.labelPosition !== 'top'">
        <span class="field-name">标签宽度</span>
        <div class="field-container" style="width: 220px;">
          <el-input-number size="mini" controls-position="right" v-model="data.labelWidth"></el-input-number>
        </div>
      </div>
      <div class="setting-field">
        <span class="field-name" title="显示校验错误信息">校验错误信息</span>
        <div class="field-container" style="width: 220px;">
          <el-checkbox v-model="data.showMessage"></el-checkbox>
        </div>
      </div>
      <div class="setting-field">
        <span class="field-name" title="第一个错误输入框获取焦点">显示错误焦点</span>
        <div class="field-container" style="width: 220px;">
          <el-checkbox v-model="data.errorFocus"></el-checkbox>
        </div>
      </div>
      <div class="setting-field">
        <span class="field-name" title="失焦触发校验">失焦触发校验</span>
        <div class="field-container" style="width: 220px;">
          <el-checkbox v-model="data.onlyBlurRequire"></el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "formConfig",
  props: {
    data: Object
  },
  methods: {
    handleLabelDisplay (val) {
      this.data.display = val;
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin ellipsis {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

@mixin placeholder {
  // Firefox
  &::-moz-placeholder {
      color: #495060;
      opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
  }
  // Internet Explorer 10+
  &:-ms-input-placeholder {
      color: #495060;
  }
  // Safari and Chrome
  &::-webkit-input-placeholder {
      color: #495060;
  }
}
.form-config-wrapper {
  height: 100%;
  .config-manager-head {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #2e343c;
    color: #bcc9d4;
    text-align: center;
    user-select: none;
    font-size: 12px;
    margin-bottom: 6px;
  }
  .config-manager-body {
    height: 100%;
    margin-top: -36px;
    padding-top: 36px;
    &/deep/ .setting-field {
      padding: 6px 10px 6px 13px;
      position: relative;
      color: #bcc9d4;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      min-height: 24px;
      .field-name {
        width: 90px;
        padding-right: 5px;
        line-height: 24px;
        font-size: 12px;
        @include ellipsis;
      }
      .field-container {
        line-height: 24px;
        .el-input input {
          border-color: #282f3a;
          background: #0e1013;
          color: #bcc9d4;
          @include placeholder;
        }
        .el-checkbox__inner {
          background: #0e1013;
          border-color:#282f3a;
          &::after {
            border-color:#0e1013;
          }
        }
        .el-checkbox__input.is-checked .el-checkbox__inner {
          background-color: #298DFF;
          &::after {
            border-color:#fff;
          }
        }
        .h-select {
          .h-select-selection {
            background: #0e1013;
            border-color: #282f3a;
          }
          .h-select-dropdown {
            background-color: #0e1013;
          }
        }
        .el-radio-group {
          .el-radio-button {
            .el-radio-button__inner {
              background: #0e1013;
              border-color: #282f3a;
              padding: 7px 8px;
            }
            .el-radio-button__orig-radio:checked+.el-radio-button__inner {
              color: #409EFF;
              box-shadow: none;
            }
          }
        }
        .el-input-number {
          .el-input-number__decrease, .el-input-number__increase {
            background-color: #0e1013;
          }
          .el-input input {
            background-color: #0e1013;
            border-color: #282f3a;
          }
          &.is-controls-right .el-input-number__increase {
            border-bottom-color: #282f3a;
          }
        }
        .el-input-number__increase {
          border-left-color: #282f3a;
        }
        .el-input-number__decrease {
          border-left-color: #282f3a;
        }
        .pic-switch-cell {
          cursor: pointer;
          .pic-switch-pic {
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            svg {
              width: 20px;
              height: 20px;
            }
          }
          .pic-active {
            border: 1px solid rgba(255,255,255,.3);
          }
        }
      }
      .field-inline {
        display: flex;
      }
    }
  }
}
</style>
