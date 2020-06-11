/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 * 输入: 121
 * 输出: true
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */
var isPalindrome = function (x) {
    if (x === 0)
        return true;
    if (!x || x < 0)
        return false;
    var rev = +(x + '').split('').reverse().join('');
    return x == rev;
};
// 进阶，不将x处理为字符串，选择反转一半的数字
var isPalindrome2 = function (x) {
    // x < 0  或者 x的个位数是0都不满足(x % 10)
    if (x === 0)
        return true;
    if (!x || x < 0 || x % 10 == 0)
        return false;
    var rev = 0;
    // 如果x的位数是偶数
    // 结束点就是rev < x  只要x > rev 那就说明这个数还没有反转到一半
    while (rev < x) {
        rev = rev * 10 + x % 10; // 每一次都取x的个位数加在反转结果上
        x = Math.floor(x / 10); // 每一次去掉x的个位数
    }
    // 如果x的位数是基数位，则最终结果 rev位数的肯定比x多一位，
    // rev的个位为原x的中间位数字
    // rev / 10 取整丢掉个位数再比较
    return x == rev || Math.floor(rev / 10) == x;
};
console.log(isPalindrome2(121));
