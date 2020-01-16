<template>
  <div class="form-item-config-wrapper">
    <el-tabs>
      <el-tab-pane label="配置">
        <div class="tab-panel-body">
          <div class="setting-panel-content">
            <div class="setting-controller">
              <el-collapse>
                <el-collapse-item v-show="!showGridButtonItems.includes(data.type)" title="标签文本" name="label">
                  <div v-if="!showGridButtonItems.includes(data.type)">
                    <div class="setting-field">
                      <span class="field-name">标签名</span>
                      <div class="field-container">
                        <el-input size="mini" v-model="data.label"></el-input>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name">标签宽度</span>
                      <div class="field-container">
                        <el-input size="mini" v-model.number="data.labelWidth"></el-input>
                        <!-- <h-input-number size="mini" v-model="data.labelWidth"></h-input-number> -->
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="栅格设置" name="grid">
                  <div>
                    <div class="setting-field">
                      <span class="field-name" style="width: 95px;">占位格数</span>
                      <div class="field-container" style="width:132px;">
                        <el-input-number size="mini" :min="1" :max="24" controls-position="right" v-model="data.span.span"></el-input-number>
                      </div>
                    </div>
                    <!-- <div class="setting-field">
                      <span class="field-name" style="width: 95px;">小于768px</span>
                      <div class="field-container" style="width:132px;">
                        <h-input-number size="mini" :min="1" :max="24" v-model="data.span.xs"></h-input-number>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name" style="width: 95px;">大于等于768px</span>
                      <div class="field-container" style="width:132px;">
                        <h-input-number size="mini" :min="1" :max="24" v-model="data.span.sm"></h-input-number>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name" style="width: 95px;">大于等于992px</span>
                      <div class="field-container" style="width:132px;">
                        <h-input-number size="mini" :min="1" :max="24" v-model="data.span.md"></h-input-number>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name" style="width: 95px;">大于等于1200px</span>
                      <div class="field-container" style="width:132px;">
                        <h-input-number size="mini" :min="1" :max="24" v-model="data.span.lg"></h-input-number>
                      </div>
                    </div> -->
                  </div>
                </el-collapse-item>
                <el-collapse-item title="基础属性" name="options">
                  <div>
                    <template v-for="key in Object.keys(data.options)">
                      <div class="setting-field" :key="key">
                        <span class="field-name" @mouseenter="handleLabelMouseEnter($event, data.options[key].label)">{{data.options[key].label}}</span>
                        <div class="field-container" 
                          :style="{
                            width: '220px'
                          }">
                          <el-input v-if="data.options[key].type === 'input'" size="mini" v-model="data.options[key].value"></el-input>
                          <el-input-number 
                            v-else-if="data.options[key].type === 'input-number'" 
                            size="mini" 
                            v-model="data.options[key].value" 
                            controls-position="right"
                            v-bind="data.options[key].options">
                          </el-input-number>
                          <el-checkbox v-else-if="data.options[key].type === 'checkbox'" size="mini" v-model="data.options[key].value"></el-checkbox>
                          <el-select 
                            v-else-if="data.options[key].type === 'select'" 
                            size="mini" 
                            v-model="data.options[key].value"
                            v-bind="data.options[key].options"
                            popper-class="select-down">
                            <el-option v-for="option in data.options[key].children" :key="option.value" :value="option.value">
                              {{option.label}}
                            </el-option>
                          </el-select>
                          <el-time-picker 
                            v-else-if="data.options[key].type === 'time-picker'" 
                            size="mini" 
                            v-model="data.options[key].value" 
                            value-format="HH:mm:ss"
                            v-bind="data.options[key].options"
                            style="width: 220px;">
                          </el-time-picker>
                          <el-time-select 
                            v-else-if="data.options[key].type === 'time-select'" 
                            size="mini" 
                            v-model="data.options[key].value" 
                            value-format="HH:mm:ss"
                            v-bind="data.options[key].options"
                            style="width: 220px;">
                          </el-time-select>
                        </div>
                      </div>
                    </template>
                  </div>
                </el-collapse-item>
                <el-collapse-item v-show="!showGridButtonItems.includes(data.type)" title="校验规则" name="rules">
                  <div v-if="!showGridButtonItems.includes(data.type)">
                    <div class="setting-field">
                      <span class="field-name">必填</span>
                      <div class="field-container" style="width: 220px;">
                        <el-checkbox v-model="data.required"></el-checkbox>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name">验证规则</span>
                      <div class="field-container">
                        <el-select 
                          multiple 
                          size="mini" 
                          style="width: 220px;" 
                          placeholder="" 
                          v-model="data.validRules" 
                          popper-class="select-down">
                          <el-option 
                            v-for="rule in inputValidRules" 
                            :key="rule.value" 
                            :value="rule.value"
                            :label="rule.label">
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <!-- <div class="border-horizontal-divider"></div> -->
                    <div class="setting-field">
                      <span class="field-name" title="自定义规则">自定义规则</span>
                      <div class="field-container">
                        <el-input size="mini" placeholder="填写正则表达式" v-model="data.rules.test" :disabled="data.validRules.length > 0" style="width: 220px;"></el-input>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name">错误信息</span>
                      <div class="field-container">
                        <el-input size="mini" placeholder="填写错误信息" v-model="data.rules.message" :disabled="data.validRules.length > 0" style="width: 220px;"></el-input>
                      </div>
                    </div>
                    <div class="setting-field">
                      <span class="field-name">触发方式</span>
                      <div class="field-container">
                        <el-select size="mini" 
                          style="width: 220px;" 
                          placeholder="" 
                          v-model="data.rules.trigger" 
                          :disabled="data.validRules.length > 0"
                          popper-class="select-down">
                          <el-option value="change">
                            change
                          </el-option>
                          <el-option value="blur">
                            blur
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据" lazy>
        <div class="tab-panel-body">
          <div v-if="!showGridButtonItems.includes(data.type)" class="setting-panel-content">
            <div class="setting-controller">
              <div class="setting-field"
                style="border-bottom: 1px solid #2b2f3a;">
                <span class="field-name data-label-name">字段</span>
                <div class="field-container" style="width:220px;">
                  <el-input size="mini" v-model="data.prop"></el-input>
                </div>
              </div>
              <!-- <div class="setting-field">
                <span class="field-name data-label-name">默认值</span>
                <div class="field-container" style="width:220px;">
                  <el-input size="mini" v-model="data.value"></el-input>
                </div>
              </div>
              <div class="setting-field" 
                style="border-bottom: 1px solid #2b2f3a;">
                <span class="field-name data-label-name">值类型</span>
                <div class="field-container" style="width:220px;">
                  <el-select 
                    size="mini" 
                    v-model="data.valueType.value"
                    popper-class="select-down">
                    <el-option 
                      v-for="option in data.valueType.children" 
                      :key="option.value" 
                      :value="option.value"
                      :label="option.label">
                    </el-option>
                  </el-select>
                </div>
              </div> -->
              <div v-if="showDataSource.includes(data.type)">
                <div class="setting-field">
                  <span class="field-name data-label-name">数据源类型</span>
                  <div class="field-container" style="width:220px;">
                    <el-select 
                      size="mini" 
                      v-model="dataSourceType" 
                      :clearable="false"
                      popper-class="select-down">
                      <el-option 
                        v-for="option in dataSourceOptions" 
                        :key="option.value" 
                        :value="option.value"
                        :label="option.label">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="setting-field data-editor">
                  <transition name="fade">
                    <p v-show="dataSourceType === 'api'" class="url-info-text">将回调参数配置到url中, 例: http://api.test?value=:value</p>
                  </transition>
                  <div class="transfer-key" v-show="dataSourceType === 'api'">
                    <div class="setting-field">
                      <span class="field-name data-label-name">文本数值映射</span>
                      <div class="field-container" style="width:220px;">
                        <el-checkbox size="mini" v-model="transferKey.on"></el-checkbox>
                      </div>
                    </div>
                    <transition-group name="fade">
                      <div class="setting-field" v-if="transferKey.on" key="label" style="padding-right: 20px">
                        <span class="field-name data-label-name">文本</span>
                        <div class="field-container" style="width:220px;">
                          <el-input size="mini" v-model="transferKey.label"></el-input>
                        </div>
                      </div>
                      <div class="setting-field" v-if="transferKey.on" key="value" style="padding-right: 20px">
                        <span class="field-name data-label-name">数值</span>
                        <div class="field-container" style="width:220px;">
                          <el-input size="mini" v-model="transferKey.value"></el-input>
                        </div>
                      </div>
                    </transition-group>
                  </div>
                  <div class="editor-wrapper">
                    <!-- <vue-ace-editor
                      key="static"
                      v-if="dataSourceType === 'static'" 
                      v-model="staticDataSource" 
                      lang="json" 
                      theme="idle_fingers"
                      :tabSize="2">
                    </vue-ace-editor>
                    <vue-ace-editor
                      key="api"
                      v-else-if="dataSourceType === 'api'" 
                      v-model="apiDataSource" 
                      lang="text" 
                      theme="idle_fingers"
                      :tabSize="2">
                    </vue-ace-editor> -->
                    <MonacoEditor
                      key="static"
                      v-if="dataSourceType === 'static'"
                      language="json" 
                      theme="vs-dark"
                      v-model="staticDataSource">
                    </MonacoEditor>
                    <MonacoEditor
                      key="api"
                      v-if="dataSourceType === 'api'"
                      language="plainText" 
                      theme="vs-dark"
                      v-model="apiDataSource">
                    </MonacoEditor>
                    <div class="editor-action">
                      <span title="复制" @click="handleClipboard">
                        <svg-icon icon-class="copy" class-name="editor-icon"></svg-icon>
                      </span>
                      <span
                        :title="fullScreen? '退出全屏' : '全屏模式下编辑或查看'"
                        @click="handleFullScreenClick">
                        <svg-icon 
                          icon-class="full-screen" 
                          class-name="editor-icon">
                        </svg-icon>
                      </span>
                    </div>
                  </div>
                  <p class="info-tips">刷新数据才会记录数据源的数据!</p>
                  <div class="btn-group">
                    <!-- <h-button type="primary">查看数据响应结果</h-button> -->
                    <el-button type="primary" @click="handleDataRefresh">刷新数据</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="text-align: center;">
            无需配置数据
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      width="900px"
      title="全屏模式"
      :close-on-click-modal="false"
      :modal="true"
      :visible.sync="fullScreen"
      :append-to-body="true"
      custom-class="dialog-cls">
      <!-- <vue-ace-editor
        ref="fullEditor" 
        v-model="dataSource" 
        :lang="dataSourceType === 'static'? 'json' : 'text'" 
        theme="idle_fingers"
        :tabSize="2"
        style="height:350px;">
      </vue-ace-editor> -->
      <MonacoEditor
        ref="fullEditor"
        v-if="fullScreen"
        height="300"
        :language="dataSourceType === 'static'? 'json' : 'plainText'" 
        theme="vs-dark"
        v-model="dataSource">
      </MonacoEditor>
    </el-dialog>
  </div>
</template>
<script>
// import vueAceEditor from "@/components/vue-ace-editor/Vue-ace-editor"
import clipboard from '@/utils/Clipboard' // use clipboard by v-directive
import svgIcon from "@/components/svg-icon/SvgIcon"
import MonacoEditor from "@/components/vue-monaco-editor"

export default {
  name: "formItemConfig",
  components: {
    // vueAceEditor,
    svgIcon,
    MonacoEditor
  },
  props: {
    data: {
      type: Object,
      default: {}
    },
    remoteMethod: Function
  },
  data() {
    return {
      inputValidRules: Object.freeze([
        {
          label: "整数",
          value: "intege"
        },
        {
          label: "正整数",
          value: "intege1"
        },
        {
          label: "负整数",
          value: "intege2"
        },
        {
          label: "数字",
          value: "num"
        },
        {
          label: "非负整数",
          value: "num1"
        },
        {
          label: "非正整数",
          value: "num2"
        },
        {
          label: "浮点数",
          value: "decmal"
        },
        {
          label: "正浮点数",
          value: "decmal1"
        },
        {
          label: "负浮点数",
          value: "decmal2"
        },
        {
          label: "非负浮点数",
          value: "decmal4"
        },
        {
          label: "非正浮点数",
          value: "decmal5"
        },
        {
          label: "邮件",
          value: "email"
        },
        {
          label: "url",
          value: "url"
        },
        {
          label: "仅中文",
          value: "chinese"
        },
        {
          label: "仅ACSII字符",
          value: "ascii"
        },
        {
          label: "邮编",
          value: "zipcode"
        },
        {
          label: "手机",
          value: "mobile"
        },
        {
          label: "ip地址",
          value: "ip4"
        },
        {
          label: "图片",
          value: "picture"
        },
        {
          label: "压缩文件",
          value: "rar"
        },
        {
          label: "日期",
          value: "date"
        },
        {
          label: "QQ号码",
          value: "qq"
        },
        {
          label: "电话号码",
          value: "tel"
        },
        {
          label: "注册用户",
          value: "username"
        },
        {
          label: "字母",
          value: "letter"
        },
        {
          label: "大写字母",
          value: "letter_u"
        },
        {
          label: "小写字母",
          value: "letter_l"
        }
      ]),
      dataSourceOptions: Object.freeze([
        {
          label: "静态数据",
          value: "static"
        },
        {
          label: "API",
          value: "api"
        },
      ]),
      showGridButtonItems: Object.freeze(["PISearchButton", "PIResetButton", "PICustomButton"]),
      showDataSource: Object.freeze(["PIAutocomplete", "PISelect", "PIRadio", "PICheckbox", "PICascader"]),
      staticDataSource: "",
      apiDataSource: "",
      dataSourceType: this.data.dataSourceType,
      dataSource: "",
      fullScreen: false,
      refreshFlag: false,   //判断数据的改变是否是因为刷新数据
      transferKey: {
        on: false,
        label: "",
        value: ""
      }
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        console.log(val)
        this.dataSourceType = val.dataSourceType;
        if (this.refreshFlag) {
          if (val.dataSourceType === "static") {
            this.staticDataSource = val.dataSource;
          } else if (val.dataSourceType === "api") {
            this.apiDataSource = val.dataSource;
          } 
        } else {
          if (val.dataSourceType === "static") {
            this.staticDataSource = val.dataSource;
            this.apiDataSource = "";
          } else if (val.dataSourceType === "api") {
            this.staticDataSource = "";
            this.apiDataSource = val.dataSource;
          } 
        }
        this.refreshFlag = false;               
      }
    },
    dataSource(val) {
      if (this.dataSourceType === "static" && this.staticDataSource !== val) {
        this.staticDataSource = val;
      } else if (this.dataSourceType === "api" && this.apiDataSource !== val) {
        this.apiDataSource = val;
      }
    }
  },
  methods: {
    handleLabelMouseEnter(event, label) {
      const target = event.target;
      if (label === '' || target.getAttribute('title')) {
        return;
      }
      const range = document.createRange();
      range.setStart(target, 0);
      range.setEnd(target, target.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      if (rangeWidth > target.offsetWidth || target.scrollWidth > target.offsetWidth) {
        target.setAttribute("title", label);
      }
    },
    handleFullScreenClick() {
      this.fullScreen = true;
      if (this.dataSourceType === "static") {
        this.dataSource = this.staticDataSource;
      } else if (this.dataSourceType === "api") {
        this.dataSource = this.apiDataSource;
      }
    },
    async handleDataRefresh() {
      let data;
      this.refreshFlag = true;
      this.data.dataSourceType = this.dataSourceType;
      if (this.dataSourceType === "static") {
        try {
          this.data.dataSource = this.staticDataSource;
          data = JSON.parse(this.staticDataSource);
        } catch(err) {
          this.$message.error({
            content: '数据格式错误，请重新填写！'
          });
        }
      } else if (this.dataSourceType === "api"){
        this.data.dataSource = this.apiDataSource;
        if (typeof this.remoteMethod === "function") {
          data = await this.remoteMethod({url: this.apiDataSource, transferKey: this.transferKey})
        }
        // try {
        //   this.$emit("getRemoteDataSource", this.apiDataSource, this.transferKey);
        //   data = (await this.$http.get(this.apiDataSource)).data.result_data;
        //   console.log(data)
        //   if (this.transferKey.on) {
        //     data.forEach(item => {
        //       item.label = item[this.transferKey.label];
        //       item.value = item[this.transferKey.value];
        //     })
        //   }
        // } catch(err) {
        //   console.log(err)
        //   this.$message.error({
        //     content: '请求失败'
        //   });
        // }

      }
      this.data.children = data;
    },
    handleMsgboxClose() {
      this.editorDataSource = this.$refs.fullEditor.getValue();
    },
    handleClipboard() {
      const text = this.dataSourceType === "static"? this.staticDataSource : this.apiDataSource;
      clipboard(text, this.$el);
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
.form-item-config-wrapper {
  height: 100%;
  &/deep/ .el-tabs {
    height: 100%;
    .el-tabs__header {
      border-bottom: 1px solid #1c1f25;
      margin: 0;
      .el-tabs__nav-wrap {
        width: 100%;
        .el-tabs__nav {
          width: 100%;
          .el-tabs__item {
            text-align: center;
            width: 50%;
            color: #bcc9d4;
            &:hover, &.is-active {
              color: #409EFF;
            }
          }
        }
      }
    }
    .el-tabs__content {
      height: calc(100% - 37px);
      .el-tab-pane {
        height: 100%;
        width: 100%;
      }
      .tab-panel-body {
        width: 100%;
        height: 100%;
        .setting-panel-content {
          width: 100%;
          height: 100%;
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          .setting-controller {
            font-style: normal;
            width: 100%;
            user-select: none;
            font-size: 12px;
            color: #bcc9d4;
            box-sizing: border-box;
            &/deep/ .el-collapse {
              border: none;
              //border-bottom-color:#282f3a;
              .el-collapse-item  {
                .el-collapse-item__wrap {
                  border-bottom-color: #282f3a;
                }
                .el-collapse-item__header {
                  color: #666;
                  font-weight: 700;
                  font-size: 12px;
                  padding-left: 8px;
                  background: #1b1f25;
                  border-bottom-color: #282f3a;
                  i {
                    font-size: 10px;
                  }
                }
              }
            }
            &/deep/ .el-collapse-item__content {
              border-radius: 0;
              background: #15171c;
              border-top: 1px solid #282f3a;
            }
            &/deep/ .setting-field {
              padding: 6px 10px 6px 13px;
              font-size: 12px;
              position: relative;
              color: #bcc9d4;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              min-height: 24px;
              .field-name {
                width: 63px;
                padding-right: 5px;
                line-height: 24px;
                @include ellipsis;
              }
              .data-label-name {
                width: 90px;
              }
              .field-container {
                line-height: 24px;
                .el-input input{
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
                .el-select .el-tag.el-tag--info {
                  background-color: #0e1013;
                  border-color: #282f3a;
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
                .el-input__inner {
                  background-color: #0e1013;
                  border-color: #282f3a;
                  & input {
                    background-color: #0e1013;
                  }
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
            &/deep/ .data-editor {
              flex-direction: column;
              width: 300px;
              .editor-wrapper { 
                height: 260px;
                position: relative;
                .editor-action {
                  position: absolute;
                  right: 10px;
                  bottom: 8px;
                  text-align: center;
                  width: 40px;
                  z-index: 10;
                  span + span {
                    margin-left: 5px;
                  }
                  .editor-icon {
                    cursor: pointer;
                    width: 12px;
                    height: 12px;
                  }
                }
              }
              .url-info-text {
                margin-bottom: 10px;
              }
              .info-tips {
                margin-top: 5px;
              }
              .btn-group {
                margin-top: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .el-button {
                  width: 190px;
                  background-color: transparent;
                }
                .el-button + .el-button {
                  margin-top: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
  ::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #434b55;
    border: 1px solid #434b55;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #434b55;
  }

  ::-webkit-scrollbar-track {
    background: #1c222b;
  }
}
.el-select-dropdown {
  background: #0e1013;
  border-color: #282f3a;
  .el-select-dropdown__item {
    &:hover, &.hover {
      background-color: #1b1f25;
    }
  }
  &.is-multiple .el-select-dropdown__item.selected {
    background-color: #1b1f25;
    &.hover {
      background-color: #1b1f25;
    }
  }
}

.border-horizontal-divider {
  display: block;
  width: 100%;
  min-width: 100%;
  height: 1px;
  margin: 8px 0;
  background: #282f3a;
}
</style>
<style lang="scss">
body .select-down {
  background-color: #0e1013;
  border-color: #282f3a;
  .popper__arrow::after {
    border-bottom-color: #0e1013 !important;
    border-top-color: #0e1013 !important;
  }
}
body .dialog-cls {
  background: #222425;
  .el-dialog__header > .el-dialog__title {
    color: #2483FF;
  }
}
</style>