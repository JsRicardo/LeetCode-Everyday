/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 *
 * 特殊情况
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 *
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内
 *
 * 示例：
 * 输入: "III"
 * 输出: 3
 */
var romanToInt = function (s) {
    if (!s)
        return 0;
    var obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var len = s.length;
    var loop = 0;
    var res = 0;
    while (loop < len) {
        var temp = obj[s[loop]];
        var temp2 = obj[s[loop + 1]];
        if (temp2 / temp === 5 || temp2 / temp === 10) {
            res += (temp2 - temp);
            loop += 2;
        }
        else {
            res += temp;
            loop++;
        }
    }
    return res;
};
var romanToInt2 = function (s) {
    if (!s)
        return 0;
    var obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var len = s.length, sum = 0, loop = 0, num = 0, now = 0;
    while (loop < len) {
        now = obj[s[loop]];
        if (num < now) {
            sum -= num;
        }
        else {
            sum += num;
        }
        num = now;
        loop++;
    }
    return sum += num;
};
console.log(romanToInt2('XLIV'));
