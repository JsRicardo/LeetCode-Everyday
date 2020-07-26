var removeNthFromEnd = function(head: ListNode, n: number): ListNode {
    let fast = head

    while (n > 0) {
        fast = fast.next
        n--
    }
    if (fast == null) return head.next
    let slow = head

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return head
};