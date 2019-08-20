<template>
  <div :style="style"></div>
</template>
<script>
// require(['emmet/emmet'],function (data) {
//     window.emmet = data.emmet;
// });
import Ace from "brace"

export default {
  name: "vueAceEditor",
  props: {
    height: [String, Number],
    width: [String, Number],
    //内容
    value: {
      type: String,
      required: true
    },
    //语言模式
    lang: {
      type: String,
      default: "javascript"
    },
    //主题
    theme: {
      type: String,
      default: "textmate"
    },
    // split: {
    //   type: String,
    //   default: "None",
    //   validator(val) {
    //     return ["None", "Below", "Beside"].indexOf(val) > -1
    //   }
    // },
    keyboardHandler: {
      type: String,
      default: "ace",
      validator(val) {
        return ["ace", "vim", "emacs", "sublime"].indexOf(val) > -1
      }
    },
    //字体大小
    fontSize: {
      type: Number,
      default: 12
    },
    wrap: {
      type: [String, Number],
      default: "off"    //[off, view, printmargin, 40]
    },
    wrapBehavioursEnabled: {
      type: Boolean,
      default: true
    },
    cursorStyle: {
      type: String,
      default: "ace",
      validator(val) {
        return ["ace", "slim", "smooth", "smooth slim", "wide"].indexOf(val) > -1
      }
    },
    foldStyle: {
      type: String,
      default: "manual",
      validator(val) {
        return ["manual", "markbegin", "markbeginend"].indexOf(val) > -1
      }
    },
    //制表符的大小
    tabSize: {
      type: Number,
      default: 4
    },
    scrollPastEnd: {
      type: Number,
      default: 0   //[0, 0.5, 1]
    },
    tooltipFollowsMouse: {
      type: Boolean,
      default: true
    },
    // atomicSoftTabs: {
    //   type: Boolean,
    //   default: false
    // },
    behavioursEnabled: {
      type: Boolean,
      default: true
    },
    fullLineSelection: {
      type: Boolean,
      default: true
    },
    highlightActiveLine: {
      type: Boolean,
      default: true
    },
    showInvisibles: {
      type: Boolean,
      default: false
    },
    displayIndentGuides: {
      type: Boolean,
      default: true
    },
    hScrollBarAlwaysVisible: {
      type: Boolean,
      default: false
    },
    vScrollBarAlwaysVisible: {
      type: Boolean,
      default: false
    },
    animatedScroll: {
      type: Boolean,
      default: false
    },
    showGutter: {
      type: Boolean,
      default: true
    },
    showLineNumbers: {
      type: Boolean,
      default: true
    },
    // relativeLineNumbers: {
    //   type: Boolean,
    //   default: false
    // },
    fixedGutterWidth: {
      type: Boolean,
      default: true
    },
    showPrintMargin: {
      type: Boolean,
      default: false
    },
    //打印边距可见度
    printMargin: {
      type: Number,
      default: 80
    },
    indentedSoftWrap: {
      type: Boolean,
      default: true
    },
    highlightSelectedWord: {
      type: Boolean,
      default: true
    },
    fadeFoldWidgets: {
      type: Boolean,
      default: false
    },
    // useTextareaForIME: {
    //   type: Boolean,
    //   default: true
    // },
    mergeUndoDeltas: {
      type: [String, Boolean],
      default: true,
      validator(val) {
        return ["always", false, true].includes(val) > -1;
      }
    },
    showFoldWidgets: {
      type: Boolean,
      default: true
    },
    // elasticTabstops: {
    //   type: Boolean,
    //   default: false
    // },
    // incrementalSearch: {
    //   type: Boolean,
    //   default: false
    // },
    //只读
    readOnly: {
      type: Boolean,
      default: false
    },
    // copyWithoutSelection: {
    //   type: Boolean,
    //   default: true
    // },
    enableBlockSelect: {
      type: Boolean,
      default: true
    },
    enableMultiselect: {
      type: Boolean,
      default: true
    },
    liveAutocompletion: {
      type: Boolean,
      default: true
    },
    RTL: {
      type: Boolean,
      default: false
    },
    lineBasedRTLSwitching: {
      type: Boolean,
      default: false
    },
    showTokenInfo: {
      type: Boolean,
      default: false
    },
    textInputDebugger: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      const style = {};
      style.width = this.width || "100%";
      style.height = this.height || "100%";
      return style;
    }
  },
  watch: {
    value(val) {
      if (!this.changeFlag) {
        this.setValue(val, 1)
      }
      this.changeFlag = false;
    },
    lang(val) {
      this.setMode();
    }
  },
  data() {
    return {
      editor: null,
      changeFlag: false   //判断value的值是通过输入change改变的
    }
  },
  mounted() {
    require('brace/ext/emmet');
    const editor = this.editor = Ace.edit(this.$el);
    
    editor.$blockScrolling = Infinity;
    editor.setOption("enableEmmet", true);
    // this.setMode();
    // this.setTheme();
    this.setValue(this.value, 1);
    this.setOptions(this.options)
    
    //输入事件的监听
    editor.on('change', (e) => {
      this.changeFlag = true;
      //this.value = editor.getValue();
      this.$emit('on-text-change', editor.getValue());
      this.$emit("input", editor.getValue());
    })
    // editor.keyBinding.onTextInput(11);
    console.log(editor)
    console.log(editor.getSession())
  },
  methods: {
    setOptions() {
      let options = this.editor.getOptions();
      for (const key in options) {
        if (key === "theme") {
          this.setTheme()
        } else if (key === "mode") {
          this.setMode();
        } else if(key === "keyboardHandler") {
          this.setKeyboardHandler();
        } else if (key === "selectionStyle") {
          this.setSelectionStyle();
        } else if (key === "printMargin") {
          this.setPrintMargin();
        } else if (key === "foldStyle") {
          this.setFoldStyle()
        } else {
          this.editor.setOption(key, this.$props[key]);
        }
        // if (key !== "theme" && key !== "mode") {
        //   this.editor.setOption(key, this.$props[key]);
        // }
      }
      
    },
    setMode() {
      require(`brace/mode/${this.lang}`);
      this.editor.getSession().setMode(`ace/mode/${this.lang}`);
    },
    setTheme() {
      require(`brace/theme/${this.theme}`);
      this.editor.setTheme(`ace/theme/${this.theme}`);
    },
    setKeyboardHandler() {
      if (this.keyboardHandler === "vim" || this.keyboardHandler === "emacs") {
        require(`brace/keybinding/${this.keyboardHandler}`);
        this.editor.setKeyboardHandler(`ace/keyboard/${this.keyboardHandler}`)
      }
    },
    setSelectionStyle() {
      if (this.fullLineSelection) {
        this.editor.setSelectionStyle("text");
      } else {
        this.editor.setSelectionStyle("line")
      }
    },
    setPrintMargin() {
      if (this.showPrintMargin) {
        this.editor.setOption("printMargin", this.printMargin);
      }
    },
    setFoldStyle() {
      this.editor.getSession().setFoldStyle(this.foldStyle);
    },
    getValue() {
      return this.editor.getValue();
    },
    setValue(value, cursorPos) {
      this.editor.setValue(value, cursorPos);
    }
  }
}
</script>
