import { defineConfig } from "vite";
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import requireTransform from 'vite-plugin-require-transform'
import { SearchPlugin } from '@pzy915/vitepress-plugin-search'
// import { load, cut } from '@node-rs/jieba'
function errorPlugin(){
  return {
    apply:'build',
    enfore: 'pre',
    resolveId(id){
      if(id.includes('vite/preload-helper')) return 'vite/preload-helper'
      if (id.startsWith('@/')) {
        const base = path.resolve(process.cwd(), 'src')
        return id.replace(/@/,base)
      }
    }
  }
}
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
    // errorPlugin()
  ]
})
