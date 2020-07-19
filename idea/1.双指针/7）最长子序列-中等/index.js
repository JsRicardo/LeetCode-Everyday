// 比较两个字符串 target是不是origin的子序列
function isSubstr(target, origin) {
    var i = 0, j = 0, len1 = target.length, len2 = origin.length;
    while (i < len1 && j < len2) {
        if (target[i] == origin[j]) {
            i++;
        }
        j++;
    }
    return i == len1;
}
var findLongestWord = function (s, d) {
    var longestStr = '';
    for (var i = 0, len = d.length; i < len; i++) {
        var len1 = longestStr.length, len2 = d[i].length;
        if (len1 > len2 || (len1 == len2 && longestStr.charCodeAt() < d[i].charCodeAt())) {
            continue;
        }
        if (isSubstr(d[i], s)) {
            longestStr = d[i];
        }
    }
    return longestStr;
};
var str = "abpcplea", dict = ["ale", "apple", "monkey", "plea"];
console.log(findLongestWord(str, dict));
