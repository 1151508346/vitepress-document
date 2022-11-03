<template>
  <div class="pdf-container">
    <!-- <div style="height:220px;">
     </div> -->
    <!-- <canvas id="pdf-canvas"></canvas> -->
     <canvas :class="canvasClass" v-for="i in pages" :key="i" :id="`pdf-canvas-${i}`"
     
     ></canvas>
  </div>
</template>

<script setup >
import { defineComponent, onBeforeUnmount, onMounted,ref } from "vue"
import pdfjsLib from "pdfjs-dist"
// const pdfjsLib = require("pdfjs-dist.js")
pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.min.js'
const pages = ref(0)
let aside 
onMounted(() => {
  
  init()
})
const canvasClass = ref('')
onBeforeUnmount(() => {
  if(aside){
    delete aside.style.display;
  }
  const info = navigator.userAgent()
  if(info.indexOf('Mobile') > -1){
    // 移动端
    canvasClass='mobile-canvas'
  }else{
    canvasClass=''
  }
})
const init = async () => {
  const url = '/assets/2022前端工程师面试题手册.pdf'
  const res = pdfjsLib.getDocument(url)
  const pdf = await res.promise
    .then(pdf => {
      console.log(pdf)
      pages.value = pdf.numPages
      return pdf
    })
  for(let i = 0; i < pages.value;i++)  {
    const page = await pdf.getPage(i+1)
    render(page,i)
  }
  
}
const render = (page,i) => {
      console.log(page.view,'page')
      const [,,w,h] = page.view
  // 设置展示比例`
      const scale = 1
      // 获取pdf尺寸
      const viewport = page.getViewport({})
      // viewport.viewBox = [0,0,800,800]
      // viewport.width = 1000
      // viewport.height = 1000
      viewport.scale = scale
      console.log("viewport", viewport)
      // 获取需要渲染的元素
      const canvas = document.getElementById(`pdf-canvas-${i+1}`)
      console.log(h)
      const context = canvas.getContext("2d")

      if(canvasClass.value){
        canvas.height = viewport.height || h
        canvas.width = viewport.width || 1000
      }else{
        canvas.height = viewport.height || h*1.3
        canvas.width = viewport.width || w
      }
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      }
      page.render(renderContext)
}
</script>

<style scoped>
.pdf-container{

  /* width: 1000px; */
  /* overflow-x: auto; */
}
canvas{
  transform:rotatex(180deg) scale(1.3); 
}
.mobile-canvas{
  transform:rotatex(180deg) scale(1.1);
}
</style>