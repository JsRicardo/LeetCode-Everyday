/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */
var reverseStr = function (s) {
    var sarr = s.split('');
    var rs = sarr.reverse().join('');
    return rs == s;
};
/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
    if (!s)
        return '';
    if (s.length == 1 || reverseStr(s))
        return s;
    var temp = '';
    var res = '';
    var ss = s;
    while (ss.length) {
        for (var _i = 0, ss_1 = ss; _i < ss_1.length; _i++) {
            var i = ss_1[_i];
            temp += i;
            if (reverseStr(temp)) {
                res = res.length > temp.length ? res : temp;
            }
        }
        temp = '';
        ss = ss.substr(1);
    }
    return res;
};
var longestPalindrome2 = function (s) {
    if (!s)
        return '';
    var len = s.length;
    if (len == 1)
        return s;
    var result = s[0];
    for (var i = 0; i < len; i++) {
        for (var j = 1; j <= 2; j++) { //偶数奇数回文串
            var left = i, right = i + j;
            while (left >= 0 && right < len && s[left] === s[right]) {
                left--, right++; //向外扩展直到两端不相同
            }
            ;
            var length_1 = right - left - 1; //(right - 1) - (left + 1) + 1
            if (length_1 > result.length) {
                result = s.substr(left + 1, length_1);
            }
        }
    }
    return result;
};
console.log(longestPalindrome2("aaccdefcaa"));
