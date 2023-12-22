# flutter学习

## 获取外部目录

Flutter应用程序默认只能访问应用程序的沙盒目录，而无法直接访问其他目录。这是出于安全和隐私的考虑，以确保应用程序无法访问用户设备上的敏感数据。

1. 开启访问权限，在AndroidManifest.xml文件中添加

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

2. 请求文件系统权限：在Android和iOS上，你可以请求文件系统权限以获得更广泛的访问权限。使用`permission_handler`库可以简化权限请求的过程。首先，在`pubspec.yaml`文件中添加`permission_handler`依赖：

```yaml
dependencies:
  permission_handler: ^11.0.1
```

```dart
import 'package:permission_handler/permission_handler.dart';

PermissionStatus status = await Permission.storage.request();
if (status.isGranted) {
  // 执行对其他目录的访问操作
} else {
  // 没有获得权限，处理相应逻辑
}
```

上述代码使用`request()`方法请求文件系统权限，并通过`isGranted`属性检查是否获得了权限。如果权限被授予，你就可以执行对其他目录的访问操作。

需要注意的是，在请求权限时要遵循相关的隐私政策和法规要求，并向用户解释为什么需要访问其他目录。

请记住，尽管这些方法可以在一定程度上访问其他目录，但由于Flutter是跨平台框架，不同平台上的实现方式可能会有所不同。因此，在使用这些方法时，需要了解目标平台的特定限制和需求，并确保你的代码在各个平台上的可移植性和兼容性。


## 获取指定目录下的文件列表

```dart

void getDirList(){
    
    var path = '/storage/emulated/0/Android/data/com.test.flutter_app3';
  // await getExternalStorageDirectory() == path
  // getExternalStorageDirectory() 用来获取当前应用的存储目录，默认只有这个目录的访问权限
    Directory dir = Directory(path);
    // directory.
    List<FileSystemEntity> files = dir.listSync().toList();
    List<String> l= files.map((e){
    return e.path;
    }).toList();
    print(l);
}
```
## 实现导航切换动画效果
```dart


import 'package:flutter/material.dart';
//渐变效果
class CustomRouteJianBian extends PageRouteBuilder{
  final Widget widget;
  CustomRouteJianBian(this.widget)
      :super(
      transitionDuration:const Duration(seconds:1),
      pageBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2){
        return widget;
      },
      transitionsBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child){
        return FadeTransition(
          opacity: Tween(begin:0.0,end :2.0).animate(CurvedAnimation(
              parent:animation1,
              curve:Curves.fastOutSlowIn
          )),
          child: child,
        );
      }
  );
}


//缩放效果
class CustomRouteZoom extends PageRouteBuilder{
  final Widget widget;
  CustomRouteZoom(this.widget)
      :super(
      transitionDuration:const Duration(seconds:1),
      pageBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2){
        return widget;
      },
      transitionsBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child){

        return ScaleTransition(
            scale:Tween(begin:0.0,end:1.0).animate(CurvedAnimation(
                parent:animation1,
                curve: Curves.fastOutSlowIn
            )),
            child:child
        );

      }
  );
}


//旋转+缩放效果
class CustomRouteRotateZoom extends PageRouteBuilder{
  final Widget widget;
  CustomRouteRotateZoom(this.widget)
      :super(
      transitionDuration:const Duration(seconds:1),
      pageBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2){
        return widget;
      },
      transitionsBuilder:(
          BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child){

        return RotationTransition(
            turns:Tween(begin:0.0,end:1.0)
                .animate(CurvedAnimation(
                parent: animation1,
                curve: Curves.fastOutSlowIn
            )),

            child:ScaleTransition(
              scale:Tween(begin: 0.0,end:1.0)
                  .animate(CurvedAnimation(
                  parent: animation1,
                  curve:Curves.fastOutSlowIn
              )),
              child: child,
            )
        );

      }
  );
}



//滑动效果
class CustomRouteSlide extends PageRouteBuilder {
  final Widget widget;

  CustomRouteSlide(this.widget)
      :super(
      transitionDuration: const Duration(seconds: 1),
      pageBuilder: (BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2) {
        return widget;
      },
      transitionsBuilder: (BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child) {
        return SlideTransition(
          position: Tween<Offset>(
              begin: Offset(-1.0, 0.0),
              end: Offset(0.0, 0.0)
          )
              .animate(CurvedAnimation(
              parent: animation1,
              curve: Curves.fastOutSlowIn
          )),
          child: child,

        );
      }
  );
}
```

- 使用
```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
// import 'package:flutter_pdfview/flutter_pdfview.dart';
import 'dart:io';
// import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
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

class CustomRouteSlide extends PageRouteBuilder {
  final Widget widget;

  CustomRouteSlide(this.widget)
      :super(
      transitionDuration: const Duration(seconds: 1),
      pageBuilder: (BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2) {
        return widget;
      },
      transitionsBuilder: (BuildContext context,
          Animation<double> animation1,
          Animation<double> animation2,
          Widget child) {
        return SlideTransition(
          position: Tween<Offset>(
              begin: Offset(1.0, 0.0),
              end: Offset(0.0, 0.0)
          )
              .animate(CurvedAnimation(
              parent: animation1,
              curve: Curves.fastOutSlowIn
          )),
          child: child,

        );
      }
  );
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void initState() {
    super.initState();
  }

  goToSecond(context) {
    return () {
      // Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context){
      //   return Second();
      // }));
      Navigator.of(context).push(CustomRouteSlide(Second())); //改为现在
    };
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: GestureDetector(
          onTap: goToSecond(context),
          child: const Center(
            child: Text('1页面'),
          )),
    );
  }
}

class Second extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        // toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Center(child: Text('second')),
    );
  }
}


```

## 获取通讯录
### 导包
```yaml
  permission_handler: ^11.0.1 # 获取用户权限的包
  contacts_service: ^0.6.3  #获取联系人
```
### 开启访问权限，在AndroidManifest.xml文件中添加
```xml
  <!--联系人-->
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
```
### 核心代码
- 请求权限
```dart
 PermissionStatus status = await Permission.contacts.request();
```
> Permission.contacts.request(),返回值是Future&lt;PermissionStatus&gt;
- 获取通讯录列表
```dart
 List<Contact> contacts = await ContactsService.getContacts();
```
> ContactsService.getContacts(),返回值是Future&lt;Contact&gt;,包含了设备上的通讯录信息
### 使用

```dart
// ignore_for_file: unused_local_variable

// import 'dart:convert';

import 'package:flutter/material.dart';
// import 'package:webview_flutter/webview_flutter.dart';
// import 'package:flutter_pdfview/flutter_pdfview.dart';
// import 'dart:io';
// import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
// import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';
import 'package:contacts_service/contacts_service.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
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
  @override
  void initState() {
    super.initState();
    getContact();
  }

  List<ListItem> items = [];
  // 获取目录
  void getContact() async {
    // 请求获取通讯录的权限
    PermissionStatus status = await Permission.contacts.request();
    if (status.isGranted) {
      print('重新获取');
      List<Map> contactList = await fetchContacts();
      setState(() {
        List<ListItem> temp = [];
        print(contactList);
        contactList.forEach((element) {
          temp.add(MessageItem('${element['name']}', '${element['phone']}'));
        });
        items = temp;
      });
      // 获取通讯录数据的代码
    } else {
      print('拒绝权限');
      // 用户拒绝了权限请求，你可以提醒用户打开应用的权限设置
    }
  }

  Future<List<Map>> fetchContacts() async {
    // 获取通讯录列表
    List<Contact> contacts = await ContactsService.getContacts();
    List<Map> list = [];
    for (var contact in contacts) {
      // Map m = (contact as Contact).toMap(); 将Contact类型转成map类型，这块可以不用强转，是因为没有提示
      Map map = {};
      print('Name: ${contact.displayName}');
      var phones = contact.phones ?? [];
      String? num = phones.length > 0 ? phones[0].value : '';
      var emails = contact.emails ?? [];
      map['name'] = contact.displayName;
      map['phone'] = num;
      map['email'] = emails.length > 0 ? emails[0].value : '';
      list.add(map);
    }
    return list;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: GestureDetector(
        onTap: () {},
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            final item = items[index];
            return ListTile(
              title: item.buildTitle(context),
              subtitle: item.buildSubtitle(context),
            );
          },
        ),
      ),
    );
  }
}

abstract class ListItem {
  /// The title line to show in a list item.
  Widget buildTitle(BuildContext context);

  /// The subtitle line, if any, to show in a list item.
  Widget buildSubtitle(BuildContext context);
}

class MessageItem implements ListItem {
  final String sender;
  final String body;

  MessageItem(this.sender, this.body);

  @override
  Widget buildTitle(BuildContext context) => Text(sender);

  @override
  Widget buildSubtitle(BuildContext context) => Text(body);
}

```
## 检查当前设备是否开启VPN


```dart
import 'dart:io';
class CheckVpnConnectionStatus {
  /// 如果设备具有 VPN 连接，返回 true
  static Future<bool> isVpnActive() async {
    bool isVpnActive;
    List<NetworkInterface> interfaces = await NetworkInterface.list(
        includeLoopback: false, type: InternetAddressType.any);
    interfaces.isNotEmpty
        ? isVpnActive = (interfaces.any((interface) {
          return result(interface);
        }))
        : isVpnActive = false;
    return isVpnActive;
  }
  static bool result(interface) {
    return interface.name.contains("tun") ||
        interface.name.contains("ppp") ||
        interface.name.contains("pptp");
  }
}
```

