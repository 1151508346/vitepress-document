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



