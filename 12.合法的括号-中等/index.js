// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足
//     左括号必须用相同类型的右括号闭合。
//     括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例：
// 输入: "()[]{}"
// 输出: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var len = s.length;
    if (len == 0)
        return true;
    if (len % 2)
        return false;
    var leftDic = '([{', rightDic = ')]}';
    var stack = [];
    for (var i = 0; i < len; i++) {
        if (leftDic.indexOf(s[i]) != -1) {
            stack.push(s[i]);
        }
        if (rightDic.indexOf(s[i]) != -1) {
            var temp = stack.pop();
            if (leftDic.indexOf(temp) != rightDic.indexOf(s[i]))
                return false;
        }
    }
    return !stack.length;
};
console.log(isValid("(("));
