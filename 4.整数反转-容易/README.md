给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

`示例 1:
输入: 123
输出: 321`

`示例 2:
输入: -123
输出: -321`

`示例 3:
输入: 120
输出: 21`

`假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。`

难易度：简单

解题思路

1. 暴力解法
    
    转换为字符串，反转字符串即可

```ts
var reverse = function(x: number): number {
    let maxNum = Math.pow(2, 31)
    if (x === 0 || x < -maxNum || x > maxNum ) return 0

    let num = +(Math.abs(x) + '').split('').reverse().join('')
    if (x < 0) return -num
    if (x > 0) return num
};
```
 
2. 取余，取模
    
    每次取原数字的最后一位，作为新数字的开始位，操作完成后截取掉原数字的最后一位，完成反转
    
    `214  取模 4  ->  result: 4    origin: 21`

    `21   取模 1  ->  result: 41   origin: 2`

    `2    取模 2  ->  result: 412  origin: `

```ts
var reverse2 = function (x: number): number {
    let maxNum = Math.pow(2, 31)
    if (x === 0 || x < -maxNum || x > maxNum ) return 0

    let num = Math.abs(x) // 将所有数变成正数，操作过程中不关心正负
    let result = 0

    while(num > 0) {
        // 每次都操作最后一位数，所以每次操作数都是10的倍数
        result = result * 10 + num % 10 
        num = Math.floor(num / 10)
    }
    if (x < 0) return -result
    if (x > 0) return result
}
```
