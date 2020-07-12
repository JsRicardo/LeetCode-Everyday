# 两数平方和

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。

示例:

    输入: 5
    输出: True
    解释: 1 * 1 + 2 * 2 = 5

    输入: 3
    输出: False


难易度：简单

解题思路：双指针

为什么这道题可以用双指针来做呢？

因为要找到两个数的平方加起来等于target，其实就是相当于在0-target这个数组中找两个数，使得他们的平方相加等于target

所以这里用双指针的方法，左指针代表较小的数，右指针代表较大的数

    因为是平方，所以较大的数right，最大可以到right^2 = target

```ts
var judgeSquareSum = function(c: number): boolean {
    if(c < 0) return false

    let left  = 0, right = Math.floor(Math.sqrt(c))

    while (left <= right) { // 此题可以取两个相同的数
        const res = left * left + right * right

        if (res == c) {
            return true
        } else if (res < c) {
            left++
        } else {
            right--
        }
    }
    return  false
};
```