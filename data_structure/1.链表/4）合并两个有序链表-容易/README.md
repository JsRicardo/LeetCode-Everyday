将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

`示例：`

`输入：1->2->4, 1->3->4`

`输出：1->1->2->3->4->4`

难度：容易

解题思路：

1. 暴力解法

递归两个链表，取出所有val，对这些val进行排序，将排序之后的val在生成一个新链表输出。

```ts
class ListNode {
    val: number = 0
    next: ListNode = null
    constructor(val: number, next: ListNode = null) {
        this.val = val
        this.next = next
    }
}

function getNodeVal(l: ListNode, values: number[]) {
    if (!l) return
    values.push(l.val)
    getNodeVal(l.next, values)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function (l1: ListNode, l2: ListNode): ListNode {
    if (l1 && l2) {
        let values: number[] = []
        getNodeVal(l1, values)
        getNodeVal(l2, values)

        values.sort((a, b) => a - b)

        let res: ListNode[] = values.map(v => new ListNode(v))
        res.reduce((prev, cur) => prev.next = cur)

        return res[0]

    } else {
        return l1 || l2
    }
};
```

2. 不生成新的链表

既然两个链表都是升序排列，那么只需要把两个列表的节点相互比较，然后插入到愿列表中即可

    1. 如果l1的当前节点比l2的当前节点大，那么就应该是l1的当前节点插入l2的当前节点之后
    2. 反之亦然
    3. 递归比较没一个节点
```ts
var mergeTwoLists2 = function (l1: ListNode, l2: ListNode): ListNode {
    if (!l1 || !l2) return l1 || l2

    if (l1.val > l2.val) {
        l2.next = mergeTwoLists2(l1, l2.next)
        return l2

    } else {
        l1.next = mergeTwoLists2(l1.next, l2)
        return l1
    }
}
```