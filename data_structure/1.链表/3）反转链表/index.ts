
var reverseList = function (head: LinkedNode) {
    if (!head || !head.next) return head

    let newHead = new LinkedNode(-1)
    while (head) {
        let temp = head.next
        head.next = newHead.next
        newHead.next = head
        head = temp
    }
    return newHead.next
};

function reverseList2 (head: LinkedNode) {
    if (head == null || head.next == null) return head;
    let next = head.next;
    let newHead = reverseList2(next);
    next.next = head;
    head.next = null;
    return newHead;
}