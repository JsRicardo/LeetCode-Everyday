var swapPairs = function (head: ListNode): ListNode {
    let newListNode = new ListNode(-1)
    newListNode.next = head

    let temp = newListNode

    while(temp.next && temp.next.next) {
        let s = temp.next
        let e = s.next
        temp.next = e;
        s.next = e.next;
        e.next = s;
        temp = s;
    }
    return newListNode.next
};