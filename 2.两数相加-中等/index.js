/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆
 * 序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
var LinkedNode = /** @class */ (function () {
    function LinkedNode(value) {
        this.next = null;
        this.value = value;
    }
    return LinkedNode;
}());
var a = new LinkedNode(2);
var b = new LinkedNode(4);
var c = new LinkedNode(3);
var d = new LinkedNode(5);
var e = new LinkedNode(6);
var f = new LinkedNode(4);
a.next = b;
b.next = c;
d.next = e;
e.next = f;
console.log(d);
function getNode(linkedList, values) {
    values.push(linkedList.value);
    if (linkedList.next !== null) {
        getNode(linkedList.next, values);
    }
}
function getNodeArr(linkedList) {
    var values = [];
    getNode(linkedList, values);
    return values;
}
var addTwoNumbers = function (l1, l2) {
    var value1 = getNodeArr(l1).reverse().join('');
    var value2 = getNodeArr(l2).reverse().join('');
    var res = (+value1) + (+value2) + '';
    var nodeArr = [];
    res.split('').reverse().forEach(function (r) {
        nodeArr.push(new LinkedNode(+r));
    });
    for (var i = 0, len = nodeArr.length; i < len - 1; i++) {
        nodeArr[i].next = nodeArr[i + 1];
    }
    return nodeArr[0];
};
console.log(addTwoNumbers(a, d));
function addTwoNumbers2(l1, l2) {
    var node = new LinkedNode(0);
    var temp = node; // temp节点
    var add = 0; // 是否进一
    var sum = 0; // 新链表当前未取余的值 = 链表1值 + 链表2值 + add;
    // 遍历， 以最长链表为结束点
    while (l1 || l2) {
        sum = (l1 ? l1.value : 0) + (l2 ? l2.value : 0) + add;
        temp.next = new LinkedNode(sum % 10); // 取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0; // 相加大于10，则需向后进位
        l1 && (l1 = l1.next); // 改变指向，继续循环
        l2 && (l2 = l2.next);
    }
    add && (temp.next = new LinkedNode(add));
    return node.next;
}
