

# vue3.3新特性

>  https://blog.vuejs.org/posts/vue-3-3#imported-and-complex-types-support-in-macros

> author: tmmaiyatang
>
> date: 2023-05-17

## defineProps

- defineProps 支持复杂类型

```vue
<script setup lang='ts'>
	defineProps<Props & true extends false ? {age:number} : {}>()
</script>


```



## generic Component 通用组件

- 组件可以接收泛型参数，vue在运行时可以进行类型检测

```vue
<script setup lang=ts generic="T">
	defineProps<{
    	items: T[];
        selected:T;
    }>()
</script>

```

```ts
export default defineComponent<T,>({
	setup(props:{msg : T}){
        return () => <div>props.msg</div>
    }
})
```



## defineEmits

```vue
<script setup lang='ts'>
	//before 
    defineEmits<
    {
        (e:'foo',id:number) :void;
        (e:'bar',name:string,...rest:any[]):void;
    }
     >();
    
    
    //after
    defineEmits<
    {
       foo:[id:number];
       bar:[name:string,...rest:any[]]
    }
     >()
</script>
```

## defineSlots

```vue


<script setup lang='ts'>

// defineSlots 是一个纯粹的ts支持 ，仅仅接收类型参数
defineSlots({
    default:(props:{msg}) => any;
    bar:(props:{id:number}) => any;
})

</script>
```



## 开启新特性配置

```ts
import defineConfig from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins:[
        vue({
            script:{
                propsDestructure:true, // 开启vue3.3props的新特性
                defineModel:true, // 开启defineModel的使用
            }
        })
    ]
})

```



```vue

<script setup lang='ts'>
	const {msg} = defineProps<{msg:string}>()
</script>
```

- 3.2中父组件传入的props如果是ref的话 当解构出msg的时候就是一个普通值，丧失响应式
- 3.3中父组件传入的props如果是ref的话 当解构出msg的时候依然保留响应式 可以通过watch，watchEffect监控值得变化



## defineModel

```vue
 <!-- before -->
<script setup lang='ts'>

    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
    function onInput(e){
		emit('update:modelValue',e.target.value)
    }
	
</script>
<template>
	<input :value="modelValue" @input="onInput"/>
</template>

```

- ModelCom.vue

```vue

 <!-- after -->
// ModelCom.vue
<script setup lang='ts'>

   const modelValue = defineModel()
   console.log(modelValue.value)
   const bar = defineModel('bar'<{require:false,default:'aa'})
   console.log(bar.value)
</script>
<template>
	<input v-model="modelValue" />
	<input v-model="bar" />
</template>

```

使用定义的ModelCom.vue

```vue
<ModelCom v-model='modelValue' v-model:bar='bar'/>
<script setup lang='ts'>
	const modelValue = ref('aa')
    const bar = ref('bar')
</script>
```

> **备注：** 需要在vite.config.js中开启defineModel。

```ts

{
    defineModel:true, // 开启defineModel的使用
}
    
```

- defineOptions,vue3.3中新增加了defineOption用来定义一些属性

```vue
defineOptions({
	name:'aComponent',
	inheritAttrs:false
});
```



- toRef和toValue
- toRef进行了增强，可以指出传入函数的方式，同时返回值是不可更改的

```vue
<script setup lang='ts'>
	const count = toRef(() => 0)
    count.value = 100 ; // 注意，这块更改count的值是会报错的
</script>

```

- toValue可以将响应式的值变为普通值，同时支持传递函数的方式	

```vue
<script setup lang='ts'>
	const count = toValue(ref(1)) // 1
    const count2 = toValue(1) // 1
    const count3 = toValue(() => 3) // 1
 </script>

```

> unRef和toValue具备同样的功能，不过注意的是unRef接收参数如果是函数的话，返回值也应该是函数，这种情况下，会破坏用户的代码

```vue
<script setup lang='ts'>
	const unRefCount = unRef(() => 1) // () => 1
</script>
```



