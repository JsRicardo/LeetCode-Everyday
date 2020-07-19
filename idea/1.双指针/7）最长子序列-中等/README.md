# 最长子序列

给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。

如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

示例

    输入: s = "abpcplea", d = ["ale","apple","monkey","plea"]
    输出: "apple"

说明:

    所有输入的字符串只包含小写字母。
    字典的大小不会超过 1000。
    所有输入的字符串长度不会超过 1000。

难易度：中等

解题思路

通过删除字符串 s 中的一个字符能得到字符串 t，可以认为 t 是 s 的子序列，我们可以使用双指针来判断一个字符串是否为另一个字符串的子序列。

```ts
function isSubstr(target: string, origin: string): boolean {
    let i = 0, j = 0, len1 = target.length, len2 = origin.length
    // 使用双指针来查询子序列
    while (i < len1 && j < len2) {
        if (target[i] == origin[j]) {
            i++ // 如果两个字符相等，目标字符串的指针才需要后移
        }
        j++
    }
    return i == len1 // 如果目标字符串遍历完成  才算目标字符串是 源字符串的子序列
}

var findLongestWord = function (s: string, d: string[]): string {
    let longestStr = ''
    for (let i = 0, len = d.length; i < len; i++) {
        const len1 = longestStr.length, len2 = d[i].length

        if (len1 > len2 || (len1 == len2 && longestStr.charCodeAt() < d[i].charCodeAt())) {
            // 如果现有的最长字符串长于d[i] 不需要比较
            // 如果两个字符串长度相等  并且现有最长字符串 的 ASCII码 小于 需要比较的字符串（字典序最小）  不需要比较
            continue
        }
        if (isSubstr(d[i], s)) {
            longestStr = d[i]
        }
    }
    return longestStr
};

```