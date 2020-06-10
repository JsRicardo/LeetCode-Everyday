罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

|字符|数值|
|----|----|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

- 特殊情况

    `I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。`

    `X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。` 

    `C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。`

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内

- 示例：

    `输入: "III"`

    `输出: 3`

难易度：中等

解题思路：

1. 根据特殊规则，如果前一位罗马数 / 后一位罗马数 = 1/5 或者 1/10，则，这两位罗马数应组合成一位阿拉伯数字，值为后一位罗马数 - 前一位罗马数

```ts
var romanToInt = function (s: string): number {
    if (!s) return 0
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let len = s.length
    let loop = 0
    let res = 0

    while (loop < len) {
        let temp = obj[s[loop]]
        let temp2 = obj[s[loop + 1]]

        if (temp2 / temp === 5 || temp2 / temp === 10) {
            res += (temp2 - temp)
            loop +=2 // 消耗了两位罗马数，所以循环次数+2
        } else {
            res += temp
            loop++ // 这里只需要消耗一位罗马数，所以+1
        }
    }
    return res
};
```

2. 根据特殊情况，前一位数如果比后一位数小，则这两位数应组合在一起
   
```ts
var romanToInt2 = function (s: string): number {
    if (!s) return 0
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let len = s.length, sum = 0, loop = 0, num = 0, now = 0;
    while(loop < len) {
        now = obj[s[loop]] // 用now代表当前罗马数对应的阿拉伯数
        if(num < now) { 
            sum -= num // 如果上一位数小于当前数，那么肯定是这两位罗马数组合，值为两位数相减
        } else {
            sum += num
        }
        num = now // 用num缓存上一位罗马数对应的阿拉伯数
        loop++
    }
    return sum += num
};
```