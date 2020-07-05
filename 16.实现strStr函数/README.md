# 实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。 

`示例 1:`

`输入: haystack = "hello", needle = "ll"`

`输出: 2`

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

难易度：容易

解题思路：

1. 利用indexof。indexof为内置函数，在内部是做了很多优化的，在任何时候自己写的函数，优化肯定是比不上内置函数的

```ts
var strStr = function(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};
```

2. 找到needle在 haystack 中的位置，那么 就默认haystack是更长的字符串，遍历haystack，找到needle第0个字符串的位置，再截取一个和needle等长的字符串，进行比较

```ts
var strStr = function(haystack: string, needle: string): number {
    const nLen = needle.length
    if (!nLen) return 0

    const len = haystack.length

    for(let i = 0; i < len; i++){
        if (haystack[i] == needle[0]) {
            if (haystack.substring(i, i + nLen) == needle) return i
        }
    }
    return -1
};
```