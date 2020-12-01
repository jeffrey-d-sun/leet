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
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  const res = []
  if (!root) return res
  
  const queue = []
  queue.push(root)
  
  while(queue.length !== 0) {
    let nodeCount = queue.length
    let row = []
    
    while(nodeCount > 0) {
      const currentNode = queue.shift()
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      
      row.push(currentNode.val)
      nodeCount--
    }
    
    res.unshift(row)
  }
  
  return res
};