
class ListNode {
    val: number = 0
    next: ListNode = null
    constructor(val: number) {
        this.val = val
        this.next = null
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
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

const hasCycle2 = function (head: ListNode): boolean{
    if (!head || !head.next) return false

    let fastLi = head.next, slowLi = head

    while (fastLi && slowLi && fastLi.next) {
        if (fastLi == slowLi) {
            return true
        } else {
            fastLi = fastLi.next.next
            slowLi = slowLi.next
        }
    }
    return false
}
