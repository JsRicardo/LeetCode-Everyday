/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

var lengthOfLongestSubstring = function (s: string) {
    if (!s) return 0
    if (s.length === 1) return 1

    let map: Map<string, number> = new Map() // 使用map存储已经遍历过的字符，k：字符  v：index
    let max: number = 0
    let len = s.length
    let i = 0 // 无重复子串的开始位置

    // 从无重复子串位置 到 遍历位置就为最长无重复子串 i->j 为无重复子串
    for (let j = 0; j < len; j++) {
        if (map.has(s[j])) {
            // 如果这个字符被遍历过，更新无重复子串的开始位置为 这个字符出现的最大位置
            i = Math.max(map.get(s[j]) + 1, i)
        }
        // 最长无重复子串就为 当前遍历下标 - 无重复子串开始位置 + 1（长度需要+1）
        max = Math.max(max, j - i + 1)
        // 记录当前字符的位置
        map.set(s[j], j)
    }
    return max
}



var lengthOfLongestSubstring2 = function (s: string) {
    if (!s) return 0
    if (s.length === 1) return 1

    let max = 0 // 最大长度
    let temp = "" // 当前无重复字串
    let start = 0 // 当前无重复字串指针
    let loop = 0 // 循环次数
    let index: number // 当前字符所在temp中的位置
    let len = s.length

    //假如当前max大于当前未遍历的剩余字符时，不需要往后遍历，不存在更长的不重复子串
    //abccba 当运行到第二个c时，max = start = 3 不需要继续循环
    while (loop < len && max < len - start) {
        index = temp.indexOf(s[loop])
        if (index >= 0) {
            start += index + 1 // 出现了重复字符，移动指针，舍弃第一个重复字符位置之前的字符
        }
        temp = s.slice(start, loop + 1)
        max = Math.max(temp.length, max)
        loop++
    }
    return max
};

console.log(lengthOfLongestSubstring2('abcabcaa'))
