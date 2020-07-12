# 反转字符串的元音字符

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例

    输入: "hello"
    输出: "holle"

    输入: "leetcode"
    输出: "leotcede"

难易度：简单

解题方案

本题就是很典型的双指针问题，两个指针向中心移动，如果两个指针都遇到元音字母，则交换位置

如果哪个指针没有遇到元音字母则往下一个目标移动

因为字符串不能直接操作，改变字符，新开一个数组存储结果数组

```ts
var reverseVowels = function(s: string): string {
    if (s.length < 2) return s

    const strSet = new Set<String>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let left = 0, right = s.length - 1
    const res = new Array<string>(s.length)
    while(left <= right) {
        const sLeft = s[left]
        const sRight = s[right]
        if (strSet.has(sLeft) && strSet.has(sRight)) { // 遇到了两个元音字母
            res[left] = sRight
            res[right] = sLeft
            left++
            right--
        } else if (!strSet.has(sLeft)){
            res[left] = sLeft
            left++
        } else{
            res[right] = sRight
            right--
        }
    }
    return res.join('')
};
```