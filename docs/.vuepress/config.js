module.exports = {
  title: 'Vue form designer',
  description: '基于element-ui的表单可视化设计器',
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
        text: '配置参考',
        link: '/pages/config/'
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
        }
      ]
    }
  }
}