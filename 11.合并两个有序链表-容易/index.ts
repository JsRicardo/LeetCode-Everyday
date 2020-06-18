
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


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

const a = new ListNode(1), b = new ListNode(2), c = new ListNode(4)
a.next = b 
b.next = c

const z = new ListNode(4), y = new ListNode(3, z), x = new ListNode(1, y)




console.log(mergeTwoLists(a, x))