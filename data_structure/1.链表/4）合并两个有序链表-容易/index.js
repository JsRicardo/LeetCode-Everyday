// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (next === void 0) { next = null; }
        this.val = 0;
        this.next = null;
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function getNodeVal(l, values) {
    if (!l)
        return;
    values.push(l.val);
    getNodeVal(l.next, values);
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function (l1, l2) {
    if (l1 && l2) {
        var values = [];
        getNodeVal(l1, values);
        getNodeVal(l2, values);
        values.sort(function (a, b) { return a - b; });
        var res = values.map(function (v) { return new ListNode(v); });
        res.reduce(function (prev, cur) { return prev.next = cur; });
        return res[0];
    }
    else {
        return l1 || l2;
    }
};
var a = new ListNode(1), b = new ListNode(2), c = new ListNode(4);
a.next = b;
b.next = c;
var z = new ListNode(4), y = new ListNode(3, z), x = new ListNode(1, y);
var mergeTwoLists2 = function (l1, l2) {
    if (!l1 || !l2)
        return l1 || l2;
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists2(l1, l2.next);
        return l2;
    }
    else {
        l1.next = mergeTwoLists2(l1.next, l2);
        return l1;
    }
};
console.log(mergeTwoLists2(a, x));
