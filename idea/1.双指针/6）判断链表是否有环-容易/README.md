# 判断链表是否存在环

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例：

    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。

![image](https://user-gold-cdn.xitu.io/2020/7/16/173583c8671a9363?w=531&h=171&f=png&s=11301)

    输入：head = [1], pos = -1
    输出：false
    解释：链表中没有环。

![image](https://user-gold-cdn.xitu.io/2020/7/16/173583e5710e532d?w=65&h=65&f=png&s=1963)


- 非O(1)版

利用set存储已经遍历过的链表节点，如果再次遍历到这个节点 说明有环

```ts
var hasCycle = function (head: ListNode): boolean {
    if (!head.next) return false

    const mySet = new Set()
    let li = head
    while(li) {
        if (mySet.has(li)) {
            return true
        } else {
            mySet.add(li)
            li = li.next
        }
    }
    return false
};
```

- 进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

利用双指针，这里是单链表，不考虑首尾向中间，都从头开始，一个快（走两步），一个慢（走一步）

如果两个指针相遇，肯定就存在环


```ts
const hasCycle2 = function (head: ListNode): boolean{
    if (!head || !head.next) return false

    let fastLi = head.next, slowLi = head

    while (fastLi && slowLi && fastLi.next) { // 如果没有环 fastLi 可以走到结尾
        if (fastLi == slowLi) {
            return true
        } else {
            fastLi = fastLi.next.next
            slowLi = slowLi.next
        }
    }
    return false
}
```