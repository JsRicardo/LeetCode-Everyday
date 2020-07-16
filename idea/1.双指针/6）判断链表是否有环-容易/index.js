var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = 0;
        this.next = null;
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head.next)
        return false;
    var mySet = new Set();
    var li = head;
    while (li) {
        if (mySet.has(li)) {
            return true;
        }
        else {
            mySet.add(li);
            li = li.next;
        }
    }
    return false;
};
var hasCycle2 = function (head) {
    if (!head || !head.next)
        return false;
    var fastLi = head.next, slowLi = head;
    while (fastLi && slowLi && fastLi.next) {
        if (fastLi == slowLi) {
            return true;
        }
        else {
            fastLi = fastLi.next.next;
            slowLi = slowLi.next;
        }
    }
    return false;
};
