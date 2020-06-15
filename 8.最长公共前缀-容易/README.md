编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""

`·示例 1:`

输入: ["flower","flow","flight"]

输出: "fl"


`·示例 2:`

输入: ["dog","racecar","car"]

输出: ""

解释: 输入不存在公共前缀。

所有输入只包含小写字母 a-z 。

难易度：容易

解题思路：

1. 深度遍历

用字符串数组的第0位，与数组之后的所有位进行比较。

- 第一遍循环，将`strs[0]`和`strs[1]`进行比较，找出这两个字符串的最长公共前缀
    
    - 假设`strs[0]`是`strs[1]`的子串
    - 如果`strs[1].indexOf(strs[0]) == 0`，说明str[1]和`strs[0]`的最长公共前缀就是`strs[0]`
    - 利用这个最长公共前缀，与`strs[2]`继续比较，找出最长公共前缀
    - 如果`strs[1].indexOf(strs[0]) != 0`，就删除`str[0]`的最后一个字符，再继续比较
- 上述情况的结束点就是`str[0]`经过截取后只剩空字符串，说明他们没有公共前缀；strs数组循环完毕，那么经过截取后的`str[0]`就是最长公共前缀

```ts
const longestCommonPrefix = function (strs: string[]): string {
    const len = strs.length
    if (!len) return ''
    if(len == 1) return strs[0]

    // 找出字符串数组的第一位，用它和后面所有字符串比较
    let s = strs[0], index = 1

    while(index < len) {

        // 找到s 和 后一个字符串的 最长的公共前缀
        // 保存这个前缀
        // 继续用这个前缀和 再后一个字符串相比，找到最长的公共前缀
        // 直到公共前缀为空，或者遍历完整个字符串数组

        // 如果s被 strs[index]整个包含，说明s就是这两个字符串的最长公共前缀，直接进入下一次循环
        // 如果s已经只剩空字符串，跳出循环
        while(strs[index].indexOf(s) && s.length){
            // 否则，每次丢弃s最后一个字符，再进行比较
            s = s.substring(0, s.length - 1)
        }

        index++
    }
    // 最后 s 就最最长公共前缀
    return s
};
```

2. 指针

看一遍题目，就应该想到的方法，把所有字符串的每一位字符，从第0位开始直接进行比较。

那么结束点就是遇到了不完全相等的字符，或者遍历完了最短的字符串，所以，这里可以先把最短的字符串找到。

![Image](https://wx2.sinaimg.cn/mw690/005QwFx4gy1gfst77slyxj30tt0eq4fq.jpg)

```ts
const longestCommonPrefix2 = function (strs: string[]): string {
    const len = strs.length
    if (!len) return ''
    if (len == 1) return strs[0]

    let minStr = strs[0]
    // 找到最短字符串
    for (let i = 1; i < len; i++) {
        if (minStr.length > strs[i].length) {
            minStr = strs[i]
        }
    }

    let index = 0 // 指针
    let temp = '' // 最长公共前缀

    // 遍历最短字符串
    for (const s of minStr) {
        // 遍历数组
        for (let i = 0; i < len; i++) {
            // 出现不相同的字符
            if (strs[i][index] != s) {
                return temp
            }
        }
        temp += s
        index++
    }

    return temp
}
```