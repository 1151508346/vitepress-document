# react-native项目搭建
> 备注：目前我使用的是最新的react-native版本0.72.7,如何版本有所调整，可以适当的调整软件所依赖的版本，在创建react-native项目之后可以看到所依赖的版本
## 1. 安装软件
  1. NodeJs
   > node版本大于等于16（后面创建项目的package.json中有说明）。
  2. JAVA-JDK.11
   > 目前react-native要求下载jdk11版本 （这块使用的react-naitve版本是0.72.7 在后面创建项目的 package.json中有说明）。
  3. Android Studio
  4. 下载gradle 
    - 下载地址：
     1. https://blog.csdn.net/ii950606/article/details/109105402
     2. https://services.gradle.org/distributions/
   > 两个下载地址认选一个，推荐使用第一个，第一个块，但是第一个不全，第二个是官方的下载地址，包含了gradle的所有版本。

   > gradle下载版本8.0.1 在后面创建的项目中的gradle-wrapper.properties文件中有，如果您指定了react-native的版本的话gradle的下载版本要按照项目中所依赖的版本去下载。
## 2. 环境变量配置
  1. node环境变量在安装软件的时候就默认配置好了，。
  - react-native依赖于yarn，所以需要下载yarn
  ```cmd
  npm install -g yarn
  ```
  > 全局下载yarn包管理器
  - 安装react-native命令行工具
  ```cmd
  npm install -g react-native-cli 
  ``` 

  2. 配置JDK

  - 在电脑的环境环境变量中创建JAVA_HOME
  ```
  变量名:JAVA_HOME
  变量值:D:\Program Files\Java\jdk-11.0.2
  ```
  **备注** 上面是我电脑的jdk路径，参考即可
  - 将JAVA_HOME配置到系统的path路径中
  ```
  %JAVA_HOME%\bin
  ```
  1. 配置android的SDK
     打开sdk manager，配置sdk路径
  ![Alt text](/assets/react-native/config-sdk-contents.png)

  - 在电脑的环境环境变量中创建ANDROID_HOME
  ```
  变量名:ANDROID_HOME
  变量值:D:\Program Files\android_sdk
  ```
  **备注** 上面是我电脑SDK路径，参考即可

  - 将ANDROID_HOME配置到系统的path路径中
  ```
  %ANDROID_HOME%\platform-tools
  %ANDROID_HOME%\emulator
  %ANDROID_HOME%\tools
  %ANDROID_HOME%\tools\bin
  %ANDROID_HOME%\cmdline-tools\bin
  ```
  1. 配置gradle
  - 在电脑的环境环境变量中创建ANDROID_HOME
  ```
  变量名:GRADLE_USER_HOME
  变量值:D:\Program Files\gradle-8.0.1
  ```
   **备注** 上面是我电脑gradle路径，参考即可

   - 将GRADLE_USER_HOME配置到系统的path路径中
  ```
  %GRADLE_USER_HOME%\bin
  ```
  > 上面操作完成可以使用  react-native doctor来看一下环境配置是否有什么问题。

## 3. 创建项目
  - 创建最新项目
  ```
    react-native init rnApp
  ```
  - 创建指定版本的项目
  > 例如：创建指定本版本0.72.6的项目
  ```cmd
    react-native init rnApp --version 0.72.6 
  ```

  - 项目目录结构
  > ![Alt text](/assets/react-native/contents.png)
## 4. 修改项目相关配置
  - 查看package.json文件可以看到相关依赖版本
  ```json
  {
    "name": "rnapp",
    "version": "0.0.1",
    "private": true,
    "scripts": {
      "android": "react-native run-android",
      "ios": "react-native run-ios",
      "lint": "eslint .",
      "start": "react-native start",
      "test": "jest"
    },
    "dependencies": {
      "react": "18.2.0",
      "react-native": "0.72.7",
      "react-native-webview": "^13.6.3"
    },
    "devDependencies": {
      "@babel/core": "^7.20.0",
      "@babel/preset-env": "^7.20.0",
      "@babel/runtime": "^7.20.0",
      "@react-native/eslint-config": "^0.72.2",
      "@react-native/metro-config": "^0.72.11",
      "@tsconfig/react-native": "^3.0.0",
      "@types/react": "^18.0.24",
      "@types/react-test-renderer": "^18.0.0",
      "babel-jest": "^29.2.1",
      "eslint": "^8.19.0",
      "jest": "^29.2.1",
      "metro-react-native-babel-preset": "0.76.8",
      "prettier": "^2.4.1",
      "react-test-renderer": "18.2.0",
      "typescript": "4.8.4"
    },
    "engines": {
      "node": ">=16"
    }
  }
  ```
  > 可以看到项目依赖的node版本，目前react-native的版本，等相关依赖版本信息
  - 配置仓库镜像，
  找到项目中./android/build.gralde文件
  ```
  buildscript {
      ext {
          // SDK的依赖版本
          buildToolsVersion = "33.0.0" 
          minSdkVersion = 21
          compileSdkVersion = 33
          targetSdkVersion = 33

          // We use NDK 23 which has both M1 support and is the side-by-side NDK version from AGP.
          // ndk版本
          ndkVersion = "23.1.7779620"
      }
      repositories {
          // google()
          // mavenCentral()
          // 将上面maven仓库屏蔽掉
          maven { url 'https://maven.aliyun.com/repository/google' }
          maven { url 'https://maven.aliyun.com/repository/jcenter' }
          maven { url 'https://maven.aliyun.com/nexis/content/groups/public' }
      }
      dependencies {
          classpath("com.android.tools.build:gradle")
          classpath("com.facebook.react:react-native-gradle-plugin")
      }
  }
  ```
  屏蔽google()和mavenCentral(),添加如下代码（为了提高下载速度的，这步可以省略的）
  ```
  maven { url 'https://maven.aliyun.com/repository/google' }
  maven { url 'https://maven.aliyun.com/repository/jcenter' }
  maven { url 'https://maven.aliyun.com/nexis/content/groups/public' }
  ```
  - 上面我们能看到依赖的sdk和ndk的版本，接下来打开Android Studio进行对应版本的安装
  ![Alt text](/assets/react-native/sdk-manager.png)
  ![Alt text](/assets/react-native/sdk-version.png)
  ![Alt text](/assets/react-native/sdk-version-1.png)
  ![Alt text](/assets/react-native/sdk-tool.png)
  ![Alt text](/assets/react-native/ndk.png)
  > 也许可能有些包是多余的，我也是第一次搭建，踩过的坑，反正就一股脑的下载了
  - 配置gradle压缩包路径
  1. 找到项目中的./android/gradle/wrapper/gradle-wrapper.properties文件
  ```
  distributionBase=GRADLE_USER_HOME
  distributionPath=wrapper/dists
  #distributionUrl=https\://services.gradle.org/distributions/gradle-8.0.1-all.zip
  distributionUrl=file:///D:/gradle-8.0.1-all.zip
  # networkTimeout=10000
  zipStoreBase=GRADLE_USER_HOME
  zipStorePath=wrapper/dists
  ```
  将distributionUrl后面的网络地址修改为本地的gradle压缩包的地址（为了提升速度，这步可以省略的），再者，可以将networkTimeout屏蔽掉，如何网络不好的情况，容易导致报错下载超时。
  - 至此项目搭建完成，在项目根目录运行如下启动项目了,耐心等待即可。
  **备注**：启动项目之前一定要启动模拟器，或者用手机链接电脑，处于开发者模式，否则会失败。

  ```
  react-native run-android
  ```
  ![Alt text](/assets/react-native/run-result.png)

  **备注** 如果出现sdk找不到的问题，可以在项目中的android目录下创建local.properties文件进行如下配置:
  ```
  sdk.dir=D\:\\Program Files\\android_sdk
  ```
  ![Alt text](/assets/react-native/local.properties.png)
  > 将本地的sdk配置到项目中（如何启动没有问题，这步可以省略）

## 5. 打包
### 生成一个签名密钥
  
  在cmd或者终端下输入以下命令：
  ```bash
  $ keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
  ````
  这条命令会要求你输入密钥库（keystore）和对应密钥的密码，然后设置一些发行相关的信息。最后它会生成一个叫做my-release-key.keystore的密钥库文件。
  密钥库里应该已经生成了一个单独的密钥，有效期为 10000 天。--alias 参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名
  **注意：请记得妥善地保管好你的密钥库文件，一般不要上传到版本库或者其它的地方。**

### 设置 gradle 变量

    1. 把my-release-key.keystore文件放到你工程中的android/app文件夹下。
    2. 编辑~/.gradle/gradle.properties（全局配置，对所有项目有效）或是项目目录/android/gradle.properties（项目配置，只对所在项目有效）。如果没有gradle.properties文件你就自己创建一个，添加如下的代码（注意把其中的****替换为相应密码）

  **注意：~符号表示用户目录，比如 windows 上可能是C:\Users\用户名，而 mac 上可能是/Users/用户名。**

  ```
  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=*****
  MYAPP_RELEASE_KEY_PASSWORD=*****
  ```

  上面的这些会作为 gradle 的变量，在后面的步骤中可以用来给应用签名。

### 把签名配置加入到项目的 gradle 配置中

  编辑你项目目录下的android/app/build.gradle，添加如下的签名配置：

  ```
    ...
    android {
      ...
        defaultConfig { ... }
        signingConfigs {
            release {
                if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                    storeFile file(MYAPP_RELEASE_STORE_FILE)
                    storePassword MYAPP_RELEASE_STORE_PASSWORD
                    keyAlias MYAPP_RELEASE_KEY_ALIAS
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD
                }
            }
        }
        buildTypes {
            release {
                ...
                signingConfig signingConfigs.release
            }
        }
    }
    ...
  ```
### 生成发行 APK 包
  只需在终端中运行以下命令：

    ```
    cd android
    ./gradlew assembleRelease
    ```


  