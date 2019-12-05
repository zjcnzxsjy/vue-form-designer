module.exports = {
  title: 'Vue form designer',
  description: '基于element-ui的表单可视化设计器',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/pages/'
      },
      {
        text: '组件',
        link: '/pages/form-designer'
      },
      {
        text: '使用说明',
        link: '/pages/use/'
      }
    ],
    sidebar: {
      "/pages/": [
        {
          title: '指南',
          collapsable: false,
          children: [
            '/pages/',
            '/pages/quickstart'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            '/pages/form-designer',
            '/pages/form-generator'
          ]
        },
        {
          title: '使用说明',
          collapsable: false,
          children: [
            '/pages/use',
            '/pages/form-layout',
            '/pages/datasource'
          ]
        }
      ]
    }
  }
}