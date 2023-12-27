# flutter中实现flutter与h5页面的双向通信
- 导包
再pubspec.yaml中引入webview_flutter
```yaml
dependencies:
  webview_flutter: ^3.0.0
```
> 在dependencies的下一级

## flutter中的案例代码
```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: true,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String jsStr = 'default' ;
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  void changeJsStr(String newJsStr ){
    setState(() {
      jsStr = newJsStr;
    });
  }

  WebViewController? webViewController;
  // http://192.168.109.227:5500/h5/index.html
  final url = 'http://192.168.109.227:5500/h5/index.html';
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Container(
        alignment: Alignment.topLeft,
        child: Column(
          children: [
          Container(
            color: Colors.red,
            child:  Row(children: [
              Expanded(child: Container(color: Colors.blueAccent,child:  Text(jsStr),)),
              Expanded(child: Container(color: Colors.cyanAccent,child: const Text('b'),)),
              Expanded(child: Container(color: Colors.amberAccent,child:const Text('c'),)),
            ],),
          ),
        
        Expanded(child: Container(
          color: Colors.red,
          alignment: Alignment.topLeft,
          width: double.infinity,
          child: WebView( 
              initialUrl: url, 
              javascriptMode: JavascriptMode.unrestricted, 
              javascriptChannels: { 
                JavascriptChannel( 
                    name: 'flutterJSBridge', 
                    onMessageReceived: (JavascriptMessage message) { 
                      changeJsStr(message.message);
                      print(message.message); 
                    }) 
              }, 
              onWebViewCreated: (WebViewController w) { 
                webViewController = w; 
                w.runJavascript("window.flutterJSBridge.sendData(${jsonEncode(json)})");
                // w.runJavaScript("widnow");
              }, 
            ) ,
        ))
      ]),

      ),
    );
  }
}

```
## flutter中核心代码
```dart
WebView( 
    initialUrl: url,  //嵌套页面的地址  此处默认是https协议，http会出现错误，下面有对应的解决版本
    javascriptMode: JavascriptMode.unrestricted,  // 开启网页中运行javascript脚本的开关
    javascriptChannels: { 
      JavascriptChannel( 
        name: 'flutterJSBridge',  //给javascriptChannel通道起名，在javascript中通过此名称可以调用postMessage方法来给flutter传递数据
        // 用于接收来自h5页面的数据
        onMessageReceived: (JavascriptMessage message) { 
            changeJsStr(message.message);
            print(message.message); 
        }) 
    }, 
    // webView创建的时候执行的钩子回调
    onWebViewCreated: (WebViewController w) { 
    webViewController = w; 
    // 执行javascript中的flutterJSBridge.sendData方法并传递数据
    w.runJavascript("window.flutterJSBridge.sendData(${jsonEncode(json)})");
    // w.runJavaScript("widnow");
    }, 
) 
```
## html中的案例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>h5页面</h1>
    <button id="btn">点击一下</button>
    <div id="content">
    </div>
    <script>
        // 如何是在flutter环境中的h5调用postMessage代码，给flutter传递数据
        if (window.flutterJSBridge?.postMessage) {
            flutterJSBridge.postMessage('Hello World being called from Javascript code');
        }
        let count = 0;
        btn.onclick = function () {
            flutterJSBridge.postMessage(`点了第${count++}下`);
        }
        // 注册flutterJSBridge方法，这里面的方法有flutter触发，执行对应的方法，将参数回传给h5
        window.flutterJSBridge = {
          // 
            sendData: (data) => {
                content.innerHTML = JSON.stringify(data)
                alert(data)
            }
        }
    </script>
</body>
</html>
```


## flutter android Webview 打开网页错误ERR_CLEARTEXT_NOT_PERMITTED 、 net:ERR_CACHE_MISS

当你在Flutter应用中，使用WebView尝试打开的网页时，android环境可能会遇一些问题，默认只能使用https。http明文禁止通信的

### 问题一：提示"ERR_CLEARTEXT_NOT_PERMITTED"错误。
原因：Android 9及更高版本，默认情况下，禁止应用程序通过非安全的明文HTTP连接进行网络通信。为了解决这个问题，你可以采取以下三种方法之一：


### 方法一：使用安全的HTTPS连接
- 将你的网页迁移到使用HTTPS连接。这是更安全的连接方式，并且不会触发"ERR_CLEARTEXT_NOT_PERMITTED"错误。

方法二：配置网络安全性
- 在Flutter项目的`android/app/src/main/res`目录下创建xml目录以及名为`network_security_config.xml`的XML文件。

- 在`network_security_config.xml`文件中添加以下内容：

 
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>
```
 在`android/app/src/main/AndroidManifest.xml`文件中的`application`标签下添加以下行：
```xml
android:networkSecurityConfig="@xml/network_security_config"
```
![Alt text](/assets/flutter_h5_channel/1.png)

### 方案三 `application`标签下添加usesCleartextTraffic
在`android/app/src/main/AndroidManifest.xml`文件中的`application`标签下添加以下行：
android:usesCleartextTraffic="true"

![Alt text](/assets/flutter_h5_channel/2.png)
- 保存文件并重新编译Flutter应用，如此你的flutter android 网页应用映射可以了。

> **备注：**本人亲测第二种方法，好使且简单，推荐使用。
### 问题二：提示错误 net:ERR_CACHE_MISS
解决方法：android/app/src/main/AndroidManifest.xml中加联网权限
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```



## 采用webview_flutter4.0.0及以上的方式
- 导包
再pubspec.yaml中引入webview_flutter
```yaml
dependencies:
  webview_flutter: ^4.0.0
```

## 小案例完整代码
```dart
import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: true,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: VideoPlayer(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String jsStr = 'default';
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  void changeJsStr(String newJsStr) {
    setState(() {
      jsStr = newJsStr;
    });
  }
  bool status = false;
  void tapFn() {
    if (status == true) {
      // 强制竖屏
      SystemChrome.setPreferredOrientations(
          [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);
    } else {
      // 强制横屏
      SystemChrome.setPreferredOrientations(
          [DeviceOrientation.landscapeLeft, DeviceOrientation.landscapeRight]);
    }
    status = !status;
  }

  WebViewController? webViewController;
  // http://192.168.109.227:5500/h5/index.html
  final url = 'https://duoju.vip/vodplay/99783-2-1.html';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Container(
        alignment: Alignment.topLeft,
        child: Column(children: [
          Container(
            color: Colors.red,
            child: Row(
              children: [
                Expanded(
                    child: GestureDetector(
                  onTap: tapFn,
                  child: Container(
                    color: Colors.blueAccent,
                    child: Text(jsStr),
                  ),
                )),
                Expanded(
                    child: Container(
                  color: Colors.cyanAccent,
                  child: const Text('b'),
                )),
                Expanded(
                    child: Container(
                  color: Colors.amberAccent,
                  child: const Text('c'),
                )),
              ],
            ),
          ),
          Expanded(
              child: Container(
                  color: Colors.red,
                  alignment: Alignment.topLeft,
                  width: double.infinity,
                  child: VideoPlayer()
                  
          ))
        ]),
      ),
    );
  }
}

class VideoPlayer extends StatefulWidget {
  @override
  _VideoPlayerState createState() => _VideoPlayerState();
}

class _VideoPlayerState extends State<VideoPlayer> {
  late WebViewController controller;
  @override
  void initState() {
    super.initState();
    controller = createController();
  }

  // final url = 'https://www.douyin.com/';
  // final url = 'https://duoju.vip/';
  final url = 'http://192.168.109.227:5050/';

  WebViewController createController() {
    WebViewController _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0x00000000))
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (int progress) {
            debugPrint('WebView is loading (progress : $progress%)');
          },
          onPageStarted: (String url) {
            print(url);
          },
          onPageFinished: (String url) {
            print(url);
          },
          onWebResourceError: (WebResourceError error) {
            print('error:${error}');
          },
          onNavigationRequest: (NavigationRequest request) {
            // if (request.url.startsWith('https://www.youtube.com/')) {
            //   return NavigationDecision.prevent;
            // }
            return NavigationDecision.navigate;
          },
        ),
      )// Flutter会注册到window上通过window.Flutter.postMessage方法来在h5中给flutter传递参数
      ..addJavaScriptChannel("Flutter", onMessageReceived: (message) {
        print(message.message);
      })
      ..loadRequest(Uri.parse(url));

    return _controller;
  }

  bool status = false;
  void xuanzhuanTop() {
    if (status == true) {
      // 强制竖屏
      SystemChrome.setPreferredOrientations(
          [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);
    } else {
      // 强制横屏
      SystemChrome.setPreferredOrientations(
          [DeviceOrientation.landscapeLeft, DeviceOrientation.landscapeRight]);
    }

    status = !status;
  }

  // https://dagongren1.com/play/118034-1-1.html
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(
            '视频',
            style: TextStyle(fontSize: 10),
          ),
          toolbarHeight: 20,
          actions: [
            GestureDetector(
              onTap: xuanzhuanTop,
              child: Container(
                  width: 20,
                  // padding: EdgeInsets.only(right: 50),
                  margin: EdgeInsets.only(right: 30),
                  child: Icon(
                    Icons.loop_sharp,
                  )),
            )
          ]),
      body: Container(
          child: Column(
        children: [
          ElevatedButton(
              onPressed: () {
                // 在flutter里面调用h5方法给h5传递参数
                controller
                    .runJavaScript('window.flutterJSBridge.sendData(123);');
              },
              child: Text('send')),
          Expanded(
              child: Container(
                child: WebViewWidget(controller: controller),
              )
          ),
        ],
      )),
      
    );
  }
}

```

## h5中的代码
```js

window.flutterJSBridge = {
  sendData: (data) => {
    console.log(data)
  }
}

const handleClick = () => {
  console.log(window)
  window.Flutter.postMessage('aaaaaaaaaaaaaaaa')
}
```

## 核心代码
- 创建webView控制器
```dart
WebViewController _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0x00000000))
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (int progress) {
            debugPrint('WebView is loading (progress : $progress%)');
          },
          onPageStarted: (String url) {
            print(url);
          },
          onPageFinished: (String url) {
            print(url);
          },
          onWebResourceError: (WebResourceError error) {
            print('error:${error}');
          },
          onNavigationRequest: (NavigationRequest request) {
            // if (request.url.startsWith('https://www.youtube.com/')) {
            //   return NavigationDecision.prevent;
            // }
            return NavigationDecision.navigate;
          },
        ),
      )// Flutter会注册到window上通过window.Flutter.postMessage方法来在h5中给flutter传递参数
      ..addJavaScriptChannel("Flutter", onMessageReceived: (message) {
        print(message.message);
      })
      ..loadRequest(Uri.parse(url));
```
- h5给flutter发送数据
>  "Flutter"这个自定义的名称会注册到window上的属性，通过window.Flutter.postMessage方法来在h5中给flutter传递参数
```dart
_controller.addJavaScriptChannel("Flutter", onMessageReceived: (message) {
  print(message.message);
})
```
- flutter发送数据
```dart
  // 在flutter中调用h5的方法，给h5传递参数
 _controller.runJavaScript('window.flutterJSBridge.sendData(123);');
```