# linux零散知识点
## 更改Vim代码缩进长度 
### 更改vim代码缩进长度
> 在vim中，缩进长度默认为8。
> 以下是配置Linux用户的vim缩进长度的步骤。
### 步骤
- 在桌面打开终端（Ubuntu中，Ctrl+Alt+T）。
- 输入 **cd**
- 输入 vim ~/.vimrc
- 输入以下配置：
  
```bash
set ts=4
set expandtab
set autoindent
```