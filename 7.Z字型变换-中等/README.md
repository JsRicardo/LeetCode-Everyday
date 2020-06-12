将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
|||||||||
|-|-|-|-|-|-|-|-|
 |L| |C| |I| |R| |
 |E|T|O|E|S|I|I|G|
 |E| |D| |H| |N| |

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

难易度：中等

解题思路

![Image](https://wx2.sinaimg.cn/mw690/005QwFx4gy1gfpdb9cr5xj31400u04qs.jpg)

从上图可以看出
1. 当笔向下画的时候，依次向每一行添加一个字符串，最大行numRows - 1 

2. 向右画的时候，依次向上一行添加一个元素，直到画到第0行

用一个标识downFlag，来表示是不是向下画，sIdx表示在第几行添加字符串，临界点就是`sIdx == 0 || numRows - 1 == sIdx`；用一个数组来装所有行，sIdx就为数组的下标

所以数组结构就是这样
```js
    [
        '', // 第0行
        '', // 第1行
        '' // 第2行
    ]
    // 向下画 依次向[sIdx]添加一个字符串 sIdx += 1
    [
        'L',
        'E',
        'E',
    ]
    // 向右画 此时往[sIdx - 1]添加一个字符串 所以sIdx -= 1
    [
        'L',
        'ET',
        'E,'
    ]
```

```ts

var convert = function (s: string, numRows: number): string {
    const len = s.length
    if (!s || len <= numRows || numRows == 1) return s

    // 构建一个numRows个元素的数组，用来装所有拼接字符串
    const strArr = []
    for (let i = 0; i < numRows; i++) {
        strArr[i] = ''
    }

    let sIdx = 0 // 需要给strArr的第几个元素加上字符
    let downFlag = false // 是否是向下

    // 根据规律 向下画时，依次向所有行添加一个字符串，画到第numRows - 1行 往右画
    // 向右画时，依次向上一行画一个元素，划到第0行又往下画
    for (let i = 0; i < len; i++) {
        strArr[sIdx] += s[i]
        if (sIdx == 0 || sIdx == numRows - 1) downFlag = !downFlag

        sIdx = downFlag ? sIdx + 1 : sIdx - 1
    }

    // 拼接结果字符串
    let res = ''
    strArr.forEach(it => res += it)
    return res
};
```