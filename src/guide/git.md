# Git高级操作

## 
![](/assets/git/share_a77dc154f4222686ccadf54bd3fcf92a.png)
![](/assets/git/share_a9363254e4c23363b5ccf91c1525e59f.png)
![](/assets/git/share_899dad11ce780c790a32c8cee5cfd00a.png)
![](/assets/git/share_2ac77faaae8f27fa37a326fa61599f10.png)
![](/assets/git/share_d19bbc0ba783022331272f1510e772e2.png)
![](/assets/git/share_8c58251edeee72aa523a653f04dd69bc.png)
![](/assets/git/share_514202da106ec9ddaecc6972363eeac7.png)
![](/assets/git/share_1da830765fee3238ba40a304c26ba643.png)
![](/assets/git/share_7fdd7b9afabcb283b3158fe65a73a40c.png)
![](/assets/git/share_527346874f103af61c9fb746787472a0.png)
![](/assets/git/share_26993c9d139df49a0d16a3664581004f.png)
![](/assets/git/share_4d99131f4aad0e286abf61093e392521.png)

## git 获取当前分支
> 例如当前分支是test


| 命令 | 输出示例 | 说明 |
|----|----|----|
|git rev-parse --abbrev-ref HEAD |	test                |	获取当前分支名（简称）|
|git symbolic-ref --short HEAD   |	test                |	同上，等价于 --abbrev-ref|
|git symbolic-ref HEAD           |	refs/heads/test|	获取完整分支引用路径|
|git rev-parse HEAD              |	560d82eb475831aeb2b16cfca5f512e6225210b7|	获取当前 HEAD 指向的提交哈希(完整)|
|git rev-parse --short HEAD      | 560d82e |	获取当前 HEAD 指向的提交哈希（简短7位）|

## vscode中被git托管之后 新增，修改、删除代码指示器的样式

1. ctrl+shfit+p 
2. 输入 Preferences: Open Settings (JSON)

> 打开.settting.json

  ```json
  "workbench.colorCustomizations": {
      "gitDecoration.untrackedResourceForeground": "#00FF00", // 未跟踪资源的颜色  （ 例如：新增加的文件）
      "gitDecoration.ignoredResourceForeground": "#ddd", // 忽略资源的颜色 .gitIgnore中增加的文件
      "editorGutter.modifiedBackground": "#FFA500", // 编辑器内修改行标记的颜色
      "editorGutter.addedBackground": "#00ff00",// 编辑器内添加行标记的颜色
      "editorGutter.deletedBackground": "#FF4500", // 编辑器内删除行标记的颜色
    }
  ```
  ## 配置本地git的ssh
  ``` sh
  ssh-keygen -t rsa -b 4096 -C "1151508346@qq.com"
  ```





