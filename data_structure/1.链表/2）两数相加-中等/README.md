给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆
序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

`输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)`

`输出：7 -> 0 -> 8`

`原因：342 + 465 = 807`

- 难易程度： 中等

解题思路

1. 平常思维，按序取出链表中的值，得出相加的结果，再利用结果倒序生成新的链表

```ts
class LinkedNode {
    value: number
    next: LinkedNode
    constructor(value: number) {
        this.next = null
        this.value = value
    }
}

const a = new LinkedNode(2)
const b = new LinkedNode(4)
const c = new LinkedNode(3)

const d = new LinkedNode(5)
const e = new LinkedNode(6)
const f = new LinkedNode(4)

a.next = b
b.next = c

d.next = e
e.next = f

function getNode(linkedList: LinkedNode, values: number[]) {
    values.push(linkedList.value)
    if (linkedList.next !== null) {
        getNode(linkedList.next, values)
    }
}
// 按序取出链表中的值的数组
function getNodeArr(linkedList: LinkedNode) {
    let values: number[] = []
    getNode(linkedList, values)
    return values
}

const addTwoNumbers = function (l1: LinkedNode, l2: LinkedNode) {
    let value1 = getNodeArr(l1).reverse().join('')
    let value2 = getNodeArr(l2).reverse().join('')

    let res = (+value1) + (+value2) + ''

    // 存储结果的每个节点
    const nodeArr: LinkedNode[] = []
    res.split('').reverse().forEach(r => {
        nodeArr.push(new LinkedNode(+r))
    })

    for (let i = 0, len = nodeArr.length; i < len - 1; i++) {
        // 构建结果链表
        nodeArr[i].next = nodeArr[i + 1]
    }

    return nodeArr[0]
};

console.log(addTwoNumbers(a, d)) // 7 -> 0 -> 8
```

2. 两个链表相加，因为是倒序的，则两数相加大于10，向后进位，低位相加。

` 2 -> 4 -> 3 `

` 5 -> 6 -> 4  +`

`----------------------`

` 7 -> 0 -> 8 `

`因为6+4大于等于10， 所以需要向后进位， 3 + 4 + 1 = 8`
   
```ts
function addTwoNumbers2(l1: LinkedNode, l2: LinkedNode): LinkedNode {
    let node = new LinkedNode(0);
    let temp = node;// temp节点
    let add = 0;// 是否进一
    let sum = 0;// 新链表当前未取余的值 = 链表1值 + 链表2值 + add;

    // 遍历， 以最长链表为结束点
    while (l1 || l2) {
        sum = (l1 ? l1.value : 0) + (l2 ? l2.value : 0) + add;
        temp.next = new LinkedNode(sum % 10);// 取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0; // 相加大于10，则需向后进位（+1）
        l1 && (l1 = l1.next); // 改变指向，继续循环
        l2 && (l2 = l2.next);
    }
    add && (temp.next = new LinkedNode(add));
    return node.next;
}
```