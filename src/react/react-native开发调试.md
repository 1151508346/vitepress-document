# react-native 开发调试

## 1、安装 react-devtools

```bash
npm install -g react-devtools
```

## 2、启动 react-native 项目

> 启动项目之后会有一个 node 的进程（控制台），可以看到当前项目的运行情况
>
> ![image-20240928153107689](/assets/react-native开发调试/image-20240928153107689.png)

## 3、打开开发者菜单

方案 1. 使用 shift + d

方案 2. d

方案 3. adb shell input keyevent 82 (手机不同可能吊不起来开发者菜单)

> 以上三种方案均可，具体根据手机不同可能会出现差异

## 4、开启 debug 模式，点击最下面的 Debug 就会变为 Stop Debugging，再次吊起来开发者菜单并点击 show element inspector 进行审查元素

![image-20240928153253732](/assets/react-native开发调试/image-20240928153253732.png)

## 5、启动 react-devtools 调试工具,在 cmd 或者终端运行

```bash
react-devtools
```

![image-20240928154606314](/assets/react-native开发调试/image-20240928154606314.png)

![image-20240928154632580](/assets/react-native开发调试/image-20240928154632580.png)

## 6、将如下此窗口进行聚焦（鼠标点击一下即可），按键盘的 r 键或者 shift+D 进行 reload

![image-20240928154845450](/assets/react-native开发调试/image-20240928154845450.png)

## 7、至此手机或模拟器于 react-devtools 调试工具进行关联上了

  ![image-20240928155022004](/assets/react-native开发调试/image-20240928155022004.png)

  ![image-20240928155055923](/assets/react-native开发调试/image-20240928155055923.png)

**备注： 真机和模拟器均可。**

**注意事项： 如果上述操作不好使在cmd或者终端执行如下命令,重复第6部进行reolad即可。**
```bash
adb reverse tcp:8097 tcp:8097
```