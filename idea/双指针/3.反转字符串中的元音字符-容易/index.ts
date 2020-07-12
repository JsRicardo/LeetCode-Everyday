// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

//示例 1:

//输入: "hello"
//输出: "holle"

var reverseVowels = function(s: string): string {
    if (s.length < 2) return s

    const strSet = new Set<String>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let left = 0, right = s.length - 1
    const res = new Array<string>(s.length)
    while(left <= right) {
        const sLeft = s[left]
        const sRight = s[right]
        if (strSet.has(sLeft) && strSet.has(sRight)) {
            res[left] = sRight
            res[right] = sLeft
            left++
            right--
        } else if (!strSet.has(sLeft)){
            res[left] = sLeft
            left++
        } else{
            res[right] = sRight
            right--
        }
    }
    return res.join('')
};

console.log(reverseVowels("leetcode"))