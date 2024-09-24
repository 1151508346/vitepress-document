import { defineConfig } from "vite";

import DefineOptions from 'unplugin-vue-define-options/vite'
import requireTransform from 'vite-plugin-require-transform'
import { SearchPlugin } from '@pzy915/vitepress-plugin-search'
// import { load, cut } from '@node-rs/jieba'
export default defineConfig({
  plugins:[
    DefineOptions(),
    // requireTransform({
    //   fileRegex:/.js$|.vue$/
    // })
    SearchPlugin({
      previewLength: 20,
      buttonLabel: '搜索',
      placeholder: '文章搜索',
      tokenize: 'full',
    }),
  ]
})
