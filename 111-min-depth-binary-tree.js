/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  if (root === null) return 0
  
  let depth = 0
  let queue = []
  
  queue.push(root)
  
  while(queue.length !== 0) {
    let numberOfNodes = queue.length
    
    while (numberOfNodes > 0) {
      let node = queue.shift()
      
      if (node.left === null && node.right === null) {
        depth++
        return depth
      }

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }

      numberOfNodes--
    }
    depth++
  }
};