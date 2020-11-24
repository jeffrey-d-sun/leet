/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  let fast = head
  let slow = head
  
  while (fast && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  
  let reverse = null
  
  while (slow !== null)  {
    let next = slow.next
    slow.next = reverse
    reverse = slow
    slow = next
  }
  
  let p1 = head
  let p2 = reverse
  
  while (p1 !== null && p2 !== null) {
    if (p1.val !== p2.val) {
      return false
    }
    p1 = p1.next
    p2 = p2.next
  }
  
  return true
};

