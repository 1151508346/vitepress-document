import{_ as t,c as r,a as o,o as a}from"./app.580fb14e.js";const S=JSON.parse('{"title":"XSS\u3001CSRF\u653B\u51FB\u4EE5\u53CA\u9884\u9632\u624B\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"xss","slug":"xss"},{"level":2,"title":"CSRF","slug":"csrf"}],"relativePath":"mianshi/hunluan/xss-crsf.md"}'),p={name:"mianshi/hunluan/xss-crsf.md"};function n(l,e,s,i,c,d){return a(),r("div",null,e[0]||(e[0]=[o('<h1 id="xss\u3001csrf\u653B\u51FB\u4EE5\u53CA\u9884\u9632\u624B\u6BB5" tabindex="-1">XSS\u3001CSRF\u653B\u51FB\u4EE5\u53CA\u9884\u9632\u624B\u6BB5 <a class="header-anchor" href="#xss\u3001csrf\u653B\u51FB\u4EE5\u53CA\u9884\u9632\u624B\u6BB5" aria-hidden="true">#</a></h1><h2 id="xss" tabindex="-1">xss <a class="header-anchor" href="#xss" aria-hidden="true">#</a></h2><p><strong>XSS\u5168\u7A0BCross Site Scripting\uFF0C\u540D\u4E3A\u8DE8\u7AD9\u811A\u672C\u653B\u51FB</strong>\uFF0C\u662F\u4E00\u79CD\u5E38\u89C1\u4E8E Web \u5E94\u7528\u4E2D\u7684\u8BA1\u7B97\u673A\u5B89\u5168\u6F0F\u6D1E\u3002</p><p>\u6076\u610F\u653B\u51FB\u8005\u5F80 Web \u9875\u9762\u91CC\u5D4C\u5165\u6076\u610F\u7684\u5BA2\u6237\u7AEF\u811A\u672C\uFF0C\u5F53\u7528\u6237\u6D4F\u89C8\u6B64\u7F51\u9875\u65F6\uFF0C\u811A\u672C\u5C31\u4F1A\u5728\u7528\u6237\u7684\u6D4F\u89C8\u5668\u4E0A\u6267\u884C\uFF0C\u8FDB\u800C\u8FBE\u5230\u653B\u51FB\u8005\u7684\u76EE\u7684\u3002 \u6BD4\u5982\u83B7\u53D6\u7528\u6237\u7684 Cookie\u3001\u5BFC\u822A\u5230\u6076\u610F\u7F51\u7AD9\u3001\u643A\u5E26\u6728\u9A6C\u7B49\u3002</p><p>\u653B\u51FB\u8005\u5BF9\u5BA2\u6237\u7AEF\u7F51\u9875\u6CE8\u5165\u7684\u6076\u610F\u811A\u672C\u4E00\u822C\u5305\u62EC JavaScript\uFF0C\u6709\u65F6\u4E5F\u4F1A\u5305\u542B HTML \u548C Flash\u3002 \u6709\u5F88\u591A\u79CD\u65B9\u5F0F\u8FDB\u884C XSS \u653B\u51FB\uFF0C\u4F46\u5B83\u4EEC\u7684\u5171\u540C\u70B9\u4E3A\uFF1A\u5C06\u4E00\u4E9B\u9690\u79C1\u6570\u636E\u50CF cookie\u3001session \u53D1\u9001\u7ED9\u653B\u51FB\u8005\uFF0C\u5C06\u53D7\u5BB3\u8005\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u7531\u653B\u51FB\u8005\u63A7\u5236\u7684\u7F51\u7AD9\uFF0C\u5728\u53D7\u5BB3\u8005\u7684\u673A\u5668\u4E0A\u8FDB\u884C\u4E00\u4E9B\u6076\u610F\u64CD\u4F5C\u3002</p><p>\u5927\u90E8\u5206\u7684 XSS \u6F0F\u6D1E\u90FD\u662F\u7531\u4E8E\u6CA1\u6709\u5904\u7406\u597D\u7528\u6237\u7684\u8F93\u5165\uFF0C\u5BFC\u81F4\u6076\u610F\u811A\u672C\u5728\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\u3002\u4EFB\u4F55\u8F93\u5165\u63D0\u4EA4\u6570\u636E\u7684\u5730\u65B9\u90FD\u6709\u53EF\u80FD\u5B58\u5728 XSS\u3002</p><p><strong>XSS\u653B\u51FB\u53EF\u4EE5\u5206\u4E3A3\u7C7B\uFF1A\u53CD\u5C04\u578B\uFF08\u975E\u6301\u4E45\u578B\uFF09\u3001\u5B58\u50A8\u578B\uFF08\u6301\u4E45\u578B\uFF09\u3001\u57FA\u4E8EDOM\u3002</strong></p><hr><ul><li>\u53CD\u5C04\u578B \u53CD\u5C04\u578B XSS \u53EA\u662F\u7B80\u5355\u5730\u628A\u7528\u6237\u8F93\u5165\u7684\u6570\u636E \u201C\u53CD\u5C04\u201D \u7ED9\u6D4F\u89C8\u5668\uFF0C\u8FD9\u79CD\u653B\u51FB\u65B9\u5F0F\u5F80\u5F80\u9700\u8981\u653B\u51FB\u8005\u8BF1\u4F7F\u7528\u6237\u70B9\u51FB\u4E00\u4E2A\u6076\u610F\u94FE\u63A5\uFF0C\u6216\u8005\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\uFF0C\u6216\u8005\u8FDB\u5165\u4E00\u4E2A\u6076\u610F\u7F51\u7AD9\u65F6\uFF0C\u6CE8\u5165\u811A\u672C\u8FDB\u5165\u88AB\u653B\u51FB\u8005\u7684\u7F51\u7AD9\u3002</li></ul><p>\u653B\u51FB\u8005\u53EF\u4EE5\u6CE8\u5165\u4EFB\u610F\u7684\u6076\u610F\u811A\u672C\u8FDB\u884C\u653B\u51FB\uFF0C\u53EF\u80FD\u6CE8\u5165\u6076\u4F5C\u5267\u811A\u672C\uFF0C\u6216\u8005\u6CE8\u5165\u80FD\u83B7\u53D6\u7528\u6237\u9690\u79C1\u6570\u636E(\u5982cookie)\u7684\u811A\u672C\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u653B\u51FB\u8005\u7684\u76EE\u7684\u3002</p><ul><li>\u6301\u4E45\u578B \u5B58\u50A8\u578B XSS \u4F1A\u628A\u7528\u6237\u8F93\u5165\u7684\u6570\u636E \u201C\u5B58\u50A8\u201D \u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u5F53\u6D4F\u89C8\u5668\u8BF7\u6C42\u6570\u636E\u65F6\uFF0C\u811A\u672C\u4ECE\u670D\u52A1\u5668\u4E0A\u4F20\u56DE\u5E76\u6267\u884C\u3002\u8FD9\u79CD XSS \u653B\u51FB\u5177\u6709\u5F88\u5F3A\u7684\u7A33\u5B9A\u6027\u3002</li></ul><p>\u6BD4\u8F83\u5E38\u89C1\u7684\u4E00\u4E2A\u573A\u666F\u662F\u653B\u51FB\u8005\u5728\u793E\u533A\u6216\u8BBA\u575B\u4E0A\u5199\u4E0B\u4E00\u7BC7\u5305\u542B\u6076\u610F JavaScript \u4EE3\u7801\u7684\u6587\u7AE0\u6216\u8BC4\u8BBA\uFF0C\u6587\u7AE0\u6216\u8BC4\u8BBA\u53D1\u8868\u540E\uFF0C\u6240\u6709\u8BBF\u95EE\u8BE5\u6587\u7AE0\u6216\u8BC4\u8BBA\u7684\u7528\u6237\uFF0C\u90FD\u4F1A\u5728\u4ED6\u4EEC\u7684\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\u8FD9\u6BB5\u6076\u610F\u7684 JavaScript \u4EE3\u7801\u3002</p><ul><li>DOM\u578B \u57FA\u4E8E DOM \u7684 XSS \u653B\u51FB\u662F\u6307\u901A\u8FC7\u6076\u610F\u811A\u672C\u4FEE\u6539\u9875\u9762\u7684 DOM \u7ED3\u6784\uFF0C\u662F\u7EAF\u7CB9\u53D1\u751F\u5728\u5BA2\u6237\u7AEF\u7684\u653B\u51FB\u3002</li></ul><p>XSS \u4EE3\u7801\u53EF\u80FD\u662F\u63D2\u5165\u7B80\u5355\u7684&lt; script src=&quot;<a href="https://test.com/haker.js" target="_blank" rel="noopener noreferrer">https://test.com/haker.js</a>&quot; &gt;\uFF0C\u8F7D\u5165\u7B2C\u4E09\u65B9\u7684\u6076\u610F\u811A\u672C\uFF0C\u8FD9\u4E9B\u6076\u610F\u811A\u672C\uFF0C\u901A\u5E38\u662F\u8BFB\u53D6\u7528\u6237\u7684 cookie \u3002</p><p>XSS\u5982\u4F55\u9632\u5FA1\uFF1F XSS \u6F0F\u6D1E\u662F\u7531\u4E8E\u5BF9\u7528\u6237\u63D0\u4EA4\u7684\u6570\u636E\u6CA1\u6709\u7ECF\u8FC7\u4E25\u683C\u7684\u8FC7\u6EE4\u5904\u7406\u9020\u6210\u7684\uFF0C\u6240\u4EE5\u9632\u5FA1\u7684\u539F\u5219\u5C31\u662F\u4E0D\u76F8\u4FE1\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\uFF0C\u5BF9\u8F93\u5165\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5BF9\u8F93\u51FA\u8FDB\u884C\u7F16\u7801\u3002</p><p>1\u3001<strong>\u4F7F\u7528XSS Filter(\u8F93\u5165\u68C0\u67E5)\uFF1A</strong> \u9488\u5BF9\u7528\u6237\u63D0\u4EA4\u7684\u6570\u636E\u8FDB\u884C\u6709\u6548\u7684\u9A8C\u8BC1\uFF0C\u53EA\u63A5\u6536\u6211\u4EEC\u89C4\u5B9A\u7684\u957F\u5EA6\u6216\u5185\u5BB9\u7684\u63D0\u4EA4\uFF0C\u8FC7\u6EE4\u6389\u5176\u4ED6\u7684\u8F93\u5165\u5185\u5BB9\u3002</p><p>eg\uFF1A</p><p>\u8868\u5355\u6570\u636E\u6307\u5B9A\u503C\u7684\u7C7B\u578B\uFF1A\u5E74\u9F84\u53EA\u80FD\u662F int \u3001name \u53EA\u80FD\u662F\u5B57\u6BCD\u6570\u5B57\u7B49\u3002 \u8FC7\u6EE4\u6216\u79FB\u9664\u7279\u6B8A\u7684 html \u6807\u7B7E\uFF1A&lt;script&gt;\u3001&lt;iframe&gt;\u7B49\u3002 \u8FC7\u6EE4 js \u4E8B\u4EF6\u7684\u6807\u7B7E\uFF1Aonclick\u3001onerror\u3001onfocus\u7B49\u3002 2\u3001<strong>html\u5B9E\u4F53</strong> \u5F53\u9700\u8981\u5F80 HTML \u6807\u7B7E\u4E4B\u95F4\u63D2\u5165\u4E0D\u53EF\u4FE1\u6570\u636E\u7684\u65F6\u5019\uFF0C\u9996\u5148\u8981\u505A\u7684\u5C31\u662F\u5BF9\u4E0D\u53EF\u4FE1\u6570\u636E\u8FDB\u884C HTML Entity \u7F16\u7801\uFF0C\u5728 html \u4E2D\u6709\u4E9B\u5B57\u7B26\u5BF9\u4E8E HTML \u6765\u8BF4\u662F\u5177\u6709\u7279\u6B8A\u610F\u4E49\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u7279\u6B8A\u5B57\u7B26\u4E0D\u5141\u8BB8\u5728\u6587\u672C\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528\u5B9E\u4F53\u5B57\u7B26\u3002</p><p>html \u5B9E\u4F53\u7684\u5B58\u5728\u662F\u5BFC\u81F4 XSS \u6F0F\u6D1E\u7684\u4E3B\u8981\u539F\u56E0\u4E4B\u4E00\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5C06\u5B9E\u4F53\u8F6C\u5316\u4E3A\u76F8\u5E94\u7684\u5B9E\u4F53\u7F16\u53F7\u3002</p><table><thead><tr><th>\u663E\u793A\u7ED3\u679C</th><th>\u63CF\u8FF0</th><th>\u5B9E\u4F53\u7F16\u53F7</th></tr></thead><tbody><tr><td></td><td>\u7A7A\u683C</td><td>&amp;nbsp ;</td></tr><tr><td>&lt;</td><td>\u5C0F\u4E8E</td><td>&amp;lt ;</td></tr><tr><td>&gt;</td><td>\u5927\u4E8E</td><td>&amp;gt ;</td></tr><tr><td>&amp;</td><td>\u548C</td><td>&amp;amp ;</td></tr><tr><td>\u2018\u2019</td><td>\u5F15\u53F7</td><td>&amp;quot</td></tr></tbody></table><p>3\u3001<strong>Http Only cookie</strong></p><p>\u8BB8\u591A XSS \u653B\u51FB\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u83B7\u53D6\u7528\u6237\u7684 cookie\uFF0C\u5C06\u91CD\u8981\u7684 cookie \u6807\u8BB0\u4E3A http only\uFF0C\u8FD9\u6837\u7684\u8BDD\u5F53\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u7AEF\u53D1\u8D77\u8BF7\u6C42\u65F6\u5C31\u4F1A\u5E26\u4E0A cookie \u5B57\u6BB5\uFF0C\u4F46\u662F\u5728\u811A\u672C\u4E2D\u5374\u4E0D\u80FD\u8BBF\u95EE cookie\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u4E86 XSS \u653B\u51FB\u5229\u7528 js \u7684 document.cookie\u83B7\u53D6 cookie\u3002</p><p>\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014</p><h2 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-hidden="true">#</a></h2><p>CSRF\uFF0C\u5373 Cross Site Request Forgery\uFF0C\u540D\u4E3A\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF0C\u662F\u4E00\u79CD\u52AB\u6301\u53D7\u4FE1\u4EFB\u7528\u6237\u5411\u670D\u52A1\u5668\u53D1\u9001\u975E\u9884\u671F\u8BF7\u6C42\u7684\u653B\u51FB\u65B9\u5F0F\u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CCSRF\u653B\u51FB\u662F\u653B\u51FB\u8005\u501F\u52A9\u53D7\u5BB3\u8005\u7684Cookie\u9A97\u53D6\u670D\u52A1\u5668\u7684\u4FE1\u4EFB\uFF0C\u53EF\u4EE5\u5728\u53D7\u5BB3\u8005\u6BEB\u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\u4EE5\u53D7\u5BB3\u8005\u540D\u4E49\u4F2A\u9020\u8BF7\u6C42\u53D1\u9001\u7ED9\u53D7\u653B\u51FB\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u5728\u672A\u6388\u6743\u7684\u60C5\u51B5\u4E0B\u6267\u884C\u5728\u6743\u9650\u4FDD\u62A4\u4E4B\u4E0B\u7684\u64CD\u4F5C\u3002</p><p>CSRF\u653B\u51FB\u539F\u7406\u53CA\u8FC7\u7A0B\uFF1A</p><ol><li>\u7528\u6237C\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8BBF\u95EE\u53D7\u4FE1\u4EFB\u7F51\u7AD9A\uFF0C\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BF7\u6C42\u767B\u5F55\u7F51\u7AD9A\uFF1B</li><li>\u5728\u7528\u6237\u4FE1\u606F\u901A\u8FC7\u9A8C\u8BC1\u540E\uFF0C\u7F51\u7AD9A\u4EA7\u751FCookie\u4FE1\u606F\u5E76\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u6B64\u65F6\u7528\u6237\u767B\u5F55\u7F51\u7AD9A\u6210\u529F\uFF0C\u53EF\u4EE5\u6B63\u5E38\u53D1\u9001\u8BF7\u6C42\u5230\u7F51\u7AD9A\uFF1B</li><li>\u7528\u6237\u672A\u9000\u51FA\u7F51\u7AD9A\u4E4B\u524D\uFF0C\u5728\u540C\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6253\u5F00\u4E00\u4E2ATab\u9875\u8BBF\u95EE\u7F51\u7AD9B\uFF1B</li><li>\u7F51\u7AD9B\u63A5\u6536\u5230\u7528\u6237\u8BF7\u6C42\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E9B\u653B\u51FB\u6027\u4EE3\u7801\uFF0C\u5E76\u53D1\u51FA\u4E00\u4E2A\u8BF7\u6C42\u8981\u6C42\u8BBF\u95EE\u7B2C\u4E09\u65B9\u7AD9\u70B9A\u3002\uFF1B</li><li>\u6D4F\u89C8\u5668\u5728\u63A5\u6536\u5230\u8FD9\u4E9B\u653B\u51FB\u6027\u4EE3\u7801\u540E\uFF0C\u6839\u636E\u7F51\u7AD9B\u7684\u8BF7\u6C42\uFF0C\u5728\u7528\u6237\u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\u643A\u5E26Cookie\u4FE1\u606F\uFF0C\u5411\u7F51\u7AD9A\u53D1\u51FA\u8BF7\u6C42\u3002\u7F51\u7AD9A\u5E76\u4E0D\u77E5\u9053\u8BE5\u8BF7\u6C42\u5176\u5B9E\u662F\u7531B\u53D1\u8D77\u7684\uFF0C\u6240\u4EE5\u4F1A\u6839\u636E\u7528\u6237C\u7684Cookie\u4FE1\u606F\u4EE5C\u7684\u6743\u9650\u5904\u7406\u8BE5\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u6765\u81EA\u7F51\u7AD9B\u7684\u6076\u610F\u4EE3\u7801\u88AB\u6267\u884C\u3002</li></ol><p>CSRF\u653B\u51FB\u5B9E\u4F8B\uFF1A</p><p>\u53D7\u5BB3\u8005 Bob \u5728\u94F6\u884C\u6709\u4E00\u7B14\u5B58\u6B3E\uFF0C\u901A\u8FC7\u5BF9\u94F6\u884C\u7684\u7F51\u7AD9\u53D1\u9001\u8BF7\u6C42 <a href="http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=bob2" target="_blank" rel="noopener noreferrer">http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=bob2</a> \u53EF\u4EE5\u4F7F Bob \u628A 1000000 \u7684\u5B58\u6B3E\u8F6C\u5230 bob2 \u7684\u8D26\u53F7\u4E0B\u3002 \u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u8BF7\u6C42\u53D1\u9001\u5230\u7F51\u7AD9\u540E\uFF0C\u670D\u52A1\u5668\u4F1A\u5148\u9A8C\u8BC1\u8BE5\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u4E00\u4E2A\u5408\u6CD5\u7684 session\uFF0C\u5E76\u4E14\u8BE5 session \u7684\u7528\u6237 Bob \u5DF2\u7ECF\u6210\u529F\u767B\u9646\u3002</p><p>\u9ED1\u5BA2 Mallory \u81EA\u5DF1\u5728\u8BE5\u94F6\u884C\u4E5F\u6709\u8D26\u6237\uFF0C\u4ED6\u77E5\u9053\u4E0A\u6587\u4E2D\u7684 URL \u53EF\u4EE5\u628A\u94B1\u8FDB\u884C\u8F6C\u5E10\u64CD\u4F5C\u3002Mallory \u53EF\u4EE5\u81EA\u5DF1\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u7ED9\u94F6\u884C\uFF1A<a href="http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory%E3%80%82%E4%BD%86%E6%98%AF%E8%BF%99%E4%B8%AA%E8%AF%B7%E6%B1%82%E6%9D%A5%E8%87%AA" target="_blank" rel="noopener noreferrer">http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory\u3002\u4F46\u662F\u8FD9\u4E2A\u8BF7\u6C42\u6765\u81EA</a> Mallory \u800C\u975E Bob\uFF0C\u4ED6\u4E0D\u80FD\u901A\u8FC7\u5B89\u5168\u8BA4\u8BC1\uFF0C\u56E0\u6B64\u8BE5\u8BF7\u6C42\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002</p><p>\u8FD9\u65F6\uFF0CMallory \u60F3\u5230\u4F7F\u7528 CSRF \u7684\u653B\u51FB\u65B9\u5F0F\uFF0C\u4ED6\u5148\u81EA\u5DF1\u505A\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5728\u7F51\u7AD9\u4E2D\u653E\u5165\u5982\u4E0B\u4EE3\u7801\uFF1A src=\u201D<a href="http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory" target="_blank" rel="noopener noreferrer">http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory</a> \u201D\uFF0C\u5E76\u4E14\u901A\u8FC7\u5E7F\u544A\u7B49\u8BF1\u4F7F Bob \u6765\u8BBF\u95EE\u4ED6\u7684\u7F51\u7AD9\u3002\u5F53 Bob \u8BBF\u95EE\u8BE5\u7F51\u7AD9\u65F6\uFF0C\u4E0A\u8FF0 url \u5C31\u4F1A\u4ECE Bob \u7684\u6D4F\u89C8\u5668\u53D1\u5411\u94F6\u884C\uFF0C\u800C\u8FD9\u4E2A\u8BF7\u6C42\u4F1A\u9644\u5E26 Bob \u6D4F\u89C8\u5668\u4E2D\u7684 cookie \u4E00\u8D77\u53D1\u5411\u94F6\u884C\u670D\u52A1\u5668\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u8BF7\u6C42\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A\u4ED6\u8981\u6C42 Bob \u7684\u8BA4\u8BC1\u4FE1\u606F\u3002 \u4F46\u662F\uFF0C\u5982\u679C Bob \u5F53\u65F6\u6070\u5DE7\u521A\u8BBF\u95EE\u4ED6\u7684\u94F6\u884C\u540E\u4E0D\u4E45\uFF0C\u4ED6\u7684\u6D4F\u89C8\u5668\u4E0E\u94F6\u884C\u7F51\u7AD9\u4E4B\u95F4\u7684 session \u5C1A\u672A\u8FC7\u671F\uFF0C\u6D4F\u89C8\u5668\u7684 cookie \u4E4B\u4E2D\u542B\u6709 Bob \u7684\u8BA4\u8BC1\u4FE1\u606F\u3002 \u8FD9\u65F6\uFF0C\u60B2\u5267\u53D1\u751F\u4E86\uFF0C\u8FD9\u4E2A url \u8BF7\u6C42\u5C31\u4F1A\u5F97\u5230\u54CD\u5E94\uFF0C\u94B1\u5C06\u4ECE Bob \u7684\u8D26\u53F7\u8F6C\u79FB\u5230 Mallory \u7684\u8D26\u53F7\uFF0C\u800C Bob \u5F53\u65F6\u6BEB\u4E0D\u77E5\u60C5\u3002\u7B49\u4EE5\u540E Bob \u53D1\u73B0\u8D26\u6237\u94B1\u5C11\u4E86\uFF0C\u5373\u4F7F\u4ED6\u53BB\u94F6\u884C\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u4ED6\u4E5F\u53EA\u80FD\u53D1\u73B0\u786E\u5B9E\u6709\u4E00\u4E2A\u6765\u81EA\u4E8E\u4ED6\u672C\u4EBA\u7684\u5408\u6CD5\u8BF7\u6C42\u8F6C\u79FB\u4E86\u8D44\u91D1\uFF0C\u6CA1\u6709\u4EFB\u4F55\u88AB\u653B\u51FB\u7684\u75D5\u8FF9\u3002\u800C Mallory \u5219\u53EF\u4EE5\u62FF\u5230\u94B1\u540E\u900D\u9065\u6CD5\u5916\u3002</p><p>\u9632\u5FA1CSRF\u653B\u51FB\uFF1A \u76EE\u524D\u9632\u5FA1 CSRF \u653B\u51FB\u4E3B\u8981\u6709\u4E09\u79CD\u7B56\u7565\uFF1A\u9A8C\u8BC1 HTTP Referer \u5B57\u6BB5\uFF1B\u5728\u8BF7\u6C42\u5730\u5740\u4E2D\u6DFB\u52A0 token \u5E76\u9A8C\u8BC1\uFF1B\u5728 HTTP \u5934\u4E2D\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u9A8C\u8BC1\u3002</p><p>1\u3001\u9A8C\u8BC1HTTP Referer\u5B57\u6BB5 \u6839\u636E HTTP \u534F\u8BAE\uFF0C\u5728 HTTP \u5934\u4E2D\u6709\u4E00\u4E2A\u5B57\u6BB5\u53EB Referer\uFF0C\u5B83\u8BB0\u5F55\u4E86\u8BE5 HTTP \u8BF7\u6C42\u7684\u6765\u6E90\u5730\u5740\u3002</p><p>\u901A\u8FC7 Referer Check\uFF0C\u53EF\u4EE5\u68C0\u67E5\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u5408\u6CD5\u7684\u201D\u6E90\u201D\u3002</p><p>\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u4E00\u4E2A\u5B89\u5168\u53D7\u9650\u9875\u9762\u7684\u8BF7\u6C42\u6765\u81EA\u4E8E\u540C\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u6BD4\u5982\u9700\u8981\u8BBF\u95EE <a href="http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory%EF%BC%8C%E7%94%A8%E6%88%B7%E5%BF%85%E9%A1%BB%E5%85%88%E7%99%BB%E9%99%86" target="_blank" rel="noopener noreferrer">http://bank.example/withdraw?account=bob&amp;amount=1000000&amp;for=Mallory\uFF0C\u7528\u6237\u5FC5\u987B\u5148\u767B\u9646</a> bank.example\uFF0C\u7136\u540E\u901A\u8FC7\u70B9\u51FB\u9875\u9762\u4E0A\u7684\u6309\u94AE\u6765\u89E6\u53D1\u8F6C\u8D26\u4E8B\u4EF6\u3002 \u8FD9\u65F6\uFF0C\u8BE5\u8F6C\u5E10\u8BF7\u6C42\u7684 Referer \u503C\u5C31\u4F1A\u662F\u8F6C\u8D26\u6309\u94AE\u6240\u5728\u7684\u9875\u9762\u7684 URL\uFF0C\u901A\u5E38\u662F\u4EE5 bank.example \u57DF\u540D\u5F00\u5934\u7684\u5730\u5740\u3002 \u800C\u5982\u679C\u9ED1\u5BA2\u8981\u5BF9\u94F6\u884C\u7F51\u7AD9\u5B9E\u65BD CSRF \u653B\u51FB\uFF0C\u4ED6\u53EA\u80FD\u5728\u4ED6\u81EA\u5DF1\u7684\u7F51\u7AD9\u6784\u9020\u8BF7\u6C42\uFF0C\u5F53\u7528\u6237\u901A\u8FC7\u9ED1\u5BA2\u7684\u7F51\u7AD9\u53D1\u9001\u8BF7\u6C42\u5230\u94F6\u884C\u65F6\uFF0C\u8BE5\u8BF7\u6C42\u7684 Referer \u662F\u6307\u5411\u9ED1\u5BA2\u81EA\u5DF1\u7684\u7F51\u7AD9\u3002 \u56E0\u6B64\uFF0C\u8981\u9632\u5FA1 CSRF \u653B\u51FB\uFF0C\u94F6\u884C\u7F51\u7AD9\u53EA\u9700\u8981\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u8F6C\u8D26\u8BF7\u6C42\u9A8C\u8BC1\u5176 Referer \u503C\uFF0C\u5982\u679C\u662F\u4EE5 bank.example \u5F00\u5934\u7684\u57DF\u540D\uFF0C\u5219\u8BF4\u660E\u8BE5\u8BF7\u6C42\u662F\u6765\u81EA\u94F6\u884C\u7F51\u7AD9\u81EA\u5DF1\u7684\u8BF7\u6C42\uFF0C\u662F\u5408\u6CD5\u7684\u3002 \u5982\u679C Referer \u662F\u5176\u4ED6\u7F51\u7AD9\u7684\u8BDD\uFF0C\u5219\u6709\u53EF\u80FD\u662F\u9ED1\u5BA2\u7684 CSRF \u653B\u51FB\uFF0C\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002</p><p>\u7136\u800C\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u5E76\u975E\u4E07\u65E0\u4E00\u5931\u3002Referer \u7684\u503C\u662F\u7531\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\uFF0C\u867D\u7136 HTTP \u534F\u8BAE\u4E0A\u6709\u660E\u786E\u7684\u8981\u6C42\uFF0C\u4F46\u662F\u6BCF\u4E2A\u6D4F\u89C8\u5668\u5BF9\u4E8E Referer \u7684\u5177\u4F53\u5B9E\u73B0\u53EF\u80FD\u6709\u5DEE\u522B\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6D4F\u89C8\u5668\u81EA\u8EAB\u6CA1\u6709\u5B89\u5168\u6F0F\u6D1E\u3002\u4F7F\u7528\u9A8C\u8BC1 Referer \u503C\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u628A\u5B89\u5168\u6027\u90FD\u4F9D\u8D56\u4E8E\u7B2C\u4E09\u65B9\uFF08\u5373\u6D4F\u89C8\u5668\uFF09\u6765\u4FDD\u969C\uFF0C\u4ECE\u7406\u8BBA\u4E0A\u6765\u8BB2\uFF0C\u8FD9\u6837\u5E76\u4E0D\u5B89\u5168\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u6D4F\u89C8\u5668\uFF0C\u6BD4\u5982 IE6 \u6216 FF2\uFF0C\u76EE\u524D\u5DF2\u7ECF\u6709\u4E00\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u7BE1\u6539 Referer \u503C\u3002\u5982\u679C bank.example \u7F51\u7AD9\u652F\u6301 IE6 \u6D4F\u89C8\u5668\uFF0C\u9ED1\u5BA2\u5B8C\u5168\u53EF\u4EE5\u628A\u7528\u6237\u6D4F\u89C8\u5668\u7684 Referer \u503C\u8BBE\u4E3A\u4EE5 bank.example \u57DF\u540D\u5F00\u5934\u7684\u5730\u5740\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u4ECE\u800C\u8FDB\u884C CSRF \u653B\u51FB\u3002</p><p>\u5373\u4FBF\u662F\u4F7F\u7528\u6700\u65B0\u7684\u6D4F\u89C8\u5668\uFF0C\u9ED1\u5BA2\u65E0\u6CD5\u7BE1\u6539 Referer \u503C\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u4ECD\u7136\u6709\u95EE\u9898\u3002\u56E0\u4E3A Referer \u503C\u4F1A\u8BB0\u5F55\u4E0B\u7528\u6237\u7684\u8BBF\u95EE\u6765\u6E90\uFF0C\u6709\u4E9B\u7528\u6237\u8BA4\u4E3A\u8FD9\u6837\u4F1A\u4FB5\u72AF\u5230\u4ED6\u4EEC\u81EA\u5DF1\u7684\u9690\u79C1\u6743\uFF0C\u7279\u522B\u662F\u6709\u4E9B\u7EC4\u7EC7\u62C5\u5FC3 Referer \u503C\u4F1A\u628A\u7EC4\u7EC7\u5185\u7F51\u4E2D\u7684\u67D0\u4E9B\u4FE1\u606F\u6CC4\u9732\u5230\u5916\u7F51\u4E2D\u3002\u56E0\u6B64\uFF0C\u7528\u6237\u81EA\u5DF1\u53EF\u4EE5\u8BBE\u7F6E\u6D4F\u89C8\u5668\u4F7F\u5176\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\u4E0D\u518D\u63D0\u4F9B Referer\u3002\u5F53\u4ED6\u4EEC\u6B63\u5E38\u8BBF\u95EE\u94F6\u884C\u7F51\u7AD9\u65F6\uFF0C\u7F51\u7AD9\u4F1A\u56E0\u4E3A\u8BF7\u6C42\u6CA1\u6709 Referer \u503C\u800C\u8BA4\u4E3A\u662F CSRF \u653B\u51FB\uFF0C\u62D2\u7EDD\u5408\u6CD5\u7528\u6237\u7684\u8BBF\u95EE\u3002</p><p>2\u3001\u5728\u8BF7\u6C42\u5730\u5740\u4E2D\u6DFB\u52A0token\u5E76\u9A8C\u8BC1 \u53EF\u4EE5\u5728 HTTP \u8BF7\u6C42\u4E2D\u4EE5\u53C2\u6570\u7684\u5F62\u5F0F\u52A0\u5165\u4E00\u4E2A\u968F\u673A\u4EA7\u751F\u7684 token\uFF0C\u5E76\u5728\u670D\u52A1\u5668\u7AEF\u5EFA\u7ACB\u4E00\u4E2A\u62E6\u622A\u5668\u6765\u9A8C\u8BC1\u8FD9\u4E2A token\uFF0C\u5982\u679C\u8BF7\u6C42\u4E2D\u6CA1\u6709 token \u6216\u8005 token \u5185\u5BB9\u4E0D\u6B63\u786E\uFF0C\u5219\u8BA4\u4E3A\u53EF\u80FD\u662F CSRF \u653B\u51FB\u800C\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002</p><p>\u8FD9\u79CD\u65B9\u6CD5\u8981\u6BD4\u68C0\u67E5 Referer \u8981\u5B89\u5168\u4E00\u4E9B\uFF0Ctoken \u53EF\u4EE5\u5728\u7528\u6237\u767B\u9646\u540E\u4EA7\u751F\u5E76\u653E\u4E8E session \u4E4B\u4E2D\uFF0C\u7136\u540E\u5728\u6BCF\u6B21\u8BF7\u6C42\u65F6\u628A token \u4ECE session \u4E2D\u62FF\u51FA\uFF0C\u4E0E\u8BF7\u6C42\u4E2D\u7684 token \u8FDB\u884C\u6BD4\u5BF9\u3002</p><p>3\u3001\u5728 HTTP \u5934\u4E2D\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u9A8C\u8BC1 \u8FD9\u79CD\u65B9\u6CD5\u4E5F\u662F\u4F7F\u7528 token \u5E76\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u548C\u4E0A\u4E00\u79CD\u65B9\u6CD5\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u91CC\u5E76\u4E0D\u662F\u628A token \u4EE5\u53C2\u6570\u7684\u5F62\u5F0F\u7F6E\u4E8E HTTP \u8BF7\u6C42\u4E4B\u4E2D\uFF0C\u800C\u662F\u628A\u5B83\u653E\u5230 HTTP \u5934\u4E2D\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u91CC\u3002\u901A\u8FC7 XMLHttpRequest \u8FD9\u4E2A\u7C7B\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u7ED9\u6240\u6709\u8BE5\u7C7B\u8BF7\u6C42\u52A0\u4E0A csrftoken \u8FD9\u4E2A HTTP \u5934\u5C5E\u6027\uFF0C\u5E76\u628A token \u503C\u653E\u5165\u5176\u4E2D\u3002</p><p>CSRF\u548CXSS\u7684\u533A\u522B\uFF1A 1\u3001CSRF\u9700\u8981\u767B\u9646\u540E\u64CD\u4F5C\uFF0CXSS\u4E0D\u9700\u8981 2\u3001CSRF\u662F\u8BF7\u6C42\u9875\u9762api\u6765\u5B9E\u73B0\u975E\u6CD5\u64CD\u4F5C\uFF0CXSS\u662F\u5411\u5F53\u524D\u9875\u9762\u690D\u5165js\u811A\u672C\u6765\u4FEE\u6539\u9875\u9762\u5185\u5BB9\u3002 \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014</p><p><a href="https://blog.csdn.net/qq_46658751/article/details/123441204" target="_blank" rel="noopener noreferrer">\u539F\u59CB\u94FE\u63A5:</a> <a href="https://blog.csdn.net/qq_46658751/article/details/123441204" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_46658751/article/details/123441204</a></p>',43)]))}var h=t(p,[["render",n]]);export{S as __pageData,h as default};
