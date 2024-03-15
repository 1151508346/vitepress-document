
# VUE使用docxtemplater导出word文档实例(带图片)
## 导包
> npm install docxtemplater docxtemplater-image-module-free file-saver pizzip -D

> package.json
```json
{
  "docxtemplater": "^3.46.0",
  "docxtemplater-image-module-free": "^1.1.1",
  "file-saver": "^2.0.5",
  "lodash": "^4.17.21",
  "pizzip": "^3.1.6",
}
```
## 案例
```vue
<template>
  <div class="container">
    aaa
    <button @click="exportClick">导出</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { debounce, assign, last } from 'lodash';
import { saveAs } from 'file-saver';

import ImageModule from 'docxtemplater-image-module-free';
import imageTest from './assets/login-background.png';
/**
 * 导出word文档（带图片）
 *
 */
// import JSZipUtils from 'jszip-utils'
/**
 * 将base64格式的数据转为ArrayBuffer
 * @param {Object} dataURL base64格式的数据
 */
function base64DataURLToArrayBuffer(dataURL) {
  const base64Regex = /^data:image\/(png|jpg|jpeg|svg|svg\+xml);base64,/;
  if (!base64Regex.test(dataURL)) {
    return false;
  }
  const stringBase64 = dataURL.replace(base64Regex, '');
  let binaryString;
  if (typeof window !== 'undefined') {
    binaryString = window.atob(stringBase64);
  } else {
    binaryString = Buffer.from(stringBase64, 'base64').toString('binary');
  }
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
}
const exportWord = (tempDocxPath: string, data: any, fileName: string, imgSize: Record<string, string | number>) => {
  console.log(111, tempDocxPath, data, fileName, imgSize);
  //这里要引入处理图片的插件

  // var expressions = require('angular-expressions')
  // expressions.filters.lower = function (input) {
  //   // This condition should be used to make sure that if your input is
  //   // undefined, your output will be undefined as well and will not
  //   // throw an error
  //   if (!input) return input
  //   // toLowerCase() 方法用于把字符串转换为小写。
  //   return input.toLowerCase()
  // }
  // function angularParser(tag) {
  //   tag = tag
  //     .replace(/^\.$/, 'this')
  //     .replace(/('|‘)/g, "'")
  //     .replace(/(“|”)/g, '"')
  //   const expr = expressions.compile(tag)
  //   return {
  //     get: function (scope, context) {
  //       let obj = {}
  //       const index = last(context.scopePathItem)
  //       const scopeList = context.scopeList
  //       const num = context.num
  //       for (let i = 0, len = num + 1; i < len; i++) {
  //         obj = assign(obj, scopeList[i])
  //       }
  //       //word模板中使用 $index+1 创建递增序号
  //       obj = assign(obj, { $index: index })
  //       return expr(scope, obj)
  //     }
  //   }
  // }
  PizZipUtils.getBinaryContent(tempDocxPath, (error, content) => {
    if (error) {
      console.log(error);
    }
    // expressions.filters.size = function (input, width, height) {
    //   return {
    //     data: input,
    //     size: [width, height],
    //   };
    // };
    let opts: any = {};
    opts = {
      //图像是否居中
      centered: true,
    };
    opts.getImage = (chartId) => {
      //将base64的数据转为ArrayBuffer
      return base64DataURLToArrayBuffer(chartId);
    };
    opts.getSize = function (img, tagValue, tagName) {
      //自定义指定图像大小
      if (imgSize.hasOwnProperty(tagName)) {
        return imgSize[tagName];
      } else {
        return [600, 400];
      }
    };
    // 创建一个JSZip实例，内容为模板的内容
    const zip = new PizZip(content);
    // 创建并加载 Docxtemplater 实例对象
    // 设置模板变量的值
    let doc = new Docxtemplater();
    doc.attachModule(new ImageModule(opts));
    doc.loadZip(zip);
    // doc.setOptions({ parser: angularParser });
    doc.setData(data);
    try {
      // 呈现文档，会将内部所有变量替换成值，
      doc.render();
    } catch (error: any) {
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      console.log('err', { error: e });
      // 当使用json记录时，此处抛出错误信息
      throw error;
    }
    // 生成一个代表Docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    // 将目标文件对象保存为目标类型的文件，并命名
    saveAs(out, fileName);
  });
};
/**
 * 将图片的url路径转为base64路径
 * 可以用await等待Promise的异步返回
 * @param {Object} imgUrl 图片路径
 */
function getBase64Sync(imgUrl: string) {
  return new Promise(function (resolve, reject) {
    // 一定要设置为let，不然图片不显示
    let image = new Image();
    //图片地址
    image.src = imgUrl;
    // 解决跨域问题
    image.setAttribute('crossOrigin', '*'); // 支持跨域图片
    // image.onload为异步加载
    image.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      let context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      //图片后缀名
      let ext = image.src
        .substring(image.src.lastIndexOf('.') + 1)
        .toLowerCase();
      //图片质量
      let quality = 0.8;
      //转成base64
      let dataurl = canvas.toDataURL('image/' + ext, quality);
      //返回
      resolve(dataurl);
    };
  });
}

async function exportWordFile() {
  //多个图片遍历转base64

  let data = {
    name: 'zs',
    age: 10,
    imgUrl: await getBase64Sync(imageTest),
  };
  let imgSize = {
    //控制导出的word图片大小
    imgUrl: [600, 400],
  };
  exportWord('/test.docx', data, 'export.docx', imgSize);
}

function exportClick() {
  exportWordFile();
}
</script>
<style scoped lang="scss"></style>


```


## word文件中加载变量
  
在word中使用变量{name} {age}，待导出的word中使用的变量会被替换为实际的值，加载图片的时候使用{%imgUrl},导出的word中imgUrl就会被替换成实际的图片。

*参考连接:* [https://www.jb51.net/javascript/287497uw5.htm](https://www.jb51.net/javascript/287497uw5.htm)

*官方链接：* [https://docxtemplater.com/](https://docxtemplater.com/)

