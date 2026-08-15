# CryptoJS 详细学习问答（Q&A）

> 本文以问答形式系统梳理 CryptoJS 的核心用法、原理与工程实践。每个示例均可直接复制运行（Node.js 或浏览器环境）。

## 基础篇

### Q1：CryptoJS 是什么？主要用途与适用场景？

**解答：**

CryptoJS 是一个用纯 JavaScript 实现的加密算法库，无需依赖浏览器原生的 `crypto` 或 Node 的 `crypto` 模块，因此可以在浏览器、Node.js、小程序、React Native 等多种环境统一运行。

它提供的能力主要分三类：

1. **哈希/摘要算法**：MD5、SHA-1、SHA-2（SHA-256/512）、SHA-3、RIPEMD160。
2. **消息认证码（MAC）**：HMAC 系列（HMAC-MD5、HMAC-SHA256 等）。
3. **对称加密**：AES、DES、TripleDES、RC4、Rabbit 等。

**适用场景：**

- 前端对敏感字段（手机号、身份证）做加密后再传输。
- 前后端约定对称密钥进行数据加解密对接。
- 生成签名、校验数据完整性（哈希/HMAC）。
- 对本地缓存（localStorage）内容做简单加密。

**不适用/注意：**

- 前端代码是公开的，**密钥无法真正保密**，CryptoJS 不能替代 HTTPS，也不能作为唯一安全防线。
- 需要非对称加密（RSA/ECC）时，CryptoJS 不提供，需用 `jsencrypt`、`node-forge` 等。

```js
// 一个最简单的示例：计算字符串的 MD5
const CryptoJS = require('crypto-js')

const hash = CryptoJS.MD5('hello world').toString()
console.log(hash) // 5eb63bbbe01eeed093cb22bb8f5acdc3
```

---

### Q2：如何安装与引入 CryptoJS？（npm / CDN / ESM / CommonJS）

**解答：**

**1）npm 安装（推荐工程化项目）：**

```bash
npm install crypto-js
# 或
pnpm add crypto-js
```

**2）CommonJS 引入（Node.js 默认）：**

```js
// 引入整个库
const CryptoJS = require('crypto-js')
console.log(CryptoJS.SHA256('abc').toString())

// 按需引入（减小打包体积，浏览器构建更明显）
const sha256 = require('crypto-js/sha256')
const Hex = require('crypto-js/enc-hex')
console.log(sha256('abc').toString(Hex))
```

**3）ESM 引入（Vite / Webpack / 现代前端）：**

```js
// 默认导入整个库
import CryptoJS from 'crypto-js'
console.log(CryptoJS.AES.encrypt('msg', 'key').toString())

// 命名/按需导入
import sha256 from 'crypto-js/sha256'
import encBase64 from 'crypto-js/enc-base64'
console.log(sha256('abc').toString(encBase64))
```

**4）CDN（浏览器直接用 `<script>`）：**

```html
<!-- 引入完整版，全局挂载为 window.CryptoJS -->
<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/crypto-js.min.js"></script>
<script>
  console.log(CryptoJS.MD5('hello').toString())
</script>
```

**提示：** 4.x 版本移除了对 Node 内置随机源的隐式依赖问题，建议锁定版本（如 `crypto-js@4.2.0`）以避免历史版本的随机数安全隐患。

---

### Q3：核心概念 WordArray 与编码器（Hex / Base64 / Utf8）是什么？

**解答：**

CryptoJS 内部**不直接操作字符串**，而是操作一种叫 **WordArray** 的数据结构。理解它是理解整个库的关键。

**WordArray 是什么？**

WordArray 表示一段二进制数据，内部用 32 位整数（word）数组存储字节。哈希、加密的输入输出本质上都是 WordArray。字符串必须先通过**编码器（Encoder）**转换成 WordArray，反之亦然。

```js
const CryptoJS = require('crypto-js')

// 字符串 -> WordArray（通过 Utf8 编码器解析）
const wordArray = CryptoJS.enc.Utf8.parse('hello')
console.log(wordArray.sigBytes) // 5（字节数）
console.log(wordArray.words)    // [1751477356, ...] 32位整数数组

// WordArray -> 字符串（通过不同编码器 stringify）
console.log(wordArray.toString(CryptoJS.enc.Hex))    // 68656c6c6f
console.log(wordArray.toString(CryptoJS.enc.Base64)) // aGVsbG8=
console.log(wordArray.toString(CryptoJS.enc.Utf8))   // hello
```

**常用编码器：**

| 编码器 | 作用 | 典型场景 |
| ------ | ---- | -------- |
| `enc.Utf8` | 文本 ↔ 字节 | 处理明文字符串 |
| `enc.Hex` | 十六进制字符串 ↔ 字节 | 表示 key/iv、哈希结果 |
| `enc.Base64` | Base64 ↔ 字节 | 网络传输、与后端对接 |
| `enc.Latin1` | 单字节字符 ↔ 字节 | 处理二进制字符流 |

**核心原理提示：**

- **哈希/加密结果默认 `toString()` 是 Hex 编码**，MD5/SHA 默认输出十六进制字符串。
- `parse` 与 `stringify` 是一对逆操作：`enc.Xxx.parse(str)` 把字符串按该编码解析成 WordArray；`wordArray.toString(enc.Xxx)` 把 WordArray 输出成该编码字符串。
- **key/iv 是字符串还是 WordArray，会直接影响加密结果**（后文 AES 部分详解），这是新手最容易踩的坑。

```js
// 演示：同一段二进制用不同编码器输出完全不同
const wa = CryptoJS.enc.Hex.parse('68656c6c6f') // 从 Hex 解析
console.log(wa.toString(CryptoJS.enc.Utf8))      // hello
console.log(wa.toString(CryptoJS.enc.Base64))    // aGVsbG8=
```

---

## 哈希与摘要

### Q4：MD5、SHA-1、SHA-256、SHA-512 如何使用？它们有什么区别？

**解答：**

哈希（摘要）算法把任意长度输入映射为**固定长度**输出，具有**单向性**（不可逆）和**雪崩效应**（输入微变、输出剧变）。

```js
const CryptoJS = require('crypto-js')
const msg = 'hello world'

// 输出默认都是 Hex 字符串
console.log('MD5    :', CryptoJS.MD5(msg).toString())     // 128 位 -> 32 个 hex 字符
console.log('SHA1   :', CryptoJS.SHA1(msg).toString())    // 160 位 -> 40 个 hex 字符
console.log('SHA256 :', CryptoJS.SHA256(msg).toString())  // 256 位 -> 64 个 hex 字符
console.log('SHA512 :', CryptoJS.SHA512(msg).toString())  // 512 位 -> 128 个 hex 字符

// 也可以输出为 Base64
console.log('SHA256(Base64):', CryptoJS.SHA256(msg).toString(CryptoJS.enc.Base64))
```

**区别对比：**

| 算法 | 输出长度 | 安全性 | 建议 |
| ---- | -------- | ------ | ---- |
| MD5 | 128 位 | 已被攻破（存在碰撞） | 仅用于校验/去重，**禁止用于安全场景** |
| SHA-1 | 160 位 | 已被攻破 | 不建议用于安全签名 |
| SHA-256 | 256 位 | 安全 | **推荐**，通用签名/校验 |
| SHA-512 | 512 位 | 安全 | 更长输出，性能略低 |

**原理提示：**

- 哈希**不是加密**，没有解密一说，不能用来"藏"可还原的数据。
- 相同输入永远得到相同输出，因此**直接哈希密码不安全**（易被彩虹表破解），应加"盐"（salt）：

```js
// 密码加盐哈希示例
const password = '123456'
const salt = CryptoJS.lib.WordArray.random(16).toString() // 随机盐
const hashed = CryptoJS.SHA256(password + salt).toString()
console.log('salt:', salt)
console.log('hash:', hashed)
```

---

### Q5：HMAC 消息认证码怎么用？和普通哈希有何不同？

**解答：**

HMAC（Hash-based Message Authentication Code）在哈希基础上引入**密钥**，用于验证消息的**完整性**与**来源真实性**。只有持有相同密钥的双方才能生成/校验一致的 MAC，可防止消息被篡改。

```js
const CryptoJS = require('crypto-js')

const message = 'user=admin&amount=100'
const secretKey = 'my-secret-key'

// 生成 HMAC-SHA256 签名
const signature = CryptoJS.HmacSHA256(message, secretKey).toString()
console.log('HMAC-SHA256:', signature)

// 其他 HMAC 变体
console.log('HMAC-MD5   :', CryptoJS.HmacMD5(message, secretKey).toString())
console.log('HMAC-SHA1  :', CryptoJS.HmacSHA1(message, secretKey).toString())
console.log('HMAC-SHA512:', CryptoJS.HmacSHA512(message, secretKey).toString())
```

**校验示例（服务端验签思路）：**

```js
// 假设接收方也持有 secretKey，重新计算并比对
function verify(message, secretKey, receivedSig) {
  const expected = CryptoJS.HmacSHA256(message, secretKey).toString()
  // 注意：生产环境应使用恒定时间比较，防时序攻击
  return expected === receivedSig
}

console.log(verify(message, secretKey, signature)) // true
```

**HMAC vs 普通哈希：**

- 普通哈希任何人都能算出，无法证明"是谁发的"。
- HMAC 需要密钥，**能防伪造与篡改**，常用于 API 签名、Webhook 验签、JWT（HS256）。
- 安全提示：密钥要有足够长度与随机性，且不能泄露到前端公开代码中。
```

---

## 对称加密

### Q6：AES 加密/解密怎么用？key、iv、mode、padding 分别是什么？

**解答：**

AES 是目前最常用的对称加密算法。对称加密指**加密和解密使用同一把密钥**。理解四个参数是关键：

- **key（密钥）**：加解密的核心。AES 支持 128/192/256 位，即 16/24/32 字节。
- **iv（初始向量）**：CBC 等模式下用于让相同明文加密出不同密文，长度固定 16 字节。
- **mode（加密模式）**：CBC、ECB、CTR、CFB、OFB 等，决定分组间如何链接。
- **padding（填充方式）**：明文长度不足分组时如何补齐，如 Pkcs7、ZeroPadding。

**⚠️ 最重要的坑：key 传字符串 vs 传 WordArray，行为完全不同！**

```js
const CryptoJS = require('crypto-js')

// 用法一：key 传「字符串」-> CryptoJS 会走「口令派生」模式（OpenSSL 兼容）
//         内部用随机盐 + key 派生出真正密钥，输出是含盐的 Base64（U2FsdGVk 开头）
const enc1 = CryptoJS.AES.encrypt('hello', 'password').toString()
console.log(enc1) // 每次都不同：U2FsdGVkX1...
const dec1 = CryptoJS.AES.decrypt(enc1, 'password').toString(CryptoJS.enc.Utf8)
console.log(dec1) // hello

// 用法二：key 传「WordArray」-> 走「原始密钥」模式（与后端对接常用这种）
//         必须同时显式指定 iv、mode、padding
const key = CryptoJS.enc.Utf8.parse('1234567890123456') // 16 字节 = AES-128
const iv  = CryptoJS.enc.Utf8.parse('abcdefgh12345678') // 16 字节 iv

const encrypted = CryptoJS.AES.encrypt('hello world', key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,      // 加密模式
  padding: CryptoJS.pad.Pkcs7   // 填充方式
})
console.log('密文(Base64):', encrypted.toString())              // 传输常用 Base64
console.log('密文(Hex)   :', encrypted.ciphertext.toString())   // 与部分后端对接用 Hex

// 解密：参数必须与加密完全一致
const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
})
console.log('明文:', decrypted.toString(CryptoJS.enc.Utf8)) // hello world
```

**原理提示：**

- **前后端对接务必用"用法二"**（原始密钥 + 明确 iv/mode/padding），否则 Java/Python无法解密"用法一"的 OpenSSL 盐格式。
- iv 不需要保密，但**不能重复使用**，通常随机生成并随密文一起传给对方。
- key 长度决定 AES 位数：16 字节=AES-128，24=AES-192，32=AES-256。

---

### Q7：DES / TripleDES 如何使用？

**解答：**

DES 是较老的对称算法（密钥 8 字节，56 位有效），已不安全；TripleDES（3DES）对数据做三次 DES，密钥 24 字节，安全性更高但性能较低。**新项目建议直接用 AES**，此处仅为兼容老系统。

```js
const CryptoJS = require('crypto-js')

// DES：key 8 字节，iv 8 字节
const desKey = CryptoJS.enc.Utf8.parse('12345678')
const desIv  = CryptoJS.enc.Utf8.parse('87654321')
const desEnc = CryptoJS.DES.encrypt('hello', desKey, {
  iv: desIv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
})
console.log('DES:', desEnc.toString())
console.log('DES解密:', CryptoJS.DES.decrypt(desEnc, desKey, {
  iv: desIv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
}).toString(CryptoJS.enc.Utf8))

// TripleDES：key 24 字节，iv 8 字节
const tKey = CryptoJS.enc.Utf8.parse('123456789012345678901234')
const tIv  = CryptoJS.enc.Utf8.parse('12345678')
const tEnc = CryptoJS.TripleDES.encrypt('hello', tKey, {
  iv: tIv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
})
console.log('3DES:', tEnc.toString())
```

---

### Q8：加密模式（CBC/ECB/CTR）与填充方式（Pkcs7 等）如何选择？

**解答：**

**加密模式对比：**

| 模式 | 是否需要 iv | 特点 | 安全性 |
| ---- | ----------- | ---- | ------ |
| ECB | 否 | 每个分组独立加密，相同明文块→ 相同密文块 | **差**，暴露数据规律，不推荐 |
| CBC | 是 | 每块与前一块密文异或，隐藏规律 | 好，最常用 |
| CTR | 是（计数器） | 将块加密转为流加密，可并行 | 好 |
| CFB/OFB | 是 | 流式，适合流数据 | 好 |

```js
const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse('1234567890123456')
const iv  = CryptoJS.enc.Utf8.parse('abcdefgh12345678')

// ECB 模式：不使用 iv（传了也会被忽略）
const ecb = CryptoJS.AES.encrypt('hello', key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
})
console.log('ECB:', ecb.toString())

// CTR 模式：需要 iv 作为计数器初值
const ctr = CryptoJS.AES.encrypt('hello', key, {
  iv: iv,
  mode: CryptoJS.mode.CTR,
  padding: CryptoJS.pad.NoPadding // 流模式常配 NoPadding
})
console.log('CTR:', ctr.toString())
```

**填充方式对比：**

| 填充 | 说明 |
| ---- | ---- |
| `pad.Pkcs7` | 最常用，补 N 个值为 N 的字节，能明确去除 |
| `pad.Iso97971` | ISO/IEC 9797-1 |
| `pad.ZeroPadding` | 补 0，**若明文本身以 0 结尾会有歧义** |
| `pad.NoPadding` | 不填充，明文须为分组整数倍（CTR/CFB/OFB 常用） |

**选型建议：**

- 优先 **CBC + Pkcs7**（与后端对接的默认约定，兼容性最好）。
- **绝不使用 ECB** 处理敏感数据（相同明文块会产生相同密文块，泄露结构）。
- 前后端 mode、padding、key/iv 长度必须**完全一致**，否则解密报错或乱码。
```

---

## 编码转换

### Q9：字符串、Hex、Base64、Utf8 之间如何相互转换？

**解答：**

所有转换都遵循**"先 parse 成 WordArray，再 toString 成目标编码"**的规律。

```js
const CryptoJS = require('crypto-js')

// 1. Utf8 字符串 <-> Base64
const wa1 = CryptoJS.enc.Utf8.parse('你好world')
const base64 = wa1.toString(CryptoJS.enc.Base64)
console.log('Base64:', base64) // 5L2g5aW9d29ybGQ=
// Base64 -> Utf8
const back1 = CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8)
console.log('还原:', back1) // 你好world

// 2. Utf8 字符串 <-> Hex
const wa2 = CryptoJS.enc.Utf8.parse('hello')
const hex = wa2.toString(CryptoJS.enc.Hex)
console.log('Hex:', hex) // 68656c6c6f
const back2 = CryptoJS.enc.Hex.parse(hex).toString(CryptoJS.enc.Utf8)
console.log('还原:', back2) // hello

// 3. Hex <-> Base64（不经过明文字符串，直接换编码）
const waHex = CryptoJS.enc.Hex.parse('68656c6c6f')
console.log('Hex->Base64:', waHex.toString(CryptoJS.enc.Base64)) // aGVsbG8=
```

**记忆口诀：** `目标编码 = 源编码.parse(源字符串).toString(目标编码)`。

---

### Q10：常见编码错误如何排查？

**解答：**

**错误1：用错编码器解析导致乱码**

```js
// ❌ 明文是 Utf8，却用 Hex 去 parse
const wrong = CryptoJS.enc.Hex.parse('hello') // 'hello' 不是合法 hex，结果错误

// ✅ 正确
const right = CryptoJS.enc.Utf8.parse('hello')
```

**错误2：Base64 与 Hex 混淆**

密文用 `encrypted.toString()` 得到的是 **Base64**，而 `encrypted.ciphertext.toString()` 得到的是 **Hex**。与后端对接时要问清对方期望哪种编码，否则解密失败。

**排查清单：**

- 明文/密文到底是什么编码？（Utf8 / Hex / Base64）
- parse 用的编码器是否与数据实际编码匹配？
- 中文务必用 `enc.Utf8`，用 `Latin1` 会截断多字节字符。

---

## 工程实践与常见问题

### Q11：前后端加密解密对接（与 Java / Python 后端）有哪些坑？

**解答：**

对接失败 90% 是因为**参数约定不一致**。核心是双方必须统一以下项：

1. **密钥模式**：前端必须用"原始密钥"模式（key 传 WordArray），**不要用口令派生模式**（key 传字符串会带 OpenSSL 盐，后端无法解）。
2. **key/iv 编码**：约定 key、iv 是 Utf8 还是 Hex/Base64，长度是否匹配（AES-128 需 16 字节）。
3. **mode 与 padding**：统一为 CBC + Pkcs7（Java 的 `AES/CBC/PKCS5Padding` 与 CryptoJS 的 Pkcs7 等价）。
4. **密文传输编码**：约定 Base64 还是 Hex。

```js
// 与 Java(AES/CBC/PKCS5Padding) 对接的标准前端写法
const CryptoJS = require('crypto-js')

function aesEncrypt(plainText, keyStr, ivStr) {
  const key = CryptoJS.enc.Utf8.parse(keyStr) // 16 字节
  const iv = CryptoJS.enc.Utf8.parse(ivStr)   // 16 字节
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString() // Base64，与后端 Base64.encode 对应
}

function aesDecrypt(cipherBase64, keyStr, ivStr) {
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const iv = CryptoJS.enc.Utf8.parse(ivStr)
  const decrypted = CryptoJS.AES.decrypt(cipherBase64, key, {
    iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

const cipher = aesEncrypt('hello', '1234567890123456', 'abcdefgh12345678')
console.log(cipher)
console.log(aesDecrypt(cipher, '1234567890123456', 'abcdefgh12345678'))
```

---

### Q12：密钥管理与安全性建议，CryptoJS 的局限性有哪些？

**解答：**

**核心认知：前端加密无法实现真正的机密性。** 因为 JS 代码、密钥、算法用户都能看到，逆向即可获取密钥。

**安全建议：**

- **传输安全靠 HTTPS**，前端加密只是"锦上添花"，不能替代 TLS。
- **密钥不要硬编码**在前端源码里；如必须使用，可结合动态下发、混淆，但仍非绝对安全。
- 真正需要机密性时用**非对称加密**：前端用公钥加密（`jsencrypt`），私钥留在后端。
- 敏感操作的**最终校验必须在后端**完成，前端加密不可信。

**CryptoJS 的局限性：**

- 不支持 RSA/ECC 等非对称算法。
- 4.x 之前版本随机数不安全（曾用 `Math.random`），务必升级到 `4.2.0+`。
- 纯 JS 实现，大数据量加密性能不如原生 WebCrypto API。

---

### Q13："Malformed UTF-8 data" 报错的原因与解决方案？

**解答：**

这是最常见报错，出现在**解密时**调用 `decrypted.toString(CryptoJS.enc.Utf8)`。

**根本原因：** 解密失败，得到的是一堆随机字节，无法用 Utf8 解码，于是报错。而解密失败通常是因为 **key、iv、mode、padding 或密文编码与加密时不一致**。

**排查步骤：**

```js
// 1. 检查 key/iv 长度与编码是否与加密端完全一致
// 2. 检查 mode/padding 是否一致
// 3. 检查传入 decrypt 的密文格式（Base64 字符串 or CipherParams）

// 常见错误：密文是 Hex，却当作 Base64 直接传入
const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse('1234567890123456')
const iv = CryptoJS.enc.Utf8.parse('abcdefgh12345678')

// 若后端返回的是 Hex 密文，需先构造 CipherParams
const hexCipher = '....' // 后端返回的 hex 字符串
const cipherParams = CryptoJS.lib.CipherParams.create({
  ciphertext: CryptoJS.enc.Hex.parse(hexCipher)
})
const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
  iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
})
// console.log(decrypted.toString(CryptoJS.enc.Utf8))
```

**结论：** 报错本身不是编码问题，而是**解密没成功**。逐一核对密钥参数与密文编码即可。

---

### Q14：性能考量与最佳实践？

**解答：**

**性能建议：**

- 大文件/大数据量加密时，CryptoJS 纯 JS 实现较慢，优先考虑浏览器原生 **Web Crypto API**（`crypto.subtle`），性能高数倍。
- 按需引入子模块（`crypto-js/aes`）而非整包，减小打包体积。
- 频繁哈希可缓存结果，避免重复计算。

**最佳实践清单：**

- 密码存储用 **加盐 + 慢哈希**（bcrypt/PBKDF2），不要用裸 MD5/SHA。
- API 签名用 **HMAC-SHA256**，密钥保存在后端。
- 对称加密统一 **AES-CBC + Pkcs7 + 随机 iv**，iv 随密文一起传。
- 锁定 `crypto-js@4.2.0+` 版本，规避历史随机数漏洞。
- 牢记：**前端加密是辅助手段，安全底线永远在后端 + HTTPS**。

```js
// PBKDF2 派生密钥示例（比直接哈希密码更安全）
const CryptoJS = require('crypto-js')
const salt = CryptoJS.lib.WordArray.random(16)
const key = CryptoJS.PBKDF2('user-password', salt, {
  keySize: 256 / 32,  // 生成 256 位密钥
  iterations: 10000   // 迭代次数越大越安全（也越慢）
})
console.log('派生密钥:', key.toString())
```