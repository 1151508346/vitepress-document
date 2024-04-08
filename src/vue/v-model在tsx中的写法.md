# v-model在tsx中的写法
 - vue写法
```vue
<input v-model.trim="keyword"/>
```
 
 - tsx写法
 
 ```tsx
<input v-model={[keyword,['trim']]}/>
 ```
 
 
- vue写法
```vue
<input v-model:title="keyword"/>
```
- tsx写法
```tsx
<input v-model:title={keyword}/>
```
或者
```tsx
<input v-model={[keyword,'title']}/>
```