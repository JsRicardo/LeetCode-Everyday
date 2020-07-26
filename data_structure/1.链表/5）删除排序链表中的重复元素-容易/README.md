# 删除有序链表中的重复元素

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例

    输入: 1->1->2->3->3
    输出: 1->2->3

难度：容易

解题思路

因为这个链表是有序的，所以如果链表的next 等于 当前位， 那么就可以直接舍弃当前位，让next指向 next.next

```ts
var deleteDuplicates = function (head: ListNode): ListNode {
    if (!head || !head.next) return head

    head.next = deleteDuplicates(head.next)

    return head.val == head.next.val ? head.next : head
};
```