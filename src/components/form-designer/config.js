export const basicComponents = {
	"form": {
		"type": "PIForm",
		"labelPosition": "right",
		"labelWidth": 100,
		"labelSuffix": "",
		"hideRequiredAsterisk": false,
		"showMessage": true,
		"statusIcon": false,
		"validateOnRuleChange": true,
		"size": "",
		"disabled": false
	},
	"text": {
		"type": "PIText",
		"label": "单行文本",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"show-word-limit": {
				"label": "显示输入字数统计",
				"value": false,
				"type": "checkbox"
			},
			"placeholder": {
				"label": "占位文本",
				"value": "请输入",
				"type": "input"
			},
			"disabled": {
				"label": "禁用状态",
				"value": false,
				"type": "checkbox"
			},
			"readonly": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"maxlength": {
				"label": "最大输入长度",
				"value": Infinity,
				"type": "input-number"
			},
			"minlength": {
				"label": "最小输入长度",
				"value": 0,
				"type": "input-number"
			},
			"prefix-icon": {
				"label": "输入框头部图标",
				"value": "",
				"type": "input"
			},
			"suffix-icon": {
				"label": "输入框尾部图标",
				"value": "",
				"type": "input"
			},
			"autofocus": {
				"label": "自动获取焦点",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "清除图标按钮",
				"value": true,
				"type": "checkbox"
			},
			"show-password": {
				"label": "显示切换密码图标",
				"value": false,
				"type": "checkbox"
			},
			"validate-event": {
				"label": "输入时是否触发表单的校验",
				"value": true,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"autocomplete": {
		"type": "PIAutocomplete",
		"label": "带建议",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"placeholder": {
				"label": "占位文本",
				"value": "请输入",
				"type": "input"
			},
			"disabled": {
				"label": "禁用状态",
				"value": false,
				"type": "checkbox"
			},
			"debounce": {
				"label": "获取输入建议的去抖延时",
				"value": 300,
				"type": "input-number"
			},
			"placement": {
				"label": "菜单弹出位置",
				"value": "bottom-start",
				"type": "select",
				"children": [
					{
						"label": "top",
						"value": "top"
					},
					{
						"label": "top-start",
						"value": "top-start"
					},
					{
						"label": "top-end",
						"value": "top-end"
					},
					{
						"label": "bottom",
						"value": "bottom"
					},
					{
						"label": "bottom-start",
						"value": "bottom-start"
					},
					{
						"label": "bottom-end",
						"value": "bottom-end"
					}
				]
			},
			"trigger-on-focus": {
				"label": "输入框 focus 时显示建议列表",
				"value": true,
				"type": "checkbox"
			},
			"prefix-icon": {
				"label": "输入框头部图标",
				"value": "",
				"type": "input"
			},
			"suffix-icon": {
				"label": "输入框尾部图标",
				"value": "",
				"type": "input"
			},
			"hide-loading": {
				"label": "隐藏远程加载时的加载图标",
				"value": false,
				"type": "checkbox"
			},
			"popper-append-to-body": {
				"label": "下拉列表插入至 body 元素",
				"value": true,
				"type": "checkbox"
			},
			"highlight-first-item": {
				"label": "默认突出显示远程搜索建议中的第一项",
				"value": false,
				"type": "checkbox"
			}
		},
		"dataSourceType": "static",
		"dataSource": JSON.stringify([
			{
				
			}
		])
	},
	"textarea": {
		"type": "PITextarea",
		"label": "多行文本",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"show-word-limit": {
				"label": "显示输入字数统计",
				"value": false,
				"type": "checkbox"
			},
			"placeholder": {
				"label": "占位文本",
				"value": "请输入",
				"type": "input"
			},
			"disabled": {
				"label": "禁用状态",
				"value": false,
				"type": "checkbox"
			},
			"readonly": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"maxlength": {
				"label": "最大输入长度",
				"value": Infinity,
				"type": "input-number"
			},
			"minlength": {
				"label": "最小输入长度",
				"value": 0,
				"type": "input-number"
			},
			"prefix-icon": {
				"label": "输入框头部图标",
				"value": "",
				"type": "input"
			},
			"suffix-icon": {
				"label": "输入框尾部图标",
				"value": "",
				"type": "input"
			},
			"rows": {
				"label": "文本域默认行数",
				"value": 2,
				"type": "input-number"
			},
			"autosize": {
				"label": "自适应内容高度",
				"value": false,
				"type": "checkbox"
			},
			"autofocus": {
				"label": "自动获取焦点",
				"value": false,
				"type": "checkbox"
			},
			"validate-event": {
				"label": "输入时是否触发表单的校验",
				"value": true,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"inputNumber": {
		"type": "PIInputNumber",
		"label": "计数器",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"min": {
				"label": "最小值",
				"value": -Infinity,
				"type": "input-number"
			},
			"max": {
				"label": "最大值",
				"value": Infinity,
				"type": "input-number"
			},
			"step": {
				"label": "步长",
				"value": 1,
				"type": "input-number"
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "large",
					"value": "large"
				}, {
					"label": "small",
					"value": "small"
				}],
				"options": {
					"clearable": true
				}
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"controls": {
				"label": "使用控制按钮",
				"value": true,
				"type": "checkbox"
			},
			"controlsPosition": {
				"label": "按钮位置在右侧",
				"value": false,
				"type": "checkbox"
			},
			"placeholder": {
				"label": "占位文本",
				"value": "",
				"type": "input"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"select": {
		"type": "PISelect",
		"label": "下拉框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"multiple": {
				"label": "支持多选",
				"value": false,
				"type": "checkbox"
			},
			"collapseTags": {
				"label": "多选时是否将选中值按文字的形式展示",
				"value": false,
				"type": "checkbox"
			},
			"multipleLimit": {
				"label": "多选限制项目数",
				"value": 0,
				"type": "input-number"
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"placeholder": {
				"label": "占位文本",
				"value": "请选择",
				"type": "input"
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"filterable": {
				"label": "支持搜索",
				"value": false,
				"type": "checkbox"
			},
			"no-match-text": {
				"label": "选项为空时显示的文字",
				"value": "无数据",
				"type": "input"
			},
			"clearable": {
				"label": "清空选项",
				"value": true,
				"type": "checkbox"
			},
			"automatic-dropdown": {
				"label": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
				"value": false,
				"type": "checkbox"
			},
			"default-first-option": {
				"label": "在输入框按下回车，选择第一个匹配项",
				"value": false,
				"type": "checkbox"
			},
			"popper-append-to-body": {
				"label": "弹出框插入至body元素",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		},
		"dataSourceType": "static",
		"dataSource": JSON.stringify([
			{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}
		], null, 2),
		"children": []
	},
	"radio": {
		"type": "PIRadio",
		"label": "单选框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "meduim",
					"value": "meduim"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"isButton": {
				"label": "button样式",
				"value": false,
				"type": "checkbox"
			},
			"border": {
				"label": "显示边框",
				"value": false,
				"type": "checkbox"
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"text-color": {
				"label": "按钮形式的Radio激活时的文本颜色",
				"value": "#ffffff",
				"type": "input"
			},
			"fill": {
				"label": "按钮形式的Radio激活时的填充色和边框色",
				"value": "#409EFF",
				"type": "input"
			}
		},
		"dataSourceType": "api",
		// "dataSource": JSON.stringify([
		// 	{
		// 			"label": "备选项1",
		// 			"value": "option1"
		// 	},
		// 	{
		// 			"label": "备选项1",
		// 			"value": "option2"
		// 	}
		// ], null ,2),
		"dataSource": "/mock-data/radioMockData",
		"children": []
	},
	"checkbox": {
		"type": "PICheckbox",
		"label": "复选框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"isShow": {
				"label": "全选快捷方式",
				"value": false,
				"type": "checkbox"
			},
			"indeterminate": {
				"label": "全选样式",
				"value": false,
				"type": "checkbox"
			},
			// "vertical": {
			// 	"label": "垂直排列",
			// 	"value": false,
			// 	"type": "checkbox"
			// },
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"border": {
				"label": "显示边框",
				"value": false,
				"type": "checkbox"
			},
			"min": {
				"label": "可被勾选的最小数量",
				"value": 0,
				"type": "input-number"
			},
			"max": {
				"label": "可被勾选的最大数量",
				"value": Infinity,
				"type": "input-number"
			},
			"textColor": {
				"label": "按钮形式的Checkbox 激活时的文本颜色",
				"value": "#ffffff",
				"type": "input"
			},
			"fill": {
				"label": "按钮形式的Checkbox 激活时的填充色和边框色",
				"value": "#409EFF",
				"type": "input"
			},
			"isButton": {
				"label": "按钮样式",
				"value": false,
				"type": "checkbox"
			}
		},
		"dataSourceType": "static",
		"dataSource": JSON.stringify([
			{
				"label": "复选框A",
				"value": "A"
			},
			{
				"label": "复选框B",
				"value": "B"
			},
			{
				"label": "复选框C",
				"value": "C"
			}
		], null, 2),
		"children": []
	},
	"timePicker": {
		"type": "PITimePicker",
		"label": "时间选择框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"value-format": {
				"label": "绑定值的格式",
				"value": "",
				"type": "input"
			},
			"placeholder": {
				"label": "占位文本",
				"value": "",
				"type": "input"
			},
			"start-placeholder": {
				"label": "范围选择时开始日期的占位文本",
				"value": "",
				"type": "input"
			},
			"end-placeholder": {
				"label": "范围选择时结束日期的占位文本",
				"value": "",
				"type": "input"
			},
			"is-range": {
				"label": "选择时间范围",
				"value": false,
				"type": "checkbox"
			},
			"arrow-control": {
				"label": "使用箭头进行时间选择",
				"value": false,
				"type": "checkbox"
			},
			"align": {
				"label": "对齐方式",
				"value": "left",
				"type": "select",
				"children": [{
					"label": "left",
					"value": "left"
				}, {
					"label": "center",
					"value": "center"
				}, {
					"label": "right",
					"value": "right"
				}]
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "meduim",
					"value": "meduim"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"range-separator": {
				"label": "选择范围时的分隔符",
				"value": "-",
				"type": "input"
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"editable": {
				"label": "可输入",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "清除图标按钮",
				"value": true,
				"type": "checkbox"
			},
			"readonly": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"selectableRange": {
				"label": "可选时间段",
				"value": [],
				"type": "time-picker",
				"options": {
					"is-range": true
				}
			},
			"format": {
				"label": "时间格式化",
				"value": "HH:mm:ss",
				"type": "input"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"timeSelect": {
		"type": "PITimeSelect",
		"label": "时间选择框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"placeholder": {
				"label": "占位文本",
				"value": "",
				"type": "input"
			},
			"align": {
				"label": "对齐方式",
				"value": "left",
				"type": "select",
				"children": [{
					"label": "left",
					"value": "left"
				}, {
					"label": "center",
					"value": "center"
				}, {
					"label": "right",
					"value": "right"
				}]
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "meduim",
					"value": "meduim"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"editable": {
				"label": "可输入",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "清除图标按钮",
				"value": true,
				"type": "checkbox"
			},
			"readonly": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"start": {
				"label": "开始时间",
				"value": "09:00",
				"type": "time-select",
				"options": {
					"picker-options": {
						"start": "00:00",
						"end": "24:00",
						"step": "00:15"
					}
				}
			},
			"end": {
				"label": "结束时间",
				"value": "18:00",
				"type": "time-select",
				"options": {
					"picker-options": {
						"start": "00:00",
						"end": "24:00",
						"step": "00:15"
					}
				}
			},
			"step": {
				"label": "间隔时间",
				"value": "00:30",
				"type": "time-select",
				"options": {
					"picker-options": {
						"start": "00:00",
						"end": "24:00",
						"step": "00:15"
					}
				}
			},
			"minTime": {
				"label": "最小时间",
				"value": "00:00",
				"type": "time-select",
				"options": {
					"picker-options": {
						"start": "00:00",
						"end": "24:00",
						"step": "00:15"
					}
				}
			},
			"maxTime": {
				"label": "最大时间",
				"value": "",
				"type": "time-select",
				"options": {
					"picker-options": {
						"start": "00:00",
						"end": "24:00",
						"step": "00:15"
					}
				}
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"datePicker": {
		"type": "PIDatePicker",
		"label": "日期选择框",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"type": {
				"label": "类型",
				"value": "date",
				"type": "select",
				"children": [
					{
					"label": "date",
					"value": "date"
					}, {
						"label": "daterange",
						"value": "daterange"
					}, {
						"label": "datetime",
						"value": "datetime"
					}, {
						"label": "datetimerange",
						"value": "datetimerange"
					}, {
						"label": "year",
						"value": "year"
					}, {
						"label": "month",
						"value": "month"
					}, {
						"label": "week",
						"value": "week"
					}, {
						"label": "monthrange",
						"value": "monthrange"
					}, {
						"label": "dates",
						"value": "dates"
					}
				]
			},
			"placeholder": {
				"label": "占位文本",
				"value": "",
				"type": "input"
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"disabled": {
				"label": "禁用状态",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "清除图标按钮",
				"value": true,
				"type": "checkbox"
			},
			"readonly": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"start-placeholder": {
				"label": "范围选择时开始日期的占位内容",
				"value": "",
				"type": "input"
			},
			"end-placeholder": {
				"label": "范围选择时结束日期的占位内容",
				"value": "",
				"type": "input"
			},
			"format": {
				"label": "输入框中的格式",
				"value": "yyyy-MM-dd",
				"type": "input"
			},
			"align": {
				"label": "对齐方式",
				"value": "left",
				"type": "select",
				"children": [{
					"label": "left",
					"value": "left"
				}, {
					"label": "center",
					"value": "center"
				}, {
					"label": "right",
					"value": "right"
				}]
			},
			"range-separator": {
				"label": "选择范围时的分隔符",
				"value": "-",
				"type": "input"
			},
			"value-format": {
				"label": "绑定值的格式",
				"value": "",
				"type": "input"
			},
			"unlink-panels": {
				"label": "在范围选择器里取消两个日期面板之间的联动",
				"value": false,
				"type": "checkbox"
			},
			"prefix-icon": {
				"label": "自定义头部图标的类名",
				"value": "el-icon-date",
				"type": "input"
			},
			"clear-icon": {
				"label": "自定义尾部图标的类名",
				"value": "el-icon-circle-close",
				"type": "input"
			},
			"validate-event": {
				"label": "输入时是否触发表单的校验",
				"value": true,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"rate": {
		"type": "PIRate",
		"label": "评分",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"max": {
				"label": "最大分值",
				"value": 5,
				"type": "input-number"
			},
			"allow-half": {
				"label": "半选",
				"value": false,
				"type": "checkbox"
			},
			"low-threshold": {
				"label": "低分和中等分数的界限值，值本身被划分在低分中",
				"value": 2,
				"type": "input-number"
			},
			"high-threshold": {
				"label": "高分和中等分数的界限值，值本身被划分在高分中",
				"value": 4,
				"type": "input-number"
			},
			"disabled": {
				"label": "只读",
				"value": false,
				"type": "checkbox"
			},
			"show-text": {
				"label": "辅助文字",
				"value": false,
				"type": "checkbox"
			},
			"show-score": {
				"label": "当前分数",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "取消选择",
				"value": false,
				"type": "checkbox"
			},
			"void-icon-class": {
				"label": "未选中icon的类名",
				"value": "el-icon-star-off",
				"type": "input"
			},
			"disabled-void-icon-class": {
				"label": "只读时未选中icon的类名",
				"value": "el-icon-star-on",
				"type": "input"
			},
			"texts": {
				"label": "辅助文字,逗号隔开",
				"value": "",
				"type": "input"
			}
		}
	},
	"cascader": {
		"type": "PICascader",
		"label": "级联",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [
					{
						"label": "meduim",
						"value": "meduim"
					},
					{
						"label": "small",
						"value": "small"
					},
					{
						"label": "mini",
						"value": "mini"
					}
				],
				"options": {
					"clearable": true
				}
			},
			"placeholder": {
				"label": "占位文本",
				"value": "请选择",
				"type": "input"
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"clearable": {
				"label": "清空选项",
				"value": false,
				"type": "checkbox"
			},
			"show-all-levels": {
				"label": "显示选中值的完整路径",
				"value": false,
				"type": "checkbox"
			},
			"multiple": {
				"label": "多选",
				"value": false,
				"type": "checkbox"
			},
			"collapse-tags": {
				"label": "多选模式下是否折叠Tag",
				"value": false,
				"type": "checkbox"
			},
			"separator": {
				"label": "选项分隔符",
				"value": "/",
				"type": "input"
			},
			"expandTrigger": {
				"label": "次级菜单的展开方式",
				"value": "click",
				"type": "select",
				"children": [
					{
						"label": "click",
						"value": "click"
					},
					{
						"label": "hover",
						"value": "hover"
					}
				]
			},
			"checkStrictly": {
				"label": "严格的遵守父子节点不互相关联",
				"value": false,
				"type": "checkbox"
			},
			"emitPath": {
				"label": "返回选中节点所在各级菜单的值所组成的数组",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": 48,
				"type": "input-number"
			}
		},
		"dataSourceType": "static",
		"dataSource": JSON.stringify([
			{
				value: 'zhinan',
				label: '指南',
				children: [{
					value: 'shejiyuanze',
					label: '设计原则',
					children: [{
						value: 'yizhi',
						label: '一致'
					}, {
						value: 'fankui',
						label: '反馈'
					}, {
						value: 'xiaolv',
						label: '效率'
					}, {
						value: 'kekong',
						label: '可控'
					}]
				}, {
					value: 'daohang',
					label: '导航',
					children: [{
						value: 'cexiangdaohang',
						label: '侧向导航'
					}, {
						value: 'dingbudaohang',
						label: '顶部导航'
					}]
				}]
			}, {
				value: 'zujian',
				label: '组件',
				children: [{
					value: 'basic',
					label: 'Basic',
					children: [{
						value: 'layout',
						label: 'Layout 布局'
					}, {
						value: 'color',
						label: 'Color 色彩'
					}, {
						value: 'typography',
						label: 'Typography 字体'
					}, {
						value: 'icon',
						label: 'Icon 图标'
					}, {
						value: 'button',
						label: 'Button 按钮'
					}]
				}, {
					value: 'form',
					label: 'Form',
					children: [{
						value: 'radio',
						label: 'Radio 单选框'
					}, {
						value: 'checkbox',
						label: 'Checkbox 多选框'
					}, {
						value: 'input',
						label: 'Input 输入框'
					}, {
						value: 'input-number',
						label: 'InputNumber 计数器'
					}, {
						value: 'select',
						label: 'Select 选择器'
					}, {
						value: 'cascader',
						label: 'Cascader 级联选择器'
					}, {
						value: 'switch',
						label: 'Switch 开关'
					}, {
						value: 'slider',
						label: 'Slider 滑块'
					}, {
						value: 'time-picker',
						label: 'TimePicker 时间选择器'
					}, {
						value: 'date-picker',
						label: 'DatePicker 日期选择器'
					}, {
						value: 'datetime-picker',
						label: 'DateTimePicker 日期时间选择器'
					}, {
						value: 'upload',
						label: 'Upload 上传'
					}, {
						value: 'rate',
						label: 'Rate 评分'
					}, {
						value: 'form',
						label: 'Form 表单'
					}]
				}, {
					value: 'data',
					label: 'Data',
					children: [{
						value: 'table',
						label: 'Table 表格'
					}, {
						value: 'tag',
						label: 'Tag 标签'
					}, {
						value: 'progress',
						label: 'Progress 进度条'
					}, {
						value: 'tree',
						label: 'Tree 树形控件'
					}, {
						value: 'pagination',
						label: 'Pagination 分页'
					}, {
						value: 'badge',
						label: 'Badge 标记'
					}]
				}, {
					value: 'notice',
					label: 'Notice',
					children: [{
						value: 'alert',
						label: 'Alert 警告'
					}, {
						value: 'loading',
						label: 'Loading 加载'
					}, {
						value: 'message',
						label: 'Message 消息提示'
					}, {
						value: 'message-box',
						label: 'MessageBox 弹框'
					}, {
						value: 'notification',
						label: 'Notification 通知'
					}]
				}, {
					value: 'navigation',
					label: 'Navigation',
					children: [{
						value: 'menu',
						label: 'NavMenu 导航菜单'
					}, {
						value: 'tabs',
						label: 'Tabs 标签页'
					}, {
						value: 'breadcrumb',
						label: 'Breadcrumb 面包屑'
					}, {
						value: 'dropdown',
						label: 'Dropdown 下拉菜单'
					}, {
						value: 'steps',
						label: 'Steps 步骤条'
					}]
				}, {
					value: 'others',
					label: 'Others',
					children: [{
						value: 'dialog',
						label: 'Dialog 对话框'
					}, {
						value: 'tooltip',
						label: 'Tooltip 文字提示'
					}, {
						value: 'popover',
						label: 'Popover 弹出框'
					}, {
						value: 'card',
						label: 'Card 卡片'
					}, {
						value: 'carousel',
						label: 'Carousel 走马灯'
					}, {
						value: 'collapse',
						label: 'Collapse 折叠面板'
					}]
				}]
			}, {
				value: 'ziyuan',
				label: '资源',
				children: [{
					value: 'axure',
					label: 'Axure Components'
				}, {
					value: 'sketch',
					label: 'Sketch Templates'
				}, {
					value: 'jiaohu',
					label: '组件交互文档'
				}]
			}
		], null, 2),
		"children": []
	},
	"switch": {
		"type": "PISwitch",
		"label": "开关",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": 40,
				"type": "input-number"
			},
			"active-text": {
				"label": "打开时的文字描述",
				"value": "",
				"type": "input"
			},
			"inactive-text": {
				"label": "关闭时的文字描述",
				"value": "",
				"type": "input"
			},
			"active-color": {
				"label": "打开时的背景色",
				"value": "#409EFF",
				"type": "input"
			},
			"inactive-color": {
				"label": "关闭时的背景色",
				"value": "#C0CCDA",
				"type": "input"
			},
			"validate-event": {
				"label": "改变switch状态时是否触发表单的校验",
				"value": true,
				"type": "checkbox"
			}
		}
	},
	"slider": {
		"type": "PISlider",
		"label": "滑块",
		"labelWidth": "",
		"prop": "",
		"span": {
			"span": 24,
			"lg": 24,
			"md": 24,
			"sm": 24,
			"xs": 24
		},
		"required": false,
		"validRules": [],
		"rules": {},
		"options": {
			"min": {
				"label": "最小值",
				"value": 0,
				"type": "input-number"
			},
			"max": {
				"label": "最大值",
				"value": 100,
				"type": "input-number"
			},
			"step": {
				"label": "步长",
				"value": 1,
				"type": "input-number"
			},
			"disabled": {
				"label": "禁用",
				"value": false,
				"type": "checkbox"
			},
			"show-input": {
				"label": "输入框",
				"value": false,
				"type": "checkbox"
			},
			"show-input-controls": {
				"label": "输入框的控制按钮",
				"value": true,
				"type": "checkbox"
			},
			"input-size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "large",
					"value": "large"
				}, {
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"show-stops": {
				"label": "间断点",
				"value": false,
				"type": "checkbox"
			},
			"show-tooltip": {
				"label": "提示文字",
				"value": false,
				"type": "checkbox"
			},
			"range": {
				"label": "范围选择",
				"value": false,
				"type": "checkbox"
			}
			// 表单不支持竖向
			// "vertical": {
			// 	"label": "竖向模式",
			// 	"value": false,
			// 	"type": "checkbox"
			// }
		}
	},
	"searchBtn": {
		"type": "PISearchButton",
		"span": {
			"span": 4,
			"lg": 4,
			"md": 4,
			"sm": 4,
			"xs": 4
		},
		"options": {
			"label": {
				"label": "文本",
				"value": "查询",
				"type": "input"
			},
			"type": {
				"label": "类型",
				"value": "ghost",
				"type": "select",
				"children": [{
					"label": "primary",
					"value": "primary"
				}, {
					"label": "ghost",
					"value": "ghost"
				}, {
					"label": "dashed",
					"value": "dashed"
				}, {
					"label": "text",
					"value": "text"
				}, {
					"label": "info",
					"value": "info"
				}, {
					"label": "success",
					"value": "success"
				}, {
					"label": "warning",
					"value": "warning"
				}, {
					"label": "error",
					"value": "error"
				}, {
					"label": "transparent",
					"value": "transparent"
				}]
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"icon": {
				"label": "图标类型",
				"value": "",
				"type": "input"
			},
			"round": {
				"label": "圆角",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"resetBtn": {
		"type": "PIResetButton",
		"span": {
			"span": 4,
			"lg": 4,
			"md": 4,
			"sm": 4,
			"xs": 4
		},
		"options": {
			"label": {
				"label": "文本",
				"value": "重置",
				"type": "input"
			},
			"type": {
				"label": "类型",
				"value": "ghost",
				"type": "select",
				"children": [{
					"label": "primary",
					"value": "primary"
				}, {
					"label": "ghost",
					"value": "ghost"
				}, {
					"label": "dashed",
					"value": "dashed"
				}, {
					"label": "text",
					"value": "text"
				}, {
					"label": "info",
					"value": "info"
				}, {
					"label": "success",
					"value": "success"
				}, {
					"label": "warning",
					"value": "warning"
				}, {
					"label": "error",
					"value": "error"
				}, {
					"label": "transparent",
					"value": "transparent"
				}]
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"icon": {
				"label": "图标类型",
				"value": "",
				"type": "input"
			},
			"round": {
				"label": "圆角",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			}
		}
	},
	"customBtn": {
		"type": "PICustomButton",
		"span": {
			"span": 4,
			"lg": 4,
			"md": 4,
			"sm": 4,
			"xs": 4
		},
		"options": {
			"label": {
				"label": "文本",
				"value": "自定义",
				"type": "input"
			},
			"type": {
				"label": "类型",
				"value": "ghost",
				"type": "select",
				"children": [{
					"label": "primary",
					"value": "primary"
				}, {
					"label": "ghost",
					"value": "ghost"
				}, {
					"label": "dashed",
					"value": "dashed"
				}, {
					"label": "text",
					"value": "text"
				}, {
					"label": "info",
					"value": "info"
				}, {
					"label": "success",
					"value": "success"
				}, {
					"label": "warning",
					"value": "warning"
				}, {
					"label": "error",
					"value": "error"
				}, {
					"label": "transparent",
					"value": "transparent"
				}]
			},
			"size": {
				"label": "尺寸",
				"value": "",
				"type": "select",
				"children": [{
					"label": "medium",
					"value": "medium"
				}, {
					"label": "small",
					"value": "small"
				}, {
					"label": "mini",
					"value": "mini"
				}],
				"options": {
					"clearable": true
				}
			},
			"icon": {
				"label": "图标类型",
				"value": "",
				"type": "input"
			},
			"round": {
				"label": "圆角",
				"value": false,
				"type": "checkbox"
			},
			"width": {
				"label": "宽度",
				"value": "",
				"type": "input"
			},
			"name": {
				"label": "属性",
				"value": "",
				"type": "input"
			}
		}
	}
}
