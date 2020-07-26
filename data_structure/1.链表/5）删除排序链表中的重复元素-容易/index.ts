

var deleteDuplicates = function (head: ListNode): ListNode {
    if (!head || !head.next) return head

    head.next = deleteDuplicates(head.next)

    return head.val == head.next.val ? head.next : head
};