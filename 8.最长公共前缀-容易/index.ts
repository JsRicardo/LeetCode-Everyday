/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""
 * 
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 所有输入只包含小写字母 a-z 。
 */

/**
* @param {string[]} strs
* @return {string}
*/
const longestCommonPrefix = function (strs: string[]): string {
    const len = strs.length
    if (!len) return ''
    if (len == 1) return strs[0]

    let minL = strs[0].length
    for (let i = 1; i < len; i++) {
        minL = Math.min(minL, strs[i].length)
    }

    // 找出字符串数组的第一位，用它和后面所有字符串比较
    let s = strs[0].substring(0, minL), index = 1

    while (index < len) {

        // 找到s 和 后一个字符串的 最长的公共前缀
        // 保存这个前缀
        // 继续用这个前缀和 再后一个字符串相比，找到最长的公共前缀
        // 直到公共前缀为空，或者遍历完整个字符串数组

        // 如果s被 strs[index]整个包含，说明s就是这两个字符串的最长公共前缀，直接进入下一次循环
        // 如果s已经只剩空字符串，跳出循环
        while (strs[index].indexOf(s) && s.length) {
            // 否则，每次丢弃s最后一个字符，再进行比较
            s = s.substring(0, s.length - 1)
        }

        index++
    }
    // 最后 s 就最最长公共前缀
    return s
};

const longestCommonPrefix2 = function (strs: string[]): string {
    const len = strs.length
    if (!len) return ''
    if (len == 1) return strs[0]

    let minStr = strs[0]
    // 找到最短字符串
    for (let i = 1; i < len; i++) {
        if (minStr.length > strs[i].length) {
            minStr = strs[i]
        }
    }

    let index = 0 // 指针
    let temp = '' // 最长公共前缀

    // 遍历最短字符串
    for (const s of minStr) {
        // 遍历数组
        for (let i = 0; i < len; i++) {
            // 出现不相同的字符
            if (strs[i][index] != s) {
                return temp
            }
        }
        temp += s
        index++
    }

    return temp
}


console.log(longestCommonPrefix2(["flo", "flow", "flight"]))