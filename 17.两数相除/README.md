# 两数相除

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分

例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

`示例 1:`

`输入: dividend = 10, divisor = 3`

`输出: 3`

`解释: 10/3 = truncate(3.33333..) = truncate(3) = 3`

提示：

- 被除数和除数均为 32 位有符号整数。
- 除数不为 0。
- 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。

难易度：中等

解题思路：

1. 既然不能用乘法和除法，那么就用减法嘛，除法可以理解为  `被除数 减去n次 除数，n为除法的整数解`，但是这题有几个坑
- 题中数字是32位有符号整数，但是`Math.abs(-2^31)`是会越界的，所以把所有的数都变成负数去计算
- 特殊情况 `-2^31 / -1` 是会越界的（别问我怎么知道的）

```ts
var divide = function (dividend: number, divisor: number) {
    if (dividend <= -Math.pow(2, 31) && divisor == -1) return Math.pow(2, 31) -1 // 特殊情况
    const flag = (dividend < 0 && divisor < 0) || (dividend >= 0 && divisor >= 0) // 用于结果是正还是负
    dividend = -Math.abs(dividend)
    divisor = -Math.abs(divisor)

    let res = 0
    while (dividend <= divisor) { // 循环相减
        dividend = dividend - divisor
        res++
    }
    return flag ? res : -res
};
```
2. 位运算符

dividend每次减去2^n个divisor（尽可能多），同时res每次加2^n

```ts
var divide2 = function (dividend: number, divisor: number) {
    if (dividend <= -Math.pow(2, 31) && divisor == -1) return Math.pow(2, 31) - 1

    const flag = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);

    dividend = -Math.abs(dividend)
    divisor = -Math.abs(divisor)

    let res = 0
    while (dividend <= divisor) {
        let temp = divisor
        let cal = 1

        while (dividend - temp <= temp) {
            temp = temp << 1
            cal = cal << 1
        }
        dividend -= temp
        res += cal
    }
    return flag ? res : -res
};
```