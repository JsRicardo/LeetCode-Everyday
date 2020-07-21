// class LinkedNode {
//     value: number
//     next: LinkedNode
//     constructor(value: number) {
//         this.next = null
//         this.value = value
//     }
// }

var getIntersectionNode = function(headA: LinkedNode, headB: LinkedNode) {
    let l1 = headA, l2 = headB

    while(l1 != l2) {
        l1 = l1 ? l1.next : headB // 如果l1为null 代表l1已经遍历完，将l1尾部链接至l2尾部
        l2 = l2 ? l2.next : headA
    }
    return l1
};