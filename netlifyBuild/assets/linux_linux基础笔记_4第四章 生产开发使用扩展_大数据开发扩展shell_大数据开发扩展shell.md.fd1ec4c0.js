import{_ as a,c as n,a as p,o as l}from"./app.580fb14e.js";var e="/assets/Snipaste_2023-11-20_14-17-49.b0d9cf6e.png";const d=JSON.parse('{"title":"\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 \u7CFB\u7EDF\u9884\u5B9A\u4E49\u53D8\u91CF","slug":"_3-1-\u7CFB\u7EDF\u9884\u5B9A\u4E49\u53D8\u91CF"},{"level":2,"title":"3.2 \u81EA\u5B9A\u4E49\u53D8\u91CF","slug":"_3-2-\u81EA\u5B9A\u4E49\u53D8\u91CF"},{"level":2,"title":"3.3 \u7279\u6B8A\u53D8\u91CF","slug":"_3-3-\u7279\u6B8A\u53D8\u91CF"},{"level":3,"title":"3.3.1 $n","slug":"_3-3-1-n"},{"level":3,"title":"3.3.2 $#","slug":"_3-3-2"},{"level":3,"title":"3.3.3 $*\u3001$@","slug":"_3-3-3-\u3001"},{"level":3,"title":"3.3.4 $\uFF1F","slug":"_3-3-4-\uFF1F"},{"level":2,"title":"6.1 if\u5224\u65AD","slug":"_6-1-if\u5224\u65AD"},{"level":2,"title":"6.2 case\u8BED\u53E5","slug":"_6-2-case\u8BED\u53E5"},{"level":2,"title":"6.3 for\u5FAA\u73AF","slug":"_6-3-for\u5FAA\u73AF"},{"level":2,"title":"6.4 while\u5FAA\u73AF","slug":"_6-4-while\u5FAA\u73AF"},{"level":2,"title":"8.1 \u7CFB\u7EDF\u51FD\u6570","slug":"_8-1-\u7CFB\u7EDF\u51FD\u6570"},{"level":3,"title":"8.1.1 basename","slug":"_8-1-1-basename"},{"level":3,"title":"8.1.2 dirname","slug":"_8-1-2-dirname"},{"level":2,"title":"8.2 \u81EA\u5B9A\u4E49\u51FD\u6570","slug":"_8-2-\u81EA\u5B9A\u4E49\u51FD\u6570"},{"level":2,"title":"9.1 cut","slug":"_9-1-cut"},{"level":2,"title":"9.2 awk","slug":"_9-2-awk"},{"level":2,"title":"9.3 sort","slug":"_9-3-sort"},{"level":2,"title":"9.4 wc","slug":"_9-4-wc"},{"level":2,"title":"10.1 \u5E38\u89C4\u5339\u914D","slug":"_10-1-\u5E38\u89C4\u5339\u914D"},{"level":2,"title":"10.2 \u5E38\u7528\u7279\u6B8A\u5B57\u7B26","slug":"_10-2-\u5E38\u7528\u7279\u6B8A\u5B57\u7B26"}],"relativePath":"linux/linux\u57FA\u7840\u7B14\u8BB0/4\u7B2C\u56DB\u7AE0 \u751F\u4EA7\u5F00\u53D1\u4F7F\u7528\u6269\u5C55/\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell/\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell.md"}'),o={name:"linux/linux\u57FA\u7840\u7B14\u8BB0/4\u7B2C\u56DB\u7AE0 \u751F\u4EA7\u5F00\u53D1\u4F7F\u7528\u6269\u5C55/\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell/\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell.md"};function c(t,s,A,C,r,i){return l(),n("div",null,s[0]||(s[0]=[p('<h1 id="\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell" tabindex="-1">\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell <a class="header-anchor" href="#\u5927\u6570\u636E\u5F00\u53D1\u6269\u5C55shell" aria-hidden="true">#</a></h1><h1 id="\u5B66\u4E60\u76EE\u6807" tabindex="-1">\u5B66\u4E60\u76EE\u6807 <a class="header-anchor" href="#\u5B66\u4E60\u76EE\u6807" aria-hidden="true">#</a></h1><p>1 \u719F\u6089shell\u811A\u672C\u7684\u539F\u7406\u548C\u4F7F\u7528</p><p>2 \u719F\u6089shell\u7684\u7F16\u7A0B\u8BED\u6CD5</p><h1 id="\u7B2C\u4E00\u8282-shell\u6982\u8FF0" tabindex="-1">\u7B2C\u4E00\u8282 Shell\u6982\u8FF0 <a class="header-anchor" href="#\u7B2C\u4E00\u8282-shell\u6982\u8FF0" aria-hidden="true">#</a></h1><p><img src="'+e+`" alt=""></p><p><strong>1</strong>\uFF09<strong>Linux\u63D0\u4F9B\u7684Shell\u89E3\u6790\u5668\u6709\uFF1A</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 ~]$ cat /etc/shells </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/dash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/tcsh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/csh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>2</strong>\uFF09<strong>bash\u548Csh\u7684\u5173\u7CFB</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 bin]$ ll | grep bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-rwxr-xr-x. 1 root root 941880 5\u6708  11 2016 bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lrwxrwxrwx. 1 root root      4 5\u6708  27 2017 sh -&gt; bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>3</strong>\uFF09<strong>Centos\u9ED8\u8BA4\u7684\u89E3\u6790\u5668\u662Fbash</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 bin]$ echo $SHELL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u4E8C\u8282-shell\u811A\u672C\u5165\u95E8" tabindex="-1">\u7B2C\u4E8C\u8282 Shell\u811A\u672C\u5165\u95E8 <a class="header-anchor" href="#\u7B2C\u4E8C\u8282-shell\u811A\u672C\u5165\u95E8" aria-hidden="true">#</a></h1><p>\uFF081\uFF09\u9700\u6C42\uFF1A\u521B\u5EFA\u4E00\u4E2AShell\u811A\u672C\uFF0C\u8F93\u51FAhelloworld</p><p>\uFF082\uFF09\u6848\u4F8B\u5B9E\u64CD\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch helloworld.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim helloworld.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728helloworld.sh\u4E2D\u8F93\u5165\u5982\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;helloworld&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u811A\u672C\u7684\u5E38\u7528\u6267\u884C\u65B9\u5F0F</p><p>\u7B2C\u4E00\u79CD\uFF1A\u91C7\u7528bash\u6216sh+\u811A\u672C\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u4E0D\u7528\u8D4B\u4E88\u811A\u672C+x\u6743\u9650\uFF09</p><p>\u200B sh+\u811A\u672C\u7684\u76F8\u5BF9\u8DEF\u5F84</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ sh helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u200B sh+\u811A\u672C\u7684\u7EDD\u5BF9\u8DEF\u5F84</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ sh /home/atguigu/datas/helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u200B bash+\u811A\u672C\u7684\u76F8\u5BF9\u8DEF\u5F84</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ bash helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u200B bash+\u811A\u672C\u7684\u7EDD\u5BF9\u8DEF\u5F84</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ bash /home/atguigu/datas/helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C\u4E8C\u79CD\uFF1A\u91C7\u7528\u8F93\u5165\u811A\u672C\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\u6267\u884C\u811A\u672C\uFF08\u5FC5\u987B\u5177\u6709\u53EF\u6267\u884C\u6743\u9650+x\uFF09</p><p>\uFF08a\uFF09<a href="http://xn--helloworld-gn3p57x801r9clw28b.sh" target="_blank" rel="noopener noreferrer">\u9996\u5148\u8981\u8D4B\u4E88helloworld.sh</a> \u811A\u672C\u7684+x\u6743\u9650</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod +x helloworld.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF08b\uFF09\u6267\u884C\u811A\u672C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u76F8\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ /home/atguigu/datas/helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u7B2C\u4E00\u79CD\u6267\u884C\u65B9\u6CD5\uFF0C\u672C\u8D28\u662Fbash\u89E3\u6790\u5668\u5E2E\u4F60\u6267\u884C\u811A\u672C\uFF0C\u6240\u4EE5\u811A\u672C\u672C\u8EAB\u4E0D\u9700\u8981\u6267\u884C\u6743\u9650\u3002\u7B2C\u4E8C\u79CD\u6267\u884C\u65B9\u6CD5\uFF0C\u672C\u8D28\u662F\u811A\u672C\u9700\u8981\u81EA\u5DF1\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u6267\u884C\u6743\u9650\u3002</p><p>\u3010\u4E86\u89E3\u3011\u7B2C\u4E09\u79CD\uFF1A\u5728\u811A\u672C\u7684\u8DEF\u5F84\u524D\u52A0\u4E0A\u201C.\u201D\u6216\u8005 source</p><p>\uFF08a\uFF09\u6709\u4EE5\u4E0B\u811A\u672C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat test.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">A=5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>(b) \u5206\u522B\u4F7F\u7528sh\uFF0Cbash\uFF0C./ \u548C . \u7684\u65B9\u5F0F\u6765\u6267\u884C\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ bash test.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ sh test.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./test.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ . test.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u539F\u56E0\uFF1A</p><p>\u524D\u4E09\u79CD\u65B9\u5F0F\u90FD\u662F\u5728\u5F53\u524Dshell\u4E2D\u6253\u5F00\u4E00\u4E2A\u5B50shell\u6765\u6267\u884C\u811A\u672C\u5185\u5BB9\uFF0C\u5F53\u811A\u672C\u5185\u5BB9\u7ED3\u675F\uFF0C\u5219\u5B50shell\u5173\u95ED\uFF0C\u56DE\u5230\u7236shell\u4E2D\u3002</p><p>\u7B2C\u56DB\u79CD\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u5728\u811A\u672C\u8DEF\u5F84\u524D\u52A0\u201C.\u201D\u6216\u8005 source\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u811A\u672C\u5185\u5BB9\u5728\u5F53\u524Dshell\u91CC\u6267\u884C\uFF0C\u800C\u65E0\u9700\u6253\u5F00\u5B50shell\uFF01\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u6BCF\u6B21\u8981\u4FEE\u6539\u5B8C/etc/profile\u6587\u4EF6\u4EE5\u540E\uFF0C\u9700\u8981source\u4E00\u4E0B\u7684\u539F\u56E0\u3002</p><p>\u5F00\u5B50shell\u4E0E\u4E0D\u5F00\u5B50shell\u7684\u533A\u522B\u5C31\u5728\u4E8E\uFF0C\u73AF\u5883\u53D8\u91CF\u7684\u7EE7\u627F\u5173\u7CFB\uFF0C\u5982\u5728\u5B50shell\u4E2D\u8BBE\u7F6E\u7684\u5F53\u524D\u53D8\u91CF\uFF0C\u7236shell\u662F\u4E0D\u53EF\u89C1\u7684\u3002</p><h1 id="\u7B2C\u4E09\u8282-\u53D8\u91CF" tabindex="-1">\u7B2C\u4E09\u8282 \u53D8\u91CF <a class="header-anchor" href="#\u7B2C\u4E09\u8282-\u53D8\u91CF" aria-hidden="true">#</a></h1><h2 id="_3-1-\u7CFB\u7EDF\u9884\u5B9A\u4E49\u53D8\u91CF" tabindex="-1">3.1 \u7CFB\u7EDF\u9884\u5B9A\u4E49\u53D8\u91CF <a class="header-anchor" href="#_3-1-\u7CFB\u7EDF\u9884\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a></h2><p>1\uFF09\u5E38\u7528\u7CFB\u7EDF\u53D8\u91CF</p><p>$HOME\u3001$PWD\u3001$SHELL\u3001$USER\u7B49</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\uFF081\uFF09\u67E5\u770B\u7CFB\u7EDF\u53D8\u91CF\u7684\u503C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $HOME</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/home/atguigu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u663E\u793A\u5F53\u524DShell\u4E2D\u6240\u6709\u53D8\u91CF\uFF1Aset</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ set</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BASH=/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BASH_ALIASES=()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BASH_ARGC=()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BASH_ARGV=()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-2-\u81EA\u5B9A\u4E49\u53D8\u91CF" tabindex="-1">3**.2** \u81EA\u5B9A\u4E49<strong>\u53D8\u91CF</strong> <a class="header-anchor" href="#_3-2-\u81EA\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>\uFF081\uFF09\u5B9A\u4E49\u53D8\u91CF\uFF1A\u53D8\u91CF\u540D=\u53D8\u91CF\u503C\uFF0C\u6CE8\u610F=\u53F7\u524D\u540E\u4E0D\u80FD\u6709\u7A7A\u683C</p><p>\uFF082\uFF09\u64A4\u9500\u53D8\u91CF\uFF1Aunset \u53D8\u91CF\u540D</p><p>\uFF083\uFF09\u58F0\u660E\u9759\u6001\u53D8\u91CF\uFF1Areadonly\u53D8\u91CF\uFF0C\u6CE8\u610F\uFF1A\u4E0D\u80FDunset</p><p>2\uFF09<strong>\u53D8\u91CF\u5B9A\u4E49\u89C4\u5219</strong></p><p>\uFF081\uFF09\u53D8\u91CF\u540D\u79F0\u53EF\u4EE5\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u4F46\u662F\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\uFF0C\u73AF\u5883\u53D8\u91CF\u540D\u5EFA\u8BAE\u5927\u5199\u3002</p><p>\uFF082\uFF09\u7B49\u53F7\u4E24\u4FA7\u4E0D\u80FD\u6709\u7A7A\u683C</p><p>\uFF083\uFF09\u5728bash\u4E2D\uFF0C\u53D8\u91CF\u9ED8\u8BA4\u7C7B\u578B\u90FD\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u65E0\u6CD5\u76F4\u63A5\u8FDB\u884C\u6570\u503C\u8FD0\u7B97\u3002</p><p>\uFF084\uFF09\u53D8\u91CF\u7684\u503C\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u9700\u8981\u4F7F\u7528\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7\u62EC\u8D77\u6765\u3002</p><p>3\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\uFF081\uFF09\u5B9A\u4E49\u53D8\u91CFA</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ A=5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u7ED9\u53D8\u91CFA\u91CD\u65B0\u8D4B\u503C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ A=8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u64A4\u9500\u53D8\u91CFA</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ unset A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF084\uFF09\u58F0\u660E\u9759\u6001\u7684\u53D8\u91CFB=2\uFF0C\u4E0D\u80FDunset</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ readonly B=2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ B=9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-bash: B: readonly variable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF085\uFF09\u5728bash\u4E2D\uFF0C\u53D8\u91CF\u9ED8\u8BA4\u7C7B\u578B\u90FD\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u65E0\u6CD5\u76F4\u63A5\u8FDB\u884C\u6570\u503C\u8FD0\u7B97</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop102 ~]$ C=1+2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop102 ~]$ echo $C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1+2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF086\uFF09\u53D8\u91CF\u7684\u503C\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u9700\u8981\u4F7F\u7528\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7\u62EC\u8D77\u6765</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop102 ~]$ D=I love banzhang</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-bash: world: command not found</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop102 ~]$ D=&quot;I love banzhang&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop102 ~]$ echo $D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">I love banzhang</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF087\uFF09\u53EF\u628A\u53D8\u91CF\u63D0\u5347\u4E3A\u5168\u5C40\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4F9B\u5176\u4ED6Shell\u7A0B\u5E8F\u4F7F\u7528</p><p>export \u53D8\u91CF\u540D</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728helloworld.sh\u6587\u4EF6\u4E2D\u589E\u52A0echo $B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;helloworld&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53D1\u73B0\u5E76\u6CA1\u6709\u6253\u5370\u8F93\u51FA\u53D8\u91CFB\u7684\u503C\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ export B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">helloworld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-3-\u7279\u6B8A\u53D8\u91CF" tabindex="-1">3**.3** \u7279\u6B8A<strong>\u53D8\u91CF</strong> <a class="header-anchor" href="#_3-3-\u7279\u6B8A\u53D8\u91CF" aria-hidden="true">#</a></h2><h3 id="_3-3-1-n" tabindex="-1">3.3.1 $n <a class="header-anchor" href="#_3-3-1-n" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>$n \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1An\u4E3A\u6570\u5B57\uFF0C$0\u4EE3\u8868\u8BE5\u811A\u672C\u540D\u79F0\uFF0C$1-$9\u4EE3\u8868\u7B2C\u4E00\u5230\u7B2C\u4E5D\u4E2A\u53C2\u6570\uFF0C\u5341\u4EE5\u4E0A\u7684\u53C2\u6570\uFF0C\u5341\u4EE5\u4E0A\u7684\u53C2\u6570\u9700\u8981\u7528\u5927\u62EC\u53F7\u5305\u542B\uFF0C\u5982\${10}\uFF09</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch parameter.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$n==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $0 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $1 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./parameter.sh cls xz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$n==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">./parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-3-2" tabindex="-1">3.3.2 $# <a class="header-anchor" href="#_3-3-2" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>$# \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u83B7\u53D6\u6240\u6709\u8F93\u5165\u53C2\u6570\u4E2A\u6570\uFF0C\u5E38\u7528\u4E8E\u5FAA\u73AF\uFF09\u3002</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$n==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $0 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $1 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$#==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $#</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./parameter.sh cls xz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$n==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">./parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$#==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-3-3-\u3001" tabindex="-1">3.3.3 $*<strong>\u3001$@</strong> <a class="header-anchor" href="#_3-3-3-\u3001" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>$* \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u8FD9\u4E2A\u53D8\u91CF\u4EE3\u8868\u547D\u4EE4\u884C\u4E2D\u6240\u6709\u7684\u53C2\u6570\uFF0C$*\u628A\u6240\u6709\u7684\u53C2\u6570\u770B\u6210\u4E00\u4E2A\u6574\u4F53\uFF09</p><p>$@ \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u8FD9\u4E2A\u53D8\u91CF\u4E5F\u4EE3\u8868\u547D\u4EE4\u884C\u4E2D\u6240\u6709\u7684\u53C2\u6570\uFF0C\u4E0D\u8FC7$@\u628A\u6BCF\u4E2A\u53C2\u6570\u533A\u5206\u5BF9\u5F85\uFF09</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$n==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $0 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $1 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$#==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $#</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$*==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;==========$@==========&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $@</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./parameter.sh a b c d e f g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$n==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">./parameter.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$#==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$*==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">==========$@==========</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-3-4-\uFF1F" tabindex="-1">3.3.4 $<strong>\uFF1F</strong> <a class="header-anchor" href="#_3-3-4-\uFF1F" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>$\uFF1F \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u6700\u540E\u4E00\u6B21\u6267\u884C\u7684\u547D\u4EE4\u7684\u8FD4\u56DE\u72B6\u6001\u3002\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u4E3A0\uFF0C\u8BC1\u660E\u4E0A\u4E00\u4E2A\u547D\u4EE4\u6B63\u786E\u6267\u884C\uFF1B\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u4E3A\u975E0\uFF08\u5177\u4F53\u662F\u54EA\u4E2A\u6570\uFF0C\u7531\u547D\u4EE4\u81EA\u5DF1\u6765\u51B3\u5B9A\uFF09\uFF0C\u5219\u8BC1\u660E\u4E0A\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\u4E0D\u6B63\u786E\u4E86\u3002\uFF09</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u5224\u65ADhelloworld.sh\u811A\u672C\u662F\u5426\u6B63\u786E\u6267\u884C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./helloworld.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">hello world</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u56DB\u8282-\u8FD0\u7B97\u7B26" tabindex="-1">\u7B2C<strong>\u56DB\u8282</strong> \u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u7B2C\u56DB\u8282-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h1><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>\u201C$((\u8FD0\u7B97\u5F0F))\u201D\u6216\u201C$[\u8FD0\u7B97\u5F0F]\u201D</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD\uFF1A</strong></p><p>\u8BA1\u7B97\uFF082+3\uFF09* 4\u7684\u503C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]# S=$[(2+3)*4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]# echo $S</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u4E94\u8282-\u6761\u4EF6\u5224\u65AD" tabindex="-1">\u7B2C\u4E94\u8282 \u6761\u4EF6\u5224\u65AD <a class="header-anchor" href="#\u7B2C\u4E94\u8282-\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a></h1><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>\uFF081\uFF09test condition</p><p>\uFF082\uFF09[ condition ]\uFF08\u6CE8\u610Fcondition\u524D\u540E\u8981\u6709\u7A7A\u683C\uFF09</p><p>\u6CE8\u610F\uFF1A\u6761\u4EF6\u975E\u7A7A\u5373\u4E3Atrue\uFF0C[ atguigu ]\u8FD4\u56DEtrue\uFF0C[ ] \u8FD4\u56DEfalse\u3002</p><p>2\uFF09<strong>\u5E38\u7528\u5224\u65AD\u6761\u4EF6</strong></p><p>\uFF081\uFF09\u4E24\u4E2A\u6574\u6570\u4E4B\u95F4\u6BD4\u8F83</p><p>-eq \u7B49\u4E8E\uFF08equal\uFF09 -ne \u4E0D\u7B49\u4E8E\uFF08not equal\uFF09</p><p>-lt \u5C0F\u4E8E\uFF08less than\uFF09 -le \u5C0F\u4E8E\u7B49\u4E8E\uFF08less equal\uFF09</p><p>-gt \u5927\u4E8E\uFF08greater than\uFF09 -ge \u5927\u4E8E\u7B49\u4E8E\uFF08greater equal\uFF09</p><p>\uFF082\uFF09\u6309\u7167\u6587\u4EF6\u6743\u9650\u8FDB\u884C\u5224\u65AD</p><p>-r \u6709\u8BFB\u7684\u6743\u9650\uFF08read\uFF09</p><p>-w \u6709\u5199\u7684\u6743\u9650\uFF08write\uFF09</p><p>-x \u6709\u6267\u884C\u7684\u6743\u9650\uFF08execute\uFF09</p><p>\uFF083\uFF09\u6309\u7167\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u5224\u65AD</p><p>-e \u6587\u4EF6\u5B58\u5728\uFF08existence\uFF09</p><p>-f \u6587\u4EF6\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u5E38\u89C4\u7684\u6587\u4EF6\uFF08file\uFF09</p><p>-d \u6587\u4EF6\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u76EE\u5F55\uFF08directory\uFF09</p><p>3\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\uFF081\uFF0923\u662F\u5426\u5927\u4E8E\u7B49\u4E8E22</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ [ 23 -ge 22 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09helloworld.sh\u662F\u5426\u5177\u6709\u5199\u6743\u9650</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ [ -w helloworld.sh ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09/home/atguigu/cls.txt\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u662F\u5426\u5B58\u5728</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ [ -e /home/atguigu/cls.txt ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF084\uFF09\u591A\u6761\u4EF6\u5224\u65AD\uFF08&amp;&amp; \u8868\u793A\u524D\u4E00\u6761\u547D\u4EE4\u6267\u884C\u6210\u529F\u65F6\uFF0C\u624D\u6267\u884C\u540E\u4E00\u6761\u547D\u4EE4\uFF0C|| \u8868\u793A\u4E0A\u4E00\u6761\u547D\u4EE4\u6267\u884C\u5931\u8D25\u540E\uFF0C\u624D\u6267\u884C\u4E0B\u4E00\u6761\u547D\u4EE4\uFF09</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 ~]$ [ atguigu ] &amp;&amp; echo OK || echo notOK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ [ ] &amp;&amp; echo OK || echo notOK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">notOK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u516D\u8282-\u6D41\u7A0B\u63A7\u5236\uFF08\u91CD\u70B9\uFF09" tabindex="-1">\u7B2C<strong>\u516D\u8282 \u6D41\u7A0B\u63A7\u5236</strong>\uFF08\u91CD\u70B9\uFF09 <a class="header-anchor" href="#\u7B2C\u516D\u8282-\u6D41\u7A0B\u63A7\u5236\uFF08\u91CD\u70B9\uFF09" aria-hidden="true">#</a></h1><h2 id="_6-1-if\u5224\u65AD" tabindex="-1">6.1 if\u5224\u65AD <a class="header-anchor" href="#_6-1-if\u5224\u65AD" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>\uFF081\uFF09\u5355\u5206\u652F</p><p>if [ \u6761\u4EF6\u5224\u65AD\u5F0F ];then</p><p>\u200B \u7A0B\u5E8F</p><p>fi</p><p>\u6216\u8005</p><p>if [ \u6761\u4EF6\u5224\u65AD\u5F0F ]</p><p>then</p><p>\u200B \u7A0B\u5E8F</p><p>fi</p><p>\uFF082\uFF09\u591A\u5206\u652F</p><p>if [ \u6761\u4EF6\u5224\u65AD\u5F0F ]</p><p>then</p><p>\u200B \u7A0B\u5E8F</p><p>elif [ \u6761\u4EF6\u5224\u65AD\u5F0F ]</p><p>then</p><p>\u200B \u7A0B\u5E8F</p><p>else</p><p>\u200B \u7A0B\u5E8F</p><p>fi</p><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><p>\uFF081\uFF09[ \u6761\u4EF6\u5224\u65AD\u5F0F ]\uFF0C\u4E2D\u62EC\u53F7\u548C\u6761\u4EF6\u5224\u65AD\u5F0F\u4E4B\u95F4\u5FC5\u987B\u6709\u7A7A\u683C</p><p>\uFF082\uFF09if\u540E\u8981\u6709\u7A7A\u683C</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u8F93\u5165\u4E00\u4E2A\u6570\u5B57\uFF0C\u5982\u679C\u662F1\uFF0C\u5219\u8F93\u51FAbanzhang zhen shuai\uFF0C\u5982\u679C\u662F2\uFF0C\u5219\u8F93\u51FAcls zhen mei\uFF0C\u5982\u679C\u662F\u5176\u5B83\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u8F93\u51FA\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch if.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim if.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if [ $1 -eq 1 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">then</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       echo &quot;banzhang zhen shuai&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">elif [ $1 -eq 2 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">then</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       echo &quot;cls zhen mei&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 if.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./if.sh 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang zhen shuai</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-2-case\u8BED\u53E5" tabindex="-1">6.2 case\u8BED\u53E5 <a class="header-anchor" href="#_6-2-case\u8BED\u53E5" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>case $\u53D8\u91CF\u540D in</p><p>&quot;\u503C1&quot;\uFF09</p><p>\u200B \u5982\u679C\u53D8\u91CF\u7684\u503C\u7B49\u4E8E\u503C1\uFF0C\u5219\u6267\u884C\u7A0B\u5E8F1</p><p>;;</p><p>&quot;\u503C2&quot;\uFF09</p><p>\u200B \u5982\u679C\u53D8\u91CF\u7684\u503C\u7B49\u4E8E\u503C2\uFF0C\u5219\u6267\u884C\u7A0B\u5E8F2</p><p>;;</p><p>\u200B \u2026\u7701\u7565\u5176\u4ED6\u5206\u652F\u2026</p><p>*\uFF09</p><p>\u200B \u5982\u679C\u53D8\u91CF\u7684\u503C\u90FD\u4E0D\u662F\u4EE5\u4E0A\u7684\u503C\uFF0C\u5219\u6267\u884C\u6B64\u7A0B\u5E8F</p><p>;;</p><p>esac</p><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><p>\uFF081\uFF09case\u884C\u5C3E\u5FC5\u987B\u4E3A\u5355\u8BCD\u201Cin\u201D\uFF0C\u6BCF\u4E00\u4E2A\u6A21\u5F0F\u5339\u914D\u5FC5\u987B\u4EE5\u53F3\u62EC\u53F7\u201C\uFF09\u201D\u7ED3\u675F\u3002</p><p>\uFF082\uFF09\u53CC\u5206\u53F7\u201C;;\u201D\u8868\u793A\u547D\u4EE4\u5E8F\u5217\u7ED3\u675F\uFF0C\u76F8\u5F53\u4E8Ejava\u4E2D\u7684break\u3002</p><p>\uFF083\uFF09\u6700\u540E\u7684\u201C*\uFF09\u201D\u8868\u793A\u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u76F8\u5F53\u4E8Ejava\u4E2D\u7684default\u3002</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u8F93\u5165\u4E00\u4E2A\u6570\u5B57\uFF0C\u5982\u679C\u662F1\uFF0C\u5219\u8F93\u51FAbanzhang\uFF0C\u5982\u679C\u662F2\uFF0C\u5219\u8F93\u51FAcls\uFF0C\u5982\u679C\u662F\u5176\u5B83\uFF0C\u8F93\u51FArenyao\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch case.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim case.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">case $1 in</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        echo &quot;banzhang&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;2&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        echo &quot;cls&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        echo &quot;renyao&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">esac</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 case.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./case.sh 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-3-for\u5FAA\u73AF" tabindex="-1">6.3 for\u5FAA\u73AF <a class="header-anchor" href="#_6-3-for\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD51</strong></p><p>for (( \u521D\u59CB\u503C;\u5FAA\u73AF\u63A7\u5236\u6761\u4EF6;\u53D8\u91CF\u53D8\u5316 ))</p><p>do</p><p>\u200B \u7A0B\u5E8F</p><p>done</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u4ECE1\u52A0\u5230100</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch for1.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim for1.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sum=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for((i=0;i&lt;=100;i++))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        sum=$[$sum+$i]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $sum</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 for1.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./for1.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5050</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3\uFF09<strong>\u57FA\u672C\u8BED\u6CD52</strong></p><p>for \u53D8\u91CF in \u503C1 \u503C2 \u503C3\u2026</p><p>do</p><p>\u200B \u7A0B\u5E8F</p><p>done</p><p>4\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\uFF081\uFF09\u6253\u5370\u6240\u6709\u8F93\u5165\u53C2\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch for2.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim for2.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6253\u5370\u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in cls mly wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     echo &quot;ban zhang love $i&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 for2.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./for2.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ban zhang love cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ban zhang love mly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ban zhang love wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u6BD4\u8F83$*\u548C$@\u533A\u522B</p><p>$*\u548C$@\u90FD\u8868\u793A\u4F20\u9012\u7ED9\u51FD\u6570\u6216\u811A\u672C\u7684\u6240\u6709\u53C2\u6570\uFF0C\u4E0D\u88AB\u53CC\u5F15\u53F7\u201C\u201D\u5305\u542B\u65F6\uFF0C\u90FD\u4EE5$1 $2 \u2026$n\u7684\u5F62\u5F0F\u8F93\u51FA\u6240\u6709\u53C2\u6570\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch for3.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim for3.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;=============$*=============&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in $*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      echo &quot;ban zhang love $i&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;=============$@=============&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for j in $@</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do      </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      echo &quot;ban zhang love $j&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 for3.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./for3.sh cls mly wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">=============$*=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love mly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">=============$@=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love mly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u5B83\u4EEC\u88AB\u53CC\u5F15\u53F7\u201C\u201D\u5305\u542B\u65F6\uFF0C$*\u4F1A\u5C06\u6240\u6709\u7684\u53C2\u6570\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\uFF0C\u4EE5\u201C$1 $2 \u2026$n\u201D\u7684\u5F62\u5F0F\u8F93\u51FA\u6240\u6709\u53C2\u6570\uFF1B$@\u4F1A\u5C06\u5404\u4E2A\u53C2\u6570\u5206\u5F00\uFF0C\u4EE5\u201C$1\u201D \u201C$2\u201D\u2026\u201C$n\u201D\u7684\u5F62\u5F0F\u8F93\u51FA\u6240\u6709\u53C2\u6570\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim for4.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;=============$*=============&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in &quot;$*&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#$*\u4E2D\u7684\u6240\u6709\u53C2\u6570\u770B\u6210\u662F\u4E00\u4E2A\u6574\u4F53\uFF0C\u6240\u4EE5\u8FD9\u4E2Afor\u5FAA\u73AF\u53EA\u4F1A\u5FAA\u73AF\u4E00\u6B21 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       echo &quot;ban zhang love $i&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;=============$@=============&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for j in &quot;$@&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#$@\u4E2D\u7684\u6BCF\u4E2A\u53C2\u6570\u90FD\u770B\u6210\u662F\u72EC\u7ACB\u7684\uFF0C\u6240\u4EE5\u201C$@\u201D\u4E2D\u6709\u51E0\u4E2A\u53C2\u6570\uFF0C\u5C31\u4F1A\u5FAA\u73AF\u51E0\u6B21 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       echo &quot;ban zhang love $j&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 for4.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./for4.sh cls mly wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">=============$*=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love cls mly wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">=============$@=============</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love cls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love mly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang love wls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-4-while\u5FAA\u73AF" tabindex="-1">6.4 while\u5FAA\u73AF <a class="header-anchor" href="#_6-4-while\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>while [ \u6761\u4EF6\u5224\u65AD\u5F0F ]</p><p>do</p><p>\u200B \u7A0B\u5E8F</p><p>done</p><p>2**\uFF09\u6848\u4F8B\u5B9E\u64CD**</p><p>\u4ECE1\u52A0\u5230100</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch while.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim while.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sum=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">i=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while [ $i -le 100 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      sum=$[$sum+$i]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      i=$[$i+1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $sum</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 while.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./while.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5050</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u4E03\u8282-read\u8BFB\u53D6\u63A7\u5236\u53F0\u8F93\u5165" tabindex="-1">\u7B2C<strong>\u4E03\u8282</strong> read\u8BFB\u53D6\u63A7\u5236\u53F0\u8F93\u5165 <a class="header-anchor" href="#\u7B2C\u4E03\u8282-read\u8BFB\u53D6\u63A7\u5236\u53F0\u8F93\u5165" aria-hidden="true">#</a></h1><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>read (\u9009\u9879) (\u53C2\u6570)</p><p>\u9009\u9879\uFF1A</p><p>-p\uFF1A\u6307\u5B9A\u8BFB\u53D6\u503C\u65F6\u7684\u63D0\u793A\u7B26\uFF1B</p><p>-t\uFF1A\u6307\u5B9A\u8BFB\u53D6\u503C\u65F6\u7B49\u5F85\u7684\u65F6\u95F4\uFF08\u79D2\uFF09\u3002</p><p>\u53C2\u6570</p><p>\u200B \u53D8\u91CF\uFF1A\u6307\u5B9A\u8BFB\u53D6\u503C\u7684\u53D8\u91CF\u540D</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u63D0\u793A7\u79D2\u5185\uFF0C\u8BFB\u53D6\u63A7\u5236\u53F0\u8F93\u5165\u7684\u540D\u79F0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch read.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim read.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">read -t 7 -p &quot;Enter your name in 7 seconds :&quot; NAME</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo $NAME</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./read.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Enter your name in 7 seconds : atguigu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">atguigu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u516B\u8282-\u51FD\u6570" tabindex="-1">\u7B2C<strong>\u516B\u8282</strong> \u51FD\u6570 <a class="header-anchor" href="#\u7B2C\u516B\u8282-\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="_8-1-\u7CFB\u7EDF\u51FD\u6570" tabindex="-1">8.1 \u7CFB\u7EDF\u51FD\u6570 <a class="header-anchor" href="#_8-1-\u7CFB\u7EDF\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="_8-1-1-basename" tabindex="-1">8.1.1 basename <a class="header-anchor" href="#_8-1-1-basename" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>basename [string / pathname] [suffix] \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1Abasename\u547D\u4EE4\u4F1A\u5220\u6389\u6240\u6709\u7684\u524D\u7F00\u5305\u62EC\u6700\u540E\u4E00\u4E2A\uFF08\u2018/\u2019\uFF09\u5B57\u7B26\uFF0C\u7136\u540E\u5C06\u5B57\u7B26\u4E32\u663E\u793A\u51FA\u6765\u3002</p><p>\u9009\u9879\uFF1A</p><p>suffix\u4E3A\u540E\u7F00\uFF0C\u5982\u679Csuffix\u88AB\u6307\u5B9A\u4E86\uFF0Cbasename\u4F1A\u5C06pathname\u6216string\u4E2D\u7684suffix\u53BB\u6389\u3002</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u622A\u53D6\u8BE5/home/atguigu/banzhang.txt\u8DEF\u5F84\u7684\u6587\u4EF6\u540D\u79F0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ basename /home/atguigu/banzhang.txt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ basename /home/atguigu/banzhang.txt .txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">banzhang</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_8-1-2-dirname" tabindex="-1">8.1.2 dirname <a class="header-anchor" href="#_8-1-2-dirname" aria-hidden="true">#</a></h3><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>\u200B dirname \u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u4ECE\u7ED9\u5B9A\u7684\u5305\u542B\u7EDD\u5BF9\u8DEF\u5F84\u7684\u6587\u4EF6\u540D\u4E2D\u53BB\u9664\u6587\u4EF6\u540D\uFF08\u975E\u76EE\u5F55\u7684\u90E8\u5206\uFF09\uFF0C\u7136\u540E\u8FD4\u56DE\u5269\u4E0B\u7684\u8DEF\u5F84\uFF08\u76EE\u5F55\u7684\u90E8\u5206\uFF09\uFF09</p><p>2\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u83B7\u53D6banzhang.txt\u6587\u4EF6\u7684\u8DEF\u5F84</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 ~]$ dirname /home/atguigu/banzhang.txt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/home/atguigu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_8-2-\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1">8.2 \u81EA\u5B9A\u4E49\u51FD\u6570 <a class="header-anchor" href="#_8-2-\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a></h2><p>1\uFF09<strong>\u57FA\u672C\u8BED\u6CD5</strong></p><p>[ function ] funname[()]</p><p>{</p><p>\u200B Action;</p><p>\u200B [return int;]</p><p>}</p><p>2\uFF09<strong>\u7ECF\u9A8C\u6280\u5DE7</strong></p><p>\uFF081\uFF09\u5FC5\u987B\u5728\u8C03\u7528\u51FD\u6570\u5730\u65B9\u4E4B\u524D\uFF0C\u5148\u58F0\u660E\u51FD\u6570\uFF0Cshell\u811A\u672C\u662F\u9010\u884C\u8FD0\u884C\u3002\u4E0D\u4F1A\u50CF\u5176\u5B83\u8BED\u8A00\u4E00\u6837\u5148\u7F16\u8BD1\u3002</p><p>\uFF082\uFF09\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u53EA\u80FD\u901A\u8FC7$?\u7CFB\u7EDF\u53D8\u91CF\u83B7\u5F97\uFF0C\u53EF\u4EE5\u663E\u793A\u52A0\uFF1Areturn\u8FD4\u56DE\uFF0C\u5982\u679C\u4E0D\u52A0\uFF0C\u5C06\u4EE5\u6700\u540E\u4E00\u6761\u547D\u4EE4\u8FD0\u884C\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u503C\u3002return\u540E\u8DDF\u6570\u503Cn(0-255)</p><p>3\uFF09<strong>\u6848\u4F8B\u5B9E\u64CD</strong></p><p>\u8BA1\u7B97\u4E24\u4E2A\u8F93\u5165\u53C2\u6570\u7684\u548C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch fun.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim fun.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function sum()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    s=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    s=$[$1+$2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;$s&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">read -p &quot;Please input the number1: &quot; n1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">read -p &quot;Please input the number2: &quot; n2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sum $n1 $n2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ chmod 777 fun.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ./fun.sh </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Please input the number1: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Please input the number2: 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u4E5D\u8282-shell\u5DE5\u5177\uFF08\u91CD\u70B9\uFF09" tabindex="-1">\u7B2C<strong>\u4E5D\u8282</strong> Shell<strong>\u5DE5\u5177\uFF08\u91CD\u70B9\uFF09</strong> <a class="header-anchor" href="#\u7B2C\u4E5D\u8282-shell\u5DE5\u5177\uFF08\u91CD\u70B9\uFF09" aria-hidden="true">#</a></h1><h2 id="_9-1-cut" tabindex="-1">9.1 cut <a class="header-anchor" href="#_9-1-cut" aria-hidden="true">#</a></h2><p>cut\u7684\u5DE5\u4F5C\u5C31\u662F\u201C\u526A\u201D\uFF0C\u5177\u4F53\u7684\u8BF4\u5C31\u662F\u5728\u6587\u4EF6\u4E2D\u8D1F\u8D23\u526A\u5207\u6570\u636E\u7528\u7684\u3002cut \u547D\u4EE4\u4ECE\u6587\u4EF6\u7684\u6BCF\u4E00\u884C\u526A\u5207\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u5E76\u5C06\u8FD9\u4E9B\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u8F93\u51FA\u3002</p><p>1\uFF09\u57FA\u672C\u7528\u6CD5</p><p>cut [\u9009\u9879\u53C2\u6570] filename</p><p>\u8BF4\u660E\uFF1A\u9ED8\u8BA4\u5206\u9694\u7B26\u662F\u5236\u8868\u7B26</p><p>2\uFF09\u9009\u9879\u53C2\u6570\u8BF4\u660E</p><table><thead><tr><th>\u9009\u9879\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>-f</td><td>\u5217\u53F7\uFF0C\u63D0\u53D6\u7B2C\u51E0\u5217</td></tr><tr><td>-d</td><td>\u5206\u9694\u7B26\uFF0C\u6309\u7167\u6307\u5B9A\u5206\u9694\u7B26\u5206\u5272\u5217\uFF0C\u9ED8\u8BA4\u662F\u5236\u8868\u7B26\u201C\\t\u201D</td></tr><tr><td>-c</td><td>\u6307\u5B9A\u5177\u4F53\u7684\u5B57\u7B26</td></tr></tbody></table><p>3\uFF09\u6848\u4F8B\u5B9E\u64CD</p><p>\uFF081\uFF09\u6570\u636E\u51C6\u5907</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch cut.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim cut.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dong shen</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">guan zhen</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">wo  wo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lai  lai</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">le  le</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u5207\u5272cut.txt\u7B2C\u4E00\u5217</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cut -d &quot; &quot; -f 1 cut.txt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dong</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">guan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">wo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">lai</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">le</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u5207\u5272cut.txt\u7B2C\u4E8C\u3001\u4E09\u5217</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cut -d &quot; &quot; -f 2,3 cut.txt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">shen</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">zhen</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> wo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> lai</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> le</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF084\uFF09\u5728cut.txt\u6587\u4EF6\u4E2D\u5207\u5272\u51FAguan</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat cut.txt | grep &quot;guan&quot; | cut -d &quot; &quot; -f 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">guan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF085\uFF09\u9009\u53D6\u7CFB\u7EDFPATH\u53D8\u91CF\u503C\uFF0C\u7B2C2\u4E2A\u201C\uFF1A\u201D\u5F00\u59CB\u540E\u7684\u6240\u6709\u8DEF\u5F84\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $PATH</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/atguigu/.local/bin:/home/atguigu/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ echo $PATH | cut -d &quot;:&quot; -f 3-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/sbin:/usr/sbin:/home/atguigu/.local/bin:/home/atguigu/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF086\uFF09\u5207\u5272ifconfig \u540E\u6253\u5370\u7684IP\u5730\u5740</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ifconfig ens33 | grep netmask | cut -d &quot;i&quot; -f 2 | cut -d &quot; &quot; -f 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.6.101</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_9-2-awk" tabindex="-1">9.2 awk <a class="header-anchor" href="#_9-2-awk" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u5DE5\u5177\uFF0C\u628A\u6587\u4EF6\u9010\u884C\u7684\u8BFB\u5165\uFF0C\u4EE5\u7A7A\u683C\u4E3A\u9ED8\u8BA4\u5206\u9694\u7B26\u5C06\u6BCF\u884C\u5207\u7247\uFF0C\u5207\u5F00\u7684\u90E8\u5206\u518D\u8FDB\u884C\u5206\u6790\u5904\u7406\u3002</p><p>1\uFF09\u57FA\u672C\u7528\u6CD5</p><p>awk [\u9009\u9879\u53C2\u6570] \u2018/pattern1/{action1} /pattern2/{action2}...\u2019 filename</p><p>pattern\uFF1A\u8868\u793Aawk\u5728\u6570\u636E\u4E2D\u67E5\u627E\u7684\u5185\u5BB9\uFF0C\u5C31\u662F\u5339\u914D\u6A21\u5F0F</p><p>action\uFF1A\u5728\u627E\u5230\u5339\u914D\u5185\u5BB9\u65F6\u6240\u6267\u884C\u7684\u4E00\u7CFB\u5217\u547D\u4EE4</p><p>2\uFF09<strong>\u9009\u9879\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u9009\u9879\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>-F</td><td>\u6307\u5B9A\u8F93\u5165\u6587\u4EF6\u6298\u5206\u9694\u7B26</td></tr><tr><td>-v</td><td>\u8D4B\u503C\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u53D8\u91CF</td></tr></tbody></table><p>3\uFF09\u6848\u4F8B\u5B9E\u64CD</p><p>\uFF081\uFF09\u6570\u636E\u51C6\u5907</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ sudo cp /etc/passwd ./</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u641C\u7D22passwd\u6587\u4EF6\u4EE5root\u5173\u952E\u5B57\u5F00\u5934\u7684\u6240\u6709\u884C\uFF0C\u5E76\u8F93\u51FA\u8BE5\u884C\u7684\u7B2C7\u5217\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ awk -F : &#39;/^root/{print $7}&#39; passwd </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u641C\u7D22passwd\u6587\u4EF6\u4EE5root\u5173\u952E\u5B57\u5F00\u5934\u7684\u6240\u6709\u884C\uFF0C\u5E76\u8F93\u51FA\u8BE5\u884C\u7684\u7B2C1\u5217\u548C\u7B2C7\u5217\uFF0C\u4E2D\u95F4\u4EE5\u201C\uFF0C\u201D\u53F7\u5206\u5272\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ awk -F : &#39;/^root/{print $1&quot;,&quot;$7}&#39; passwd </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root,/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u53EA\u6709\u5339\u914D\u4E86pattern\u7684\u884C\u624D\u4F1A\u6267\u884Caction</p><p>\uFF084\uFF09\u53EA\u663E\u793A/etc/passwd\u7684\u7B2C\u4E00\u5217\u548C\u7B2C\u4E03\u5217\uFF0C\u4EE5\u9017\u53F7\u5206\u5272\uFF0C\u4E14\u5728\u6240\u6709\u884C\u524D\u9762\u6DFB\u52A0\u5217\u540Duser\uFF0Cshell\u5728\u6700\u540E\u4E00\u884C\u6DFB\u52A0&quot;dahaige\uFF0C/bin/zuishuai&quot;\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ awk -F : &#39;BEGIN{print &quot;user, shell&quot;} {print $1&quot;,&quot;$7} END{print &quot;dahaige,/bin/zuishuai&quot;}&#39; passwd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">user, shell</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root,/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bin,/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u3002\u3002\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">atguigu,/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dahaige,/bin/zuishuai</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1ABEGIN \u5728\u6240\u6709\u6570\u636E\u8BFB\u53D6\u884C\u4E4B\u524D\u6267\u884C\uFF1BEND \u5728\u6240\u6709\u6570\u636E\u6267\u884C\u4E4B\u540E\u6267\u884C\u3002</p><p>\uFF085\uFF09\u5C06passwd\u6587\u4EF6\u4E2D\u7684\u7528\u6237id\u589E\u52A0\u6570\u503C1\u5E76\u8F93\u51FA</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ awk -v i=1 -F : &#39;{print $3+i}&#39; passwd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4**\uFF09awk\u7684\u5185\u7F6E\u53D8\u91CF**</p><table><thead><tr><th>\u53D8\u91CF</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>FILENAME</td><td>\u6587\u4EF6\u540D</td></tr><tr><td>NR</td><td>\u5DF2\u8BFB\u7684\u8BB0\u5F55\u6570\uFF08\u884C\u53F7\uFF09</td></tr><tr><td>NF</td><td>\u6D4F\u89C8\u8BB0\u5F55\u7684\u57DF\u7684\u4E2A\u6570\uFF08\u5207\u5272\u540E\uFF0C\u5217\u7684\u4E2A\u6570\uFF09</td></tr></tbody></table><p>5\uFF09\u6848\u4F8B\u5B9E\u64CD</p><p>\uFF081\uFF09\u7EDF\u8BA1passwd\u6587\u4EF6\u540D\uFF0C\u6BCF\u884C\u7684\u884C\u53F7\uFF0C\u6BCF\u884C\u7684\u5217\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ awk -F : &#39;{print &quot;filename:&quot; FILENAME  &quot;,linenum:&quot; NR &quot;,col:&quot;NF}&#39; passwd </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">filename:passwd,linenum:1,col:7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">filename:passwd,linenum:2,col:7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">filename:passwd,linenum:3,col:7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u3002\u3002\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u67E5\u8BE2ifconfig\u547D\u4EE4\u8F93\u51FA\u7ED3\u679C\u4E2D\u7684\u7A7A\u884C\u6240\u5728\u7684\u884C\u53F7</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ifconfig | awk &#39;/^$/{print NR}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">18</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">26</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u5207\u5272IP</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ ifconfig ens33 | grep netmask | awk -F &quot;inet&quot; &#39;{print $2}&#39; | awk -F &quot; &quot; &#39;{print $1}&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.6.101</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_9-3-sort" tabindex="-1">9.3 sort <a class="header-anchor" href="#_9-3-sort" aria-hidden="true">#</a></h2><p>sort\u547D\u4EE4\u662F\u5728Linux\u91CC\u975E\u5E38\u6709\u7528\uFF0C\u5B83\u5C06\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u5C06\u6392\u5E8F\u7ED3\u679C\u6807\u51C6\u8F93\u51FA\u3002</p><p>1\uFF09\u57FA\u672C\u8BED\u6CD5</p><p>Sort (\u9009\u9879) (\u53C2\u6570)</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-n</td><td>\u4F9D\u7167\u6570\u503C\u7684\u5927\u5C0F\u6392\u5E8F</td></tr><tr><td>-r</td><td>\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6765\u6392\u5E8F</td></tr><tr><td>-t</td><td>\u8BBE\u7F6E\u6392\u5E8F\u65F6\u6240\u7528\u7684\u5206\u9694\u5B57\u7B26</td></tr><tr><td>-k</td><td>\u6307\u5B9A\u9700\u8981\u6392\u5E8F\u7684\u5217</td></tr></tbody></table><p>\u53C2\u6570\uFF1A\u6307\u5B9A\u5F85\u6392\u5E8F\u7684\u6587\u4EF6\u5217\u8868</p><p>2\uFF09\u6848\u4F8B\u5B9E\u64CD</p><p>\uFF081\uFF09\u6570\u636E\u51C6\u5907</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ touch sort.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ vim sort.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bb:40:5.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bd:20:4.2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xz:50:2.3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cls:10:3.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ss:30:1.6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF082\uFF09\u6309\u7167\u201C\uFF1A\u201D\u5206\u5272\u540E\u7684\u7B2C\u4E09\u5217\u5012\u5E8F\u6392\u5E8F\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ sort -t : -nrk 3  sort.txt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bb:40:5.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bd:20:4.2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cls:10:3.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xz:50:2.3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ss:30:1.6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_9-4-wc" tabindex="-1">9**.4 wc** <a class="header-anchor" href="#_9-4-wc" aria-hidden="true">#</a></h2><p>wc\u547D\u4EE4\u7528\u6765\u7EDF\u8BA1\u6587\u4EF6\u4FE1\u606F\u3002\u5229\u7528wc\u6307\u4EE4\u6211\u4EEC\u53EF\u4EE5\u8BA1\u7B97\u6587\u4EF6\u7684\u884C\u6570\uFF0C\u5B57\u8282\u6570\u3001\u5B57\u7B26\u6570\u7B49\u3002</p><p>1\uFF09\u57FA\u672C\u8BED\u6CD5</p><p>wc [\u9009\u9879\u53C2\u6570] filename</p><table><thead><tr><th>\u9009\u9879\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>-l</td><td>\u7EDF\u8BA1\u6587\u4EF6\u884C\u6570</td></tr><tr><td>-w</td><td>\u7EDF\u8BA1\u6587\u4EF6\u7684\u5355\u8BCD\u6570</td></tr><tr><td>-m</td><td>\u7EDF\u8BA1\u6587\u4EF6\u7684\u5B57\u7B26\u6570</td></tr><tr><td>-c</td><td>\u7EDF\u8BA1\u6587\u4EF6\u7684\u5B57\u8282\u6570</td></tr></tbody></table><p>2\uFF09\u6848\u4F8B\u5B9E\u64CD</p><p>\u7EDF\u8BA1/etc/profile\u6587\u4EF6\u7684\u884C\u6570\u3001\u5355\u8BCD\u6570\u3001\u5B57\u8282\u6570\uFF01</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ wc -l /etc/profile </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ wc -w /etc/profile </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ wc -m /etc/profile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u7B2C\u5341\u8282-\u6B63\u5219\u8868\u8FBE\u5F0F\u5165\u95E8" tabindex="-1">\u7B2C\u5341\u8282 \u6B63\u5219\u8868\u8FBE\u5F0F\u5165\u95E8 <a class="header-anchor" href="#\u7B2C\u5341\u8282-\u6B63\u5219\u8868\u8FBE\u5F0F\u5165\u95E8" aria-hidden="true">#</a></h1><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u5355\u4E2A\u5B57\u7B26\u4E32\u6765\u63CF\u8FF0\u3001\u5339\u914D\u4E00\u7CFB\u5217\u7B26\u5408\u67D0\u4E2A\u8BED\u6CD5\u89C4\u5219\u7684\u5B57\u7B26\u4E32\u3002\u5728\u5F88\u591A\u6587\u672C\u7F16\u8F91\u5668\u91CC\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u901A\u5E38\u88AB\u7528\u6765\u68C0\u7D22\u3001\u66FF\u6362\u90A3\u4E9B\u7B26\u5408\u67D0\u4E2A\u6A21\u5F0F\u7684\u6587\u672C\u3002\u5728Linux\u4E2D\uFF0Cgrep\uFF0Csed\uFF0Cawk\u7B49\u547D\u4EE4\u90FD\u652F\u6301\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\u3002</p><h2 id="_10-1-\u5E38\u89C4\u5339\u914D" tabindex="-1">1<strong>0.1</strong> \u5E38\u89C4\u5339\u914D <a class="header-anchor" href="#_10-1-\u5E38\u89C4\u5339\u914D" aria-hidden="true">#</a></h2><p>\u4E00\u4E32\u4E0D\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u5B83\u81EA\u5DF1\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep atguigu</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C31\u4F1A\u5339\u914D\u6240\u6709\u5305\u542Batguigu\u7684\u884C</p><h2 id="_10-2-\u5E38\u7528\u7279\u6B8A\u5B57\u7B26" tabindex="-1">1<strong>0.2</strong> \u5E38\u7528\u7279\u6B8A\u5B57\u7B26 <a class="header-anchor" href="#_10-2-\u5E38\u7528\u7279\u6B8A\u5B57\u7B26" aria-hidden="true">#</a></h2><p>1\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A<strong>^</strong></p><p>^ \u5339\u914D\u4E00\u884C\u7684\u5F00\u5934\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep ^a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5339\u914D\u51FA\u6240\u6709\u4EE5a\u5F00\u5934\u7684\u884C</p><p>2\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A<strong>$</strong></p><p>$ \u5339\u914D\u4E00\u884C\u7684\u7ED3\u675F\uFF0C\u4F8B\u5982</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep t$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5339\u914D\u51FA\u6240\u6709\u4EE5t\u7ED3\u5C3E\u7684\u884C</p><p>\u601D\u8003\uFF1A^<strong>$</strong> \u5339\u914D\u4EC0\u4E48\uFF1F</p><p>3\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A<strong>.</strong></p><p>. \u5339\u914D\u4E00\u4E2A\u4EFB\u610F\u7684\u5B57\u7B26\uFF0C\u4F8B\u5982</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep r..t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5339\u914D\u5305\u542Brabt,rbbt,rxdt,root\u7B49\u7684\u6240\u6709\u884C</p><p>4\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A*</p><ul><li>\u4E0D\u5355\u72EC\u4F7F\u7528\uFF0C\u4ED6\u548C\u4E0A\u4E00\u4E2A\u5B57\u7B26\u8FDE\u7528\uFF0C\u8868\u793A\u5339\u914D\u4E0A\u4E00\u4E2A\u5B57\u7B260\u6B21\u6216\u591A\u6B21\uFF0C\u4F8B\u5982</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep ro*t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5339\u914Drt, rot, root, rooot, roooot\u7B49\u6240\u6709\u884C</p><p>\u601D\u8003\uFF1A.* \u5339\u914D\u4EC0\u4E48\uFF1F</p><p>5\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A[ ]</p><p>[ ] \u8868\u793A\u5339\u914D\u67D0\u4E2A\u8303\u56F4\u5185\u7684\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4F8B\u5982</p><p>[6,8]------\u5339\u914D6\u6216\u80058</p><p>[0-9]------\u5339\u914D\u4E00\u4E2A0-9\u7684\u6570\u5B57</p><p>[0-9]*------\u5339\u914D\u4EFB\u610F\u957F\u5EA6\u7684\u6570\u5B57\u5B57\u7B26\u4E32</p><p>[a-z]------\u5339\u914D\u4E00\u4E2Aa-z\u4E4B\u95F4\u7684\u5B57\u7B26</p><p>[a-z]* ------\u5339\u914D\u4EFB\u610F\u957F\u5EA6\u7684\u5B57\u6BCD\u5B57\u7B26\u4E32</p><p>[a-c, e-f]-\u5339\u914Da-c\u6216\u8005e-f\u4E4B\u95F4\u7684\u4EFB\u610F\u5B57\u7B26</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep r[a,b,c]*t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5339\u914Drt,rat, rbt, rabt, rbact,rabccbaaacbt\u7B49\u7B49\u6240\u6709\u884C</p><p>6\uFF09\u7279\u6B8A\u5B57\u7B26\uFF1A\\</p><p>\\ \u8868\u793A\u8F6C\u4E49\uFF0C\u5E76\u4E0D\u4F1A\u5355\u72EC\u4F7F\u7528\u3002\u7531\u4E8E\u6240\u6709\u7279\u6B8A\u5B57\u7B26\u90FD\u6709\u5176\u7279\u5B9A\u5339\u914D\u6A21\u5F0F\uFF0C\u5F53\u6211\u4EEC\u60F3\u5339\u914D\u67D0\u4E00\u7279\u6B8A\u5B57\u7B26\u672C\u8EAB\u65F6\uFF08\u4F8B\u5982\uFF0C\u6211\u60F3\u627E\u51FA\u6240\u6709\u5305\u542B &#39;$&#39; \u7684\u884C\uFF09\uFF0C\u5C31\u4F1A\u78B0\u5230\u56F0\u96BE\u3002\u6B64\u65F6\u6211\u4EEC\u5C31\u8981\u5C06\u8F6C\u4E49\u5B57\u7B26\u548C\u7279\u6B8A\u5B57\u7B26\u8FDE\u7528\uFF0C\u6765\u8868\u793A\u7279\u6B8A\u5B57\u7B26\u672C\u8EAB\uFF0C\u4F8B\u5982</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[atguigu@hadoop101 datas]$ cat /etc/passwd | grep a\\$b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C31\u4F1A\u5339\u914D\u6240\u6709\u5305\u542B a$b \u7684\u884C\u3002</p>`,365)]))}var D=a(o,[["render",c]]);export{d as __pageData,D as default};
