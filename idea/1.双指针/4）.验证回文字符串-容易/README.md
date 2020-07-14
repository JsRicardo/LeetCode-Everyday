# 验证回文字符串

给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

    输入: "aba"
    输出: True

    输入: "abca"
    输出: True
    解释: 你可以删除c字符。

难易度：容易

解题思路

回文串可以很简单的用双指针去检测得出结果，只需要首尾两个指针向中间移动，两个指针指向的字符如果不同，那就不是回文串，如果都相同，那么就是回文字符串，这里两个指针不可以相等

但是这道题的问题是 可以删除一个字符

也就是说当遍历到两个指针指向的字符不相等时，可以选择删除一个字符，左边的或者右边的，然后再继续比较（只能删除一次）

```ts
// 删除一个字符串之后继续比较
const deleteStr = (str: string, left: number, right: number): boolean => {
    while (left < right) {
        if (str[right] != str[left]) return false
        left++
        right--
    }
    return true
}

var validPalindrome = function (s: string): boolean {
    if (!s) return false
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) {
            // 在左边删除一个字符，或者右边删除一个字符继续比较
            return deleteStr(s, i, j - 1) || deleteStr(s, i + 1, j);
        }
    }
    return true;
};
```