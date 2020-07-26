# 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例

    给定 1->2->3->4, 你应该返回 2->1->4->3.

难度： 中等

解题思路

![image](https://user-gold-cdn.xitu.io/2020/7/26/1738b3ae1e1a5b7c?w=694&h=852&f=png&s=115639)

```ts
var swapPairs = function (head: ListNode): ListNode {
    let newListNode = new ListNode(-1) // 添加dummy节点
    newListNode.next = head 

    let temp = newListNode

    while(temp.next && temp.next.next) {
        let s = temp.next
        let e = s.next
        // 交换s 和 e 两个节点
        temp.next = e;
        s.next = e.next;
        e.next = s;

        temp = s;// 向后两个节点，继续交换
    }
    return newListNode.next
};
```