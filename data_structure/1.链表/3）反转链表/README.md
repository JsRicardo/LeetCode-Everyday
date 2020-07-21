# 反转链表

反转一个单链表。

示例

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

难易度：简单

解题思路

从头逆序

构造一个新的头，新头的next等于head

```ts
var reverseList = function (head: LinkedNode) {
    if (!head || !head.next) return head

    let newHead = new LinkedNode(-1)
    while (head) {
        let temp = head.next
        head.next = newHead.next // 实现反转
        newHead.next = head
        head = temp
    }
    return newHead.next
};
```

递归

```ts
function reverseList2 (head: LinkedNode) {
    if (head == null || head.next == null) return head;
    let next = head.next;
    let newHead = reverseList2(next);
    next.next = head;
    head.next = null;
    return newHead;
}
```