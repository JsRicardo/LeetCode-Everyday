给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

`示例 1：`

`输入: "babad"`
`输出: "bab"`
`注意: "aba" 也是一个有效答案。`

难易度：中等

解题思路

1. 暴力解法

如果一个字符串倒置，等于原字符串，那么这个字符串就是回文串，所以只需要把给定字符串的，每一个子串进行是不是回文串的判断即可，但是这个方法性能很低，字符串长度达到一定程度，就会超时。

```ts
// 检查一个字符串是不是回文串
const reverseStr = function (s: string): boolean {
    let sarr = s.split('')
    let rs = sarr.reverse().join('')
    return rs == s
}

var longestPalindrome = function (s: string): string {
    if (!s) return ''
    if (s.length == 1 || reverseStr(s)) return s

    let temp = ''
    let res = ''
    let ss = s
    // 两层循环，找出所有子串
    while (ss.length) {
        for (let i of ss) {
            temp += i
            if (reverseStr(temp)) {
                res = res.length > temp.length ? res : temp
            }
        }

        temp = ''
        ss = ss.substr(1)
    }

    return res
};
```

2. 向两边扩散法

找定一个字符串，以这个字符为中心，向两边扩散，如果两边的字符串相等，继续向两边扩散，直到两边不相等，那么中间的字符串就是回文串；

以字符串长度为标准，多次遍历，找出其中最长的字符串，就是答案

```ts
var longestPalindrome2 = function (s: string): string {
    if (!s) return ''
    
    let len = s.length
    if (len == 1) return s

    let result = s[0];

    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= 2; j++) { //偶数奇数回文串
            let left = i, right = i + j;
            while (left >= 0 && right < len && s[left] === s[right]) {
                left--, right++; //向外扩展直到两端不相同
            };
            let length = right - left - 1; //(right - 1) - (left + 1) + 1
            if (length > result.length) {
                result = s.substr(left + 1, length);
            }
        }
    }
    return result;
}
```