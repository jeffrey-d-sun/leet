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
const getIntersectionNode = (headA, headB) => {
  let p1 = headA
  let p2 = headB
  
  while(p1 !== null && p2 !== null) {
    if (p1 === p2 && p1 !== 0) {
      return p1
    }
    
    if (p1 && p1.next === null) {
      p1 = headB
      p2 = p2.next
    } else if (p2 && p2.next === null) {
      p2 = headA
      p1 = p1.next
    } else {
      p1 = p1.next
      p2 = p2.next
    }
  }
  
  return null
};