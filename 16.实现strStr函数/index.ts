// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。 

// 示例 1:
// 输入: haystack = "hello", needle = "ll"
// 输出: 2

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

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

const  haystack = "hello", needle = "e"

console.log(strStr(haystack, needle))