# 代码编辑器案例
```cmd
npm install  codemirror vue-codemirror @codemirror/lang-javascript @codemirror/lang-html @codemirror/lang-json @codemirror/view @codemirror/state @codemirror/theme-one-dark 
```
```vue


<template>
  <div class="parent">
    <codemirror v-model="code" placeholder="Code goes here..." :style="{ height: '400px' }" :autofocus="true"
      :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" @change="change"
      @focus="focus" @blur="blur" />
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { json } from '@codemirror/lang-json'
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
// const code = ref(`
//     console.log('Hello, world!')
//     const demo = () => {
//       console.log('demo')
//     }

//     function demo(){

//     }
//     class DemoClass{
//       constructor(name){
//         this.name = name
//       }
//       setName(newName){
//         this.name = newName;
//       }
//     }

//     {
//       name:'zs',
//         aaaa
//     }
// `)

const code = ref(`
`)
const extensions = [ 
    javascript(), 
    oneDark,
    EditorView.editable.of(true), // 编辑器能否编辑   设置false 没有光标
    EditorState.readOnly.of(false) // 编辑器是否是可读的  // 设置true，有光标，但是不能编辑
    ]
const log = console.log
// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
  console.log(payload, 'payload==========================')
  view.value = payload.view
}

function change($event) {
  log('change', $event)
  getCodemirrorStates()
}
function focus($event){
  log('focus', $event);
  getCodemirrorStates()

}
function blur($event){
  log('blur', $event)
  getCodemirrorStates();
}
// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
  const state = view.value.state
  const ranges = state.selection.ranges
  console.log(ranges,'ranges')
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
  const cursor = ranges[0].anchor
  const length = state.doc.length
  const lines = state.doc.lines

  console.log(selected, ' selected')
  console.log(cursor, 'cursor')
  console.log(length, 'length')
  console.log(lines, 'lines')
  // more state info ...
  // return ...
}


</script>
<style lang="scss"></style>

```