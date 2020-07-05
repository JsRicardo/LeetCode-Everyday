/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

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
 */
var divide = function (dividend, divisor) {
    if (dividend <= -Math.pow(2, 31) && divisor == -1)
        return Math.pow(2, 31) - 1;
    var flag = (dividend < 0 && divisor < 0) || (dividend >= 0 && divisor >= 0);
    dividend = -Math.abs(dividend);
    divisor = -Math.abs(divisor);
    var res = 0;
    while (dividend <= divisor) {
        dividend = dividend - divisor;
        res++;
    }
    return flag ? res : -res;
};
var divide2 = function (dividend, divisor) {
    if (dividend <= -Math.pow(2, 31) && divisor == -1)
        return Math.pow(2, 31) - 1;
    var flag = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
    dividend = -Math.abs(dividend);
    divisor = -Math.abs(divisor);
    var res = 0;
    while (dividend <= divisor) {
        var temp = divisor;
        var cal = 1;
        while (dividend - temp <= temp) {
            temp = temp << 1;
            cal = cal << 1;
        }
        dividend -= temp;
        res += cal;
    }
    return flag ? res : -res;
};
console.log(divide2(1111, 2));
