# ESNext

## ES2016

### `**`

> 幂(平方)操作符

### Array.prototype.includes()

> 判断数组是否存在指定元素

## ES2017

### String.prototype.padStart() 和 String.prototype.padEnd()

> 开始/末尾位置填充

### Object.entries()

> 遍历对象键值对

### Object.values()

>  遍历对象值

### Object.getOwnPropertyDescriptors()

> 返回一个对象的所有属性，可以将对各对象深度拷贝，同时将 getter/setter 拷贝。Object.assign 将一个对象除了 getter/setter 以外都深度拷贝。

### 数组和函数参数逗号结尾

### 异步函数

> 异步函数返回一个 Promise

```javascript
async function func() {
  await new Promise((resolve, reject) => {})
}
```

### ShareArrayBuffer 和 Atomics

## ES2018

### 异步迭代器

```javascript
async function func(arr) {
  for await (let i of arr) {
    console.log(i)
  }
}
```

### Promise.prototype.finally()

> 始终执行

### 对象剩余属性

```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }

z = { a: 3, b: 4}
```

### RegExp 特性

- 正则表达式 Unicode 转义
- 正则表达式反向断言（lookbehind）
- 正则表达式命名捕获组（Regular Expression Named Capture Groups）
- 正则表达式`dotAll`模式

### 非转义序列的模板字符串

## ES2019

### catch 绑定可选

```javascript
try {
  ...
} catch {
  ...
}
```

### Symbol.prototype.description

> 只读属性，不存在返回 undefined。

### Function.prototype.toString()

> 返回函数的字符串表示。

### Object.fromEntries()

> 与 Object.entries() 作用相反，可迭代对象转化成对象形式。

### Array.prototype.flat()

> 数组扁平化。

### Array.prototype.flatMap()

> Array.flat + Array.map

### String.prototype.trimStart 和 String.prototype.trimEnd

>去除字符串前/后空格。

## ES2020

### String.prototype.matchAll()

## 动态 import

```javascript
import('./xxx').then(module => console.log(module))
```

### BigInt

> 大数数据类型

### Promise.allSettled()

> Promise.all() 存在短路原则，Promise.allSettled() 则不存在短路原则。

### globalThis

> 统一浏览器和Node的全局对象

### 可选链操作符

```javascript
person?.name
```

### Nullish 操作符

```javascript
null ?? 'hi'
```

### import.meta

## ES2021

### String.prototype.replaceAll()

> 替换所有匹配字符串

### Promise.any

> 某个 Promise 成功时完成

### WeakRef

### 逻辑运算赋值操作

```javascript
xx &&= y // x && (x = y)
xx ||= y // x || (x = y)
xx ??= y // x ?? (x = y)
```

### 更方便的数字书写

```
const a = 1_000 // 1000
const b = 1_000_000 // 1000000
```

## ES2022

### class 属性修饰符

```javascript
class C {
  #name // 私有属性
  
  #func(){} // 私有方法
  
  static isC(obj) { // 静态成员
    return #name in obj // 私有使用 in 判断
  }
 }
```

### RegExp Match Indices

### await 可以不放在 async 函数里

### Array.prototype.at()

> 数组索引取值

### Object.protptype.hasOwnProperty

> 判断是否是自有属性
