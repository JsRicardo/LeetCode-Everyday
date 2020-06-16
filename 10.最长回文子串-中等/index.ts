/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */

const reverseStr = function (s: string): boolean {
    let sarr = s.split('')
    let rs = sarr.reverse().join('')
    return rs == s
}

/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s: string): string {
    if (!s) return ''
    if (s.length == 1 || reverseStr(s)) return s

    let temp = ''
    let res = ''
    let ss = s
    while (ss.length) {
        for (let i of ss) {
            temp += i
            if (reverseStr(temp)) {
                res = res.length > temp.length ? res : temp
            }
        }

        temp = ''
        ss = ss.substr(1)
    }

    return res
};


var longestPalindrome2 = function (s: string): string {
    if (!s) return ''
    
    let len = s.length
    if (len == 1) return s

    let result = s[0];

    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= 2; j++) { //偶数奇数回文串
            let left = i, right = i + j;
            while (left >= 0 && right < len && s[left] === s[right]) {
                left--, right++; //向外扩展直到两端不相同
            };
            let length = right - left - 1; //(right - 1) - (left + 1) + 1
            if (length > result.length) {
                result = s.substr(left + 1, length);
            }
        }
    }
    return result;
}
console.log(longestPalindrome2("aaccdefcaa"))


