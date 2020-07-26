#  删除链表的倒数第N个节点

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

    给定一个链表: 1->2->3->4->5, 和 n = 2.
    当删除了倒数第二个节点后，链表变为 1->2->3->5

难度： 中等

解题思路

快慢双指针

快指针先走 n+1 步

慢指针从头开始走，两个指针以同样的速度往后走

直到快指针为 nll 此时，说明快指针已经走完了整个链表

此时慢指针的位置就是倒数第n个节点

删除这个节点

``` ts
var removeNthFromEnd = function(head: ListNode, n: number): ListNode {
    let fast = head
    // 快指针先走 n+1 步
    while (n > 0) {
        fast = fast.next
        n--
    }
    // 如果快指针走完n+1步，整个链表就走完了，说明只需要删除头节点
    if (fast == null) return head.next 
    let slow = head
    // 慢指针从头开始走，两个指针以同样的速度往后走
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next // 删除这个节点
    return head
};
```
