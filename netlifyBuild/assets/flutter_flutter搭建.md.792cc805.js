import{_ as e,a as t,b as a,c as s}from"./chunks/path-gradle.978a580b.js";import{_ as r,c as i,a as o,o as p}from"./app.580fb14e.js";var n="/assets/image.7d8c4c86.png",d="/assets/flutter-env.229f4ab6.png",c="/assets/flutter-version.e4354e48.png",u="/assets/dart-version.4aecc2b6.png",_="/assets/vscode-flutter.17c01eed.png",g="/assets/vscode-dart.6199b467.png",m="/assets/flutter-project2.0205dfba.png",h="/assets/flutter-project.04770014.png",A="/assets/gradle.7b5a8d0a.png",b="/assets/gradle-config.ad0c4c4d.png";const R=JSON.parse('{"title":"1. \u5B89\u88C5node","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u5B89\u88C5node","slug":"_1-\u5B89\u88C5node"},{"level":2,"title":"2. \u5B89\u88C5java","slug":"_2-\u5B89\u88C5java"},{"level":2,"title":"3.\u5B89\u88C5android studio","slug":"_3-\u5B89\u88C5android-studio"},{"level":2,"title":"4. \u4E0B\u8F7Dflutter","slug":"_4-\u4E0B\u8F7Dflutter"},{"level":2,"title":"5. \u5B89\u88C5dark","slug":"_5-\u5B89\u88C5dark"},{"level":2,"title":"6. VSCode\u914D\u7F6E","slug":"_6-vscode\u914D\u7F6E"}],"relativePath":"flutter/flutter\u642D\u5EFA.md"}'),v={name:"flutter/flutter\u642D\u5EFA.md"};function f(D,l,k,O,E,C){return p(),i("div",null,l[0]||(l[0]=[o('<h2 id="_1-\u5B89\u88C5node" tabindex="-1">1. \u5B89\u88C5node <a class="header-anchor" href="#_1-\u5B89\u88C5node" aria-hidden="true">#</a></h2><h2 id="_2-\u5B89\u88C5java" tabindex="-1">2. \u5B89\u88C5java <a class="header-anchor" href="#_2-\u5B89\u88C5java" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u524D\u6211\u7528\u7684\u7248\u672C\u662F1.8</p></blockquote><ul><li><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><blockquote><p>\u53D8\u91CF\u540D\uFF1AJAVA_HOME</p><p>\u53D8\u91CF\u540D\uFF1AD:\\Program Files\\Java\\jdk1.8.0_181</p></blockquote><blockquote><p>\u53D8\u91CF\u540D\uFF1ACLASSPATH</p><p>\u53D8\u91CF\u540D\uFF1A.</p></blockquote><ul><li>\u5C06JAVA_HOME \u6DFB\u52A0\u5230Path\u8DEF\u5F84\u4E2D <img src="'+e+`" alt="JAVA_HOME"></li></ul></li></ul><h2 id="_3-\u5B89\u88C5android-studio" tabindex="-1">3.\u5B89\u88C5android studio <a class="header-anchor" href="#_3-\u5B89\u88C5android-studio" aria-hidden="true">#</a></h2><pre><code>- \u4E0B\u8F7D sdk platforms
</code></pre><p><img src="`+t+'" alt="sdk-latform"></p><ul><li>\u4E0B\u8F7Dsdk tools</li></ul><p><img src="'+a+'" alt="android-build-tools"></p><ul><li><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><ul><li><strong>\u5907\u6CE8</strong>\uFF1AANDROID_HOME\u548C ANDROID_SDK_ROOT \u5BF9\u5E94\u7684\u503C\u662F\u4E00\u6837\u7684</li></ul><blockquote><p>\u53D8\u91CF\u540D\uFF1AANDROID_HOME</p><p>\u53D8\u91CF\u503C\uFF1AD:\\Program Files\\android_sdk</p></blockquote><ul><li><strong>\u5907\u6CE8</strong>\uFF1AD:\\Program Files\\android_sdk \u8DEF\u5F84\u662F\u4E0A\u9762\u5B89\u88C5sdk \u5DE5\u5177\u6240\u914D\u7F6E\u7684\u8DEF\u5F84</li><li>\u5C06ANDROID_HOMET \u914D\u7F6E\u5230Path\u8DEF\u5F84\u4E2D</li><li><img src="'+n+'" alt="Alt text"></li><li></li><li><strong>\u5907\u6CE8</strong>\uFF1A\u4E0B\u9762\u7684\u914D\u7F6E\u53EF\u80FD\u4F1A\u6709\u591A\u4F59\uFF0C\u76EE\u524D\u6211\u5C31\u662F\u8FD9\u4E48\u64CD\u4F5C\u7684\u6CA1\u6709\u95EE\u9898</li></ul></li></ul><blockquote><p>%ANDROID_HOME%\\platform-tools</p><p>%ANDROID_HOME%\\emulator</p><p>%ANDROID_HOME%\\tools\\bin</p><p>%ANDROID_HOME%\\tools</p><p>%ANDROID_HOME%\\cmdline-tools\\bin</p></blockquote><ul><li><p>\u4E0B\u8F7D gradle</p><p>\u4E0B\u8F7D\u5730\u5740 : <a href="https://services.gradle.org/distributions/" target="_blank" rel="noopener noreferrer">https://services.gradle.org/distributions/</a></p></li></ul><blockquote><p>\u6211\u4E0B\u8F7D\u7684\u662F 7.5\u7684\uFF08\u56E0\u4E3Aflutter\u521B\u5EFA\u7684\u9879\u76EE\u4F9D\u8D567.5\u7684\uFF09 ,\u4E0D\u8981\u4E0B\u8F7D\u8FC7\u9AD8\u7684\u7248\u672C\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E9B\u4E0D\u53EF\u9884\u6D4B\u7684\u9519\u8BEF\u3002</p></blockquote><ul><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ul><blockquote><p>\u53D8\u91CF\u540D\uFF1AGRADLE_USER_HOME</p><p>\u53D8\u91CF\u503C\uFF1AD:\\Program Files\\android_sdk</p><p>%GRADLE_USER_HOME%\\bin</p></blockquote><p>\u200B <img src="'+s+`" alt="GRADLE_USER_HOME"></p><blockquote><p>\u5C06\u52A0\u8F7D\u540E\u7684zip\u538B\u7F29\u5305\u653E\u5728\u4E00\u4E2A\u4E0D\u5305\u542B\u82F1\u6587\u7684\u76EE\u5F55\u4E0B\u540E\u9762\u9700\u8981\u914D\u7F6E\u4F7F\u7528</p></blockquote><h2 id="_4-\u4E0B\u8F7Dflutter" tabindex="-1">4. \u4E0B\u8F7Dflutter <a class="header-anchor" href="#_4-\u4E0B\u8F7Dflutter" aria-hidden="true">#</a></h2><pre><code>\u4E0B\u8F7D\u5730\u5740 : https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.16.1-stable.zip
</code></pre><ul><li>\u5B89\u88C5\u4E00\u4E0B\uFF08\u4E0D\u8981\u5B89\u88C5\u5728\u6709\u4E2D\u6587\u7684\u76EE\u5F55\u4E0B\uFF09</li><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li><li><img src="`+d+'" alt="Alt text"></li><li>\u9A8C\u8BC1\u5B89\u88C5\u548C\u73AF\u5883\u53D8\u91CF\u7684\u914D\u7F6E</li><li><img src="'+c+'" alt="Alt text"></li></ul><h2 id="_5-\u5B89\u88C5dark" tabindex="-1">5. \u5B89\u88C5dark <a class="header-anchor" href="#_5-\u5B89\u88C5dark" aria-hidden="true">#</a></h2><ul><li><p><strong>\u5907\u6CE8</strong>\uFF1A\u6709\u4E9Bflutter\u4E2D\u5185\u6DB5\u4E86dark-sdk\uFF0C\u5982\u4F55\u6709\u7684\u8BDD\u8FD9\u90E8\u5206\u53EF\u4EE5\u7701\u7565</p></li><li><p>\u4E0B\u8F7D\u5730\u5740 : <a href="https://dart.dev/get-dart/archive" target="_blank" rel="noopener noreferrer">https://dart.dev/get-dart/archive</a></p><p><img src="'+u+`" alt="Alt text"></p></li></ul><h2 id="_6-vscode\u914D\u7F6E" tabindex="-1">6. VSCode\u914D\u7F6E <a class="header-anchor" href="#_6-vscode\u914D\u7F6E" aria-hidden="true">#</a></h2><pre><code>- \u63D2\u4EF6\u5B89\u88C5
</code></pre><ul><li><ul><li><p><img src="`+_+'" alt="Alt text"></p></li><li><p><img src="'+g+'" alt="Alt text"></p></li><li><p>\u521B\u5EFA\u9879\u76EE</p></li><li><p>ctrl+shift+P ,\u8F93\u5165flutter\uFF0C\u9009\u62E9\u5982\u4E0B\u9879\uFF0C\u8FDB\u884Cflutter\u521B\u5EFA \u200B - <img src="'+m+'" alt="Alt text"></p></li><li><p>\u53EF\u4EE5\u9009\u62E9\u7B2C\u4E00\u4E2A\uFF08\u7B2C\u4E00\u4E2A\u662F\u4E00\u4E2A\u5E26\u6709\u5C0F\u6848\u4F8B\u7684\u5E94\u7528\uFF09</p></li><li><p><img src="'+h+'" alt="Alt text"></p></li><li><p>\u914D\u7F6E\u9879\u76EE</p><ul><li><ol><li>\u627E\u5230build.gradle\u6587\u4EF6</li></ol></li><li><img src="'+A+'" alt="Alt text"></li><li></li></ul><blockquote><p>android/build.gradle</p></blockquote><ul><li><ol start="2"><li>\u4FEE\u6539\u4E0B\u8F7D\u5BF9\u5E94\u5305\u7684\u955C\u50CF\u4E3A\u963F\u91CC\u955C\u50CF\uFF0C\uFF08\u56E0\u4E3A\u539F\u5730\u5740\u4E0B\u8F7D\u5F88\u6162\uFF0C\u5BB9\u6613\u5931\u8D25\uFF09</li></ol></li><li><img src="'+b+`" alt="Alt text"></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  maven { url &#39;https://maven.aliyun.com/nexis/content/groups/public&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><ol start="3"><li>\u627E\u5230gradle-wrapper.properties\u6587\u4EF6</li></ol></li></ul><blockquote><p>android/gradle-wrapper.properties \u5C06distributionUrl\u914D\u7F6E\u7684\u7F51\u7EDC\u5730\u5740\u6539\u4E3A\u672C\u5730\u7684\uFF0C\u8BA9\u5176\u4ECE\u672C\u5730\u52A0\u8F7D\uFF0C\u89E3\u51B3\u4E0B\u8F7D\u8FC7\u6162\u7684\u95EE\u9898,\u5BB9\u6613\u5931\u8D25</p></blockquote></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">distributionBase=GRADLE_USER_HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">distributionPath=wrapper/dists</span></span>
<span class="line"><span style="color:#A6ACCD;">zipStoreBase=GRADLE_USER_HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">zipStorePath=wrapper/dists</span></span>
<span class="line"><span style="color:#A6ACCD;">distributionUrl=file:///D:/gradle-7.5-all.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">#distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>4 \u4F7F\u7528\u547D\u4EE4\u6216\u8005vscode\u8C03\u8BD5\u6A21\u5F0F\u8FDB\u884C\u8FD0\u884C <ul><li>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0C\u547D\u4EE4\u884C\u8F93\u5165\uFF1A flutter run android</li><li>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u70B9\u51FBlaunsh.json \u9009\u62E9web\u6216\u8005\u5B89\u5353\u673A</li></ul></li></ul></li></ul>`,25)]))}var y=r(v,[["render",f]]);export{R as __pageData,y as default};
