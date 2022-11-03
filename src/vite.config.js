import { defineConfig } from "vite";

import DefineOptions from 'unplugin-vue-define-options/vite'
import requireTransform from 'vite-plugin-require-transform'
export default defineConfig({
  plugins:[
    DefineOptions(),
    // requireTransform({
    //   fileRegex:/.js$|.vue$/
    // })
  ]
})
