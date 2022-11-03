module.exports = {
  title: 'z-ui组件库',
  description: 'Just playing around.',
  themeConfig:{
    lastUpdated:'最后更新时间',
    docsDir:'/',
    editLinks:true,
    editLinkText:'编辑此网站',
    repo:'',
    footer:{
      message:'released under the MIT License',
      copyright:'Copyright @ 2022-present Zi Shui',
    },
    nav:[
      {
        text:'指南',
        link:'/guide/installation',
        activeMatch:'/guide/'
      },
      {
        text:'组件',
        link:'/component/icon',
        activeMatch:'/component/'
      }
    ],
    sidebar:{
      '/guide/':[
        {
          text:'指南',
          items:[
            { text:'安装', link:'/guide/installation' },
            { text:'快速开始', link:'/guide/quiteStart' }
          ],
        }
      ]

    }
  }
}