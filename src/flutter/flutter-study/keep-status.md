## 实现保存状态（二）

### 案例代码
> main.dart 入口页面
```dart
import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_app/keep-views/first_page.dart';
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
      home: MyHomePage(title: 'test'),
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
    // TODO: implement initState
    super.initState();

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 0,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Container(
        child: FirstPage(),  
      ),
    );
  }
}

```
> first_page.dart
```dart
/// first_page.dart
import 'package:flutter/material.dart';

import './recommend_page.dart';
import './vip_page.dart';
import './novel_page.dart';
import './live_page.dart';

class _TabData {
  final Widget tab;
  final Widget body;
  _TabData({required this.tab, required this.body});
}

final _tabDataList = <_TabData>[
  _TabData(tab: Text('推荐'), body: RecommendPage()),
  _TabData(tab: Text('VIP'), body: VipPage()),
  _TabData(tab: Text('小说'), body: NovelPage()),
  _TabData(tab: Text('直播'), body: LivePage())
];

class FirstPage extends StatefulWidget {
  @override
  _FirstPageState createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage>
     {
  final tabBarList = _tabDataList.map((item) => item.tab).toList();
  final tabBarViewList = _tabDataList.map((item) => item.body).toList();

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: tabBarList.length,
      child: Column(
        children: <Widget>[
          Container(
            width: double.infinity,
            height: 80,
            padding: EdgeInsets.fromLTRB(20, 24, 0, 0),
            alignment: Alignment.centerLeft,
            color: Colors.black,
            child: TabBar(
                isScrollable: true,
                indicatorColor: Colors.red,
                indicatorSize: TabBarIndicatorSize.label,
                unselectedLabelColor: Colors.white,
                unselectedLabelStyle: TextStyle(fontSize: 18),
                labelColor: Colors.red,
                labelStyle: TextStyle(fontSize: 20),
                tabs: tabBarList),
          ),
          Expanded(
              child: TabBarView(
            children: tabBarViewList,
            // physics: NeverScrollableScrollPhysics(), // 禁止滑动
          ))
        ],
      ));
  }

  // with AutomaticKeepAliveClientMixin
  // bool get wantKeepAlive => true;
}

```

> live_page.dart 直播页面
```dart
/// Live_page.dart
import 'package:flutter/material.dart';

class LivePage extends StatefulWidget {
  @override
  _LivePageState createState() => _LivePageState();
}

class _LivePageState extends State<LivePage> with AutomaticKeepAliveClientMixin{
  int count = 0;

  void add() {
    setState(() {
      count++;
    });
  }

  @override
  void initState() {
    super.initState();
    print('Live initState');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Text('首页在线: ${count}', style: TextStyle(fontSize: 30))),
        floatingActionButton: FloatingActionButton(
          onPressed: add,
          child: Icon(Icons.add),
        ));
  }
  
  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
  @override
  void activate() {
    print('actively ;');
    // TODO: implement activate
    super.activate();
  }
}

```
> novel_page.dart 小说页面
```dart
/// Novel_page.dart
import 'package:flutter/material.dart';

class NovelPage extends StatefulWidget {
  @override
  _NovelPageState createState() => _NovelPageState();
}

class _NovelPageState extends State<NovelPage> {
  int count = 0;

  void add() {
    setState(() {
      count++;
    });
  }

  @override
  void initState() {
    super.initState();
    print('Novel initState');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body:
            Center(child: Text('首页推荐: $count', style: TextStyle(fontSize: 30))),
        floatingActionButton: FloatingActionButton(
          onPressed: add,
          child: Icon(Icons.add),
        ));
  }
}

```
> recommend_page.dart 推荐页面
```dart
/// recommend_page.dart
import 'package:flutter/material.dart';

class RecommendPage extends StatefulWidget {
  @override
  State<RecommendPage> createState() => _RecommendPageState();
}

class _RecommendPageState extends State<RecommendPage>
    with AutomaticKeepAliveClientMixin {
  int count = 0;

  void add() {
    setState(() {
      count++;
    });
  }

  @override
  void initState() {
    super.initState();
    print('recommend initState');
  }

  bool get wantKeepAlive => true;
  @override
  Widget build(BuildContext context) {
    super.build(context); // 重要：确保调用 super.build
    print('recommend_page-build');
    return Scaffold(
        body:
            Center(child: Text('首页推荐: $count', style: TextStyle(fontSize: 30))),
        floatingActionButton: FloatingActionButton(
          onPressed: add,
          child: Icon(Icons.add),
        ));
  }
}

```
> vip_page.dart VIP页面
```dart
/// Vip_page.dart
import 'package:flutter/material.dart';

class VipPage extends StatefulWidget {
 @override
 State<VipPage> createState() => _VipPageState();
}

class _VipPageState extends State<VipPage> with AutomaticKeepAliveClientMixin  {
 int count = 0;

 void add() {
  setState(() {
    count++;
  });
 }
 
 @override
 void initState() {
  super.initState();
  print('Vip initState');
 }

 @override
 Widget build(BuildContext context) {
 return Scaffold(
  body:Center(
   child: Text('首页VIP: $count', style: TextStyle(fontSize: 30)),
  ),
  floatingActionButton: FloatingActionButton(
   onPressed: add,
   child: Icon(Icons.add),
  ));
 }
 
  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
}
```

