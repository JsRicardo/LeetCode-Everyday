// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
//示例 1:
//输入: "hello"
//输出: "holle"
var reverseVowels = function (s) {
    if (s.length < 2)
        return s;
    var strSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var left = 0, right = s.length - 1;
    var res = new Array(s.length);
    while (left <= right) {
        var sLeft = s[left];
        var sRight = s[right];
        if (strSet.has(sLeft) && strSet.has(sRight)) {
            res[left] = sRight;
            res[right] = sLeft;
            left++;
            right--;
        }
        else if (!strSet.has(sLeft)) {
            res[left] = sLeft;
            left++;
        }
        else {
            res[right] = sRight;
            right--;
        }
    }
    return res.join('');
};
console.log(reverseVowels("leetcode"));
