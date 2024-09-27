
const path = require('path')

const guideList = require('./contents/guideList')
const mianshihunluanList = require('./contents/mianshihunluanList');
const interviewerList = require('./contents/interviewerList')
const vueList = require('./contents/vueList');
const reactList = require('./contents/reactList');
const { getMenuList } = require('./contents/utils')
const {glob, sync} = require('glob');
const list = sync('src/mianshi/vue-interviewer/*.md',{
  ignore: 'node_modules/**'
})

const vueInterviewerList = getMenuList(list).sort((a,b) => a.text[0] - b.text[0])
// console.log(vueInterviewerList,'vueInterviewerList')
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
// console.log(getBase(), 'getBase()')
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
        text: '浏览器书签',
        link: '/bookmark/technology-doc.md'
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
        text: 'linux',
        items: [
          { text: 'linux基础笔记', link: '/linux/linux基础笔记/1第一章 Linux 入门概述/第一章 Linux 入门概述.md' },
          { text: 'linux零散知识点', link: '/linux/linux零散知识点.md' },
          // { text: 'Item B', link: '/item-2' },
          // { text: 'Item C', link: '/item-3' }
        ]
      },
      {
        text: '面试题',
        items: [
          { text: '混乱的', link: '/mianshi/hunluan/quiteStart' },
          { text: '前端面试八股文', link: '/mianshi/interviewer/quiteStart' },
          { text: 'Vue经典面试题', link: '/mianshi/vue-interviewer/6.请说一下你对响应式数据的理解.md' },
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
      '/bookmark':[
        {
          text: '浏览器书签',
          collapsible: true,
          items: [
            {
              text: '技术文档',
              link: '/bookmark/technology-doc.md'
            }
          ],
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
      '/linux/linux基础笔记/': [
        {
          text: 'linux',
          collapsible: true,
          items: [
            {
              text: '第一章 Linux 入门概述',
              link: '/linux/linux基础笔记/1第一章 Linux 入门概述/第一章 Linux 入门概述.md'
            },
            {
              text: '第二章 Linux虚拟机的安装部署',
              link: '/linux/linux基础笔记/2第二章 Linux虚拟机的安装部署/第二章 Linux虚拟机的安装部署.md'
            },
            {
              text: '第二章 拓展 Linux阿里云ECS的安装部署',
              link: '/linux/linux基础笔记/2第二章拓展 Linux阿里云ECS的安装部署/第二章拓展 Linux阿里云ECS的安装部署.md'
            },
            {
              text: '第三章 常见Linux命令',
              link: '/linux/linux基础笔记/3第三章 常见Linux命令/第三章 常见Linux命令.md'
            },
            {
              text: '第四章 大数据开发扩展shell',
              link: 'linux/linux基础笔记/4第四章 生产开发使用扩展/大数据开发扩展shell/大数据开发扩展shell.md'
            },
            {
              text: '第四章 java开发扩展软件包与安装',
              link: 'linux/linux基础笔记/4第四章 生产开发使用扩展/java开发扩展软件包与安装/java开发扩展软件包与安装.md'
            }
            
          ]
        }
      ],
      '/linux/': [
        {
          text: 'linux',
          collapsible: true,
          items: [
            {
              text: 'linux零散知识点',
              link: '/linux/linux零散知识点.md'
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
            },
           
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
      ],
      '/mianshi/vue-interviewer/': [
        {
          text: '面试题/vue经典面试题',
          collapsible: true,
          items: vueInterviewerList
        }
      ],
      
    }
  }
}