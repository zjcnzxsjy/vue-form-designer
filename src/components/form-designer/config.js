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
		"value": "",
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
	"textarea": {
		"type": "PITextarea",
		"label": "多行文本",
		"labelWidth": "",
		"value": "",
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
		"value": 0,
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
		"value": "",
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
		"dataSource": "",
		"children": []
	},
	"radio": {
		"type": "PIRadio",
		"label": "单选框",
		"labelWidth": "",
		"value": "",
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
		"dataSourceType": "static",
		"dataSource": "",
		"children": []
	},
	"checkbox": {
		"type": "PICheckbox",
		"label": "复选框",
		"labelWidth": "",
		"value": "",
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
		"dataSource": "",
		"children": []
	},
	"timePicker": {
		"type": "PITimePicker",
		"label": "时间选择框",
		"labelWidth": "",
		"value": "",
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
		"value": "",
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
		"value": "",
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
			"format": {
				"label": "日期格式",
				"value": "",
				"type": "input"
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
		"value": 0,
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
		"value": "",
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
			"width": {
				"label": "宽度",
				"value": 48,
				"type": "input-number"
			}
		},
		"dataSourceType": "static",
		"dataSource": "",
		"children": []
	},
	"switch": {
		"type": "PISwitch",
		"label": "开关",
		"labelWidth": "",
		"value": false,
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
		"value": 0,
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
			},
			"vertical": {
				"label": "竖向模式",
				"value": false,
				"type": "checkbox"
			}
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
