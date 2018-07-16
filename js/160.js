/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0,
        lenB = 0;
    let curA = headA,
        curB = headB;

    while (headA != null) {
        lenA++;
        headA = headA.next;
    }

    while (headB != null) {
        lenB++;
        headB = headB.next;
    }

    let diff = Math.abs(lenB - lenA);

    if (lenA > lenB) {
        while (diff > 0) {
            curA = curA.next;
            diff--;
        }
    } else {
        while (diff > 0) {
            curB = curB.next;
            diff--;
        }
    }

    while (curA != curB) {
        curA = curA.next;
        curB = curB.next;
    }

    return curA;
};
