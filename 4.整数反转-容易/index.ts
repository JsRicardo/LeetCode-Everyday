/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

var reverse = function(x: number): number {
    let maxNum = Math.pow(2, 31)
    if (x === 0 || x < -maxNum || x > maxNum ) return 0

    let num = +(Math.abs(x) + '').split('').reverse().join('')
    if (x < 0) return -num
    if (x > 0) return num
};




var reverse2 = function (x: number): number {
    let maxNum = Math.pow(2, 31)
    if (x === 0 || x < -maxNum || x > maxNum ) return 0

    let num = Math.abs(x)
    let result = 0

    while(num > 0) {
        result = result * 10 + num % 10
        num = Math.floor(num / 10)
    }
    if (x < 0) return -result
    if (x > 0) return result
}
console.log(reverse2(-214))