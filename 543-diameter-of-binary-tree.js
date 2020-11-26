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

const diameterOfBinaryTree = (root) => {
  let ans = 0
  
  depth(root)
  
  return ans
  
  function depth(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return 1
    
    const left = depth(root.left)
    const right = depth(root.right)
    
    ans = Math.max(ans, left+right)
    
    return Math.max(left, right) + 1
  }
};