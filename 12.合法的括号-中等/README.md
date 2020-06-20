给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足

    1. 左括号必须用相同类型的右括号闭合。
    2. 括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串！

示例：

    输入: "()[]{}"
    输出: true

难易度：中等

解题思路：

- 括号必须成对出现，所以如果字符串长度为奇数，则不成立
- 反括号出现的次序 必须与对应成对正括号 出现的次序相同
- 考虑用栈的形式存储正括号出现的顺序

```ts
var isValid = function (s: string): boolean {
    const len = s.length;
    if (len == 0) return true;
    if (len % 2) return false; // 括号必须成对出现，所以如果字符串长度为奇数，则不成立

    const leftDic = '([{', rightDic = ')]}';

    const stack: string[] = [];

    for (let i = 0; i < len; i++) {
        if (leftDic.indexOf(s[i]) != -1) {
            stack.push(s[i]);
        }
        if (rightDic.indexOf(s[i]) != -1) {
            const temp = stack.pop(); // 栈里面始终存储的是有序的，未成对的括号
            // 括号必须成对
            if (leftDic.indexOf(temp) != rightDic.indexOf(s[i])) return false; 
        }
    }
    return !stack.length; // 如果for循环完了栈里面还存在元素，说明正反括号的个数不同
};
``` 
