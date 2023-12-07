## 1. 安装node

## 2. 安装java

> 目前我用的版本是1.8

- 配置环境变量

  > 变量名：JAVA_HOME
  > 
  > 变量名：D:\Program Files\Java\jdk1.8.0_181

   > 变量名：CLASSPATH
  > 
  > 变量名：.
  - 将JAVA_HOME 添加到Path路径中
  ![JAVA_HOME](/assets/cordoval-img/path-java.png)

## 3.安装android studio

	- 下载 sdk platforms

![sdk-latform](/assets/cordoval-img/sdk-platform.png)


- 下载sdk tools

![android-build-tools](/assets/cordoval-img/android-build-tools.png)



  - 配置环境变量

    - **备注**：ANDROID_HOME和 ANDROID_SDK_ROOT  对应的值是一样的 
    
    > 变量名：ANDROID_HOME
    >
    > 变量值：D:\Program Files\android_sdk


    - **备注**：D:\Program Files\android_sdk 路径是上面安装sdk 工具所配置的路径
    - 将ANDROID_HOMET 配置到Path路径中
    - ![Alt text](/assets/flutter/image.png)
    - 
    - **备注**：下面的配置可能会有多余，目前我就是这么操作的没有问题

> %ANDROID_HOME%\platform-tools
> 
> %ANDROID_HOME%\emulator
> 
> %ANDROID_HOME%\tools\bin
> 
> %ANDROID_HOME%\tools
> 
> %ANDROID_HOME%\cmdline-tools\bin


- 下载 gradle

  下载地址 : https://services.gradle.org/distributions/

> 我下载的是 7.5的（因为flutter创建的项目依赖7.5的） ,不要下载过高的版本，会出现一些不可预测的错误。

 - 配置环境变量

> 变量名：GRADLE_USER_HOME
>
> 变量值：D:\Program Files\android_sdk
> 
>  %GRADLE_USER_HOME%\bin
> 

​	![GRADLE_USER_HOME](/assets/cordoval-img/path-gradle.png)
 
> 将加载后的zip压缩包放在一个不包含英文的目录下后面需要配置使用

## 4. 下载flutter

    下载地址 : https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.16.1-stable.zip
  - 安装一下（不要安装在有中文的目录下）
  - 配置环境变量
  - ![Alt text](/assets/flutter/flutter-env.png)
  - 验证安装和环境变量的配置
  - ![Alt text](/assets/flutter/flutter-version.png)
  
## 5. 安装dark

  - **备注**：有些flutter中内涵了dark-sdk，如何有的话这部分可以省略
  - 下载地址 : https://dart.dev/get-dart/archive

     ![Alt text](/assets/flutter/dart-version.png)
## 6. VSCode配置
    - 插件安装
  -  
    - ![Alt text](/assets/flutter/vscode-flutter.png)
    - ![Alt text](/assets/flutter/vscode-dart.png)

    - 创建项目
    - ctrl+shift+P ,输入flutter，选择如下项，进行flutter创建
​	 - ![Alt text](/assets/flutter/flutter-project2.png)
    - 可以选择第一个（第一个是一个带有小案例的应用）
    - ![Alt text](/assets/flutter/flutter-project.png)
    - 配置项目
      - 1. 找到build.gradle文件 
      - ![Alt text](/assets/flutter/gradle.png)
      - 
      > android/build.gradle
      - 2. 修改下载对应包的镜像为阿里镜像，（因为原地址下载很慢，容易失败）
      - ![Alt text](/assets/flutter/gradle-config.png)
      ```
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/nexis/content/groups/public' }
      ```
      - 3. 找到gradle-wrapper.properties文件
      >  android/gradle-wrapper.properties
      将distributionUrl配置的网络地址改为本地的，让其从本地加载，解决下载过慢的问题,容易失败
    ```
    distributionBase=GRADLE_USER_HOME
    distributionPath=wrapper/dists
    zipStoreBase=GRADLE_USER_HOME
    zipStorePath=wrapper/dists
    distributionUrl=file:///D:/gradle-7.5-all.zip
    #distributionUrl=https\://services.gradle.org/distributions/gradle-7.5-all.zip 
    ```
      - 4 使用命令或者vscode调试模式进行运行
        - 第一种方式，命令行输入： flutter run android
        - 第二种方式，调试模式，点击launsh.json 选择web或者安卓机

















