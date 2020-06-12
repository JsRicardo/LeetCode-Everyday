/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 */
var convert = function (s, numRows) {
    var len = s.length;
    if (!s || len <= numRows || numRows == 1)
        return s;
    // 构建一个numRows个元素的数组，用来装所有拼接字符串
    var strArr = [];
    for (var i = 0; i < numRows; i++) {
        strArr[i] = '';
    }
    var sIdx = 0; // 需要给strArr的第几个元素加上字符
    var downFlag = false; // 是否是向下
    // 根据规律 向下画时，依次向所有行添加一个字符串，画到第numRows - 1行 往右画
    // 向右画时，依次向上一行画一个元素，划到第0行又往下画
    for (var i = 0; i < len; i++) {
        strArr[sIdx] += s[i];
        if (sIdx == 0 || sIdx == numRows - 1)
            downFlag = !downFlag;
        sIdx = downFlag ? sIdx + 1 : sIdx - 1;
    }
    // 拼接结果字符串
    var res = '';
    strArr.forEach(function (it) { return res += it; });
    return res;
};
console.log(convert('LEETCODE', 3));
