// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。

//示例:

// 输入: 5
// 输出: True
// 解释: 1 * 1 + 2 * 2 = 5

//输入: 3
//输出: False

var judgeSquareSum = function(c: number): boolean {
    if(c < 0) return false

    let left  = 0, right = Math.floor(Math.sqrt(c))

    while (left <= right) {
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

console.log(judgeSquareSum(2))