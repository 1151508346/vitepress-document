# react-native 踩坑解决方案
## 1、解决 React Native WebView 加载 H5 链接出现 _CONNECTION_REFUSED 错误
> 当 React Native WebView 加载 H5 链接时出现 _CONNECTION_REFUSED 错误，通常表示网络连接被拒绝。以下是可能的原因和解决方案：

### 1. 常见原因
- 本地开发服务器问题（如果是本地 H5 页面）
- Android/iOS 网络权限配置问题
- HTTPS/SSL 证书问题
- URL 格式不正确

### 2.设备网络连接问题

### 3. 解决方案
- 检查 URL 和服务器
```jsx
// 确保 URL 正确
<WebView 
  source={{ uri: 'https://example.com' }}  // 确保是完整URL
/>
```
 1. 检查 URL 是否拼写正确
 2. 确保服务器正在运行并可访问
 3. 如果是本地开发服务器，尝试在设备浏览器中访问该 URL
- Android 网络权限配置
AndroidManifest.xml 中添加：

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

<!-- 对于 Android 9+ -->
<application
  android:usesCleartextTraffic="true"
  ...>
```
- iOS ATS 配置
Info.plist 中添加：

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```