/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 * 特殊情况
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内
 * 
 * 示例：
 * 输入: 3
 * 输出: “III”
 */

/**
* @param {number} num
* @return {string}
*/
var intToRoman = function (num: number): string {
    if (!num) return ''

    const keys: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const values: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let res = ''
    for (let i = 0, len = keys.length; i < len; i++) {
        while (num >= keys[i]) {
            res += values[i]
            num -= keys[i]
        }
    }
    return res
};

console.log(intToRoman(3668))