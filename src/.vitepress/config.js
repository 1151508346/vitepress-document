
const path = require('path')

const guideList = require('./contents/guideList')
const mianshihunluanList = require('./contents/mianshihunluanList');
const interviewerList = require('./contents/interviewerList')
const vueList = require('./contents/vueList');
const reactList = require('./contents/reactList');


const logoPath = (logo) => {
  const { NODE_ENV } = process.env;
  let filePath = ''
  // if(NODE_ENV.trim() === 'development'){
  //   filePath = `/${logo}`
  // }else{
  //   filePath = `/public/${logo}`
  // }
  filePath = `/${logo}`

  return filePath;
}
const args = process.argv
const getBase = () => {
  const baseIndex = args.indexOf('-b')
  if (baseIndex !== -1) {
    return args[baseIndex + 1] ? `/${args[baseIndex + 1]}/` : '/'
  }
  return ''
}
console.log(getBase(), 'getBase()')
export default {
  title: '首页',
  base: getBase() || '/vitepress-document/',
  description: '这是一个联系vitePress的文档',
  themeConfig: {
    search: true,
    lastUpdated: '最后更新时间',
    // siteTitle: 'My Custom Title',
    logo: logoPath('test-bg.png'),
    docsDir: '/',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    repo: '',
    footer: {
      message: 'released under the MIT License',
      copyright: 'Copyright @ 2022 tmmaiyatang',
    },
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '指南',
        link: '/guide/installation',
      },
      {
        text: '项目搭建',
        link: '/projects/vite_vue2.md'
      },
      {
        text: 'Node',
        link: '/node/vm模块.md'
      },
      {
        text: 'Vue',
        link: '/vue/vue.3.3新特性.md'
      },
      {
        text: 'React',
        link: '/react/react中实现插槽.md'
      },
      {
          text:'flutter',
          link:'/flutter/flutter搭建.md'
      },
      {
        text: '面试题',
        items: [
          { text: '混乱的', link: '/mianshi/hunluan/quiteStart' },
          { text: '前端面试八股文', link: '/mianshi/interviewer/quiteStart' },
          // { text: 'Item B', link: '/item-2' },
          // { text: 'Item C', link: '/item-3' }
        ]
      },
      {
        text: '组件',
        link: '/component/icon',
        activeMatch: '/component/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsible: true,
          items: guideList,
        }
      ],
      '/vue': [
        {
          text: 'Vue',
          collapsible: true,
          items: vueList,
        }
      ],
      '/react': [
        {
          text: 'React',
          collapsible: true,
          items: reactList,
        }
      ],
      '/node/': [
        {
          text: 'node',
          collapsible: true,
          items: [
            {
              text: 'NodeJs中vm模块详解',
              link: '/node/vm模块.md'
            },
            {
              text: 'commonjs',
              link: '/node/common.md'
            }
          ]
        }
      ],
      '/flutter':[
        {
          text: 'flutter',
          collapsible: true,
          items: [
            {
              text:'flutter搭建',
              link:'/flutter/flutter搭建.md'
            },
            {
              text: 'flutter与h5页面的双向通信',
              link: '/flutter/flutter与h5页面的双向通信.md'
            },
            {
              text: 'flutter学习',
              link: '/flutter/flutter-study.md'
              
            }
          ]
        }
      ],

      '/projects/': [
        {
          text: '项目搭建',
          collapsible: true,
          items: [
            {
              text: 'vite+vue2环境搭建',
              link: '/projects/vite_vue2.md'
            },

          ],
        }
      ],
      '/mianshi/hunluan/': [
        {
          text: '面试题/混乱',
          collapsible: true,
          items: mianshihunluanList,
        }
      ],

      '/mianshi/interviewer/': [
        {
          text: '面试题/前端面试八股文',
          collapsible: true,
          items: interviewerList
        }
      ]
    }
  }
}