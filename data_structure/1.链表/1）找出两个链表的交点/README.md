# 相交链表

编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

![image](https://user-gold-cdn.xitu.io/2020/7/21/17371355f2c65dd6?w=742&h=241&f=png&s=19796)

在节点 c1 开始相交

难易度： 简单

解题思路

设 A 的长度为 a + c，B 的长度为 b + c，其中 c 为尾部公共部分长度，可知 a + c + b = b + c + a

当访问 A 链表的指针访问到链表尾部时，令它从链表 B 的头部开始访问链表 B；同样地，当访问 B 链表的指针访问到链表尾部时，令它从链表 A 的头部开始访问链表 A。这样就能控制访问 A 和 B 两个链表的指针能同时访问到交点

如果不存在交点，那么 a + b = b + a，以下实现代码中 l1 和 l2 会同时为 null，从而退出循环

```ts
var getIntersectionNode = function(headA: LinkedNode, headB: LinkedNode) {
    let l1 = headA, l2 = headB

    while(l1 != l2) {
        l1 = l1 ? l1.next : headB // 如果l1为null 代表l1已经遍历完，将l1尾部链接至l2尾部
        l2 = l2 ? l2.next : headA
    }
    return l1
};
```