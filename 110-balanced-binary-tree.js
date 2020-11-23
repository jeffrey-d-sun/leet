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
 * @return {boolean}
 */
const isBalanced = (root) => {
  if (root === null) return true
  return height(root) !== -1
};

const height = (root) => {
  if (root === null) return 0
  const ln = height(root.left)
  const rn = height(root.right)
  
  if (ln === -1 || rn === -1 || Math.abs(ln - rn) > 1) {
    return -1
  }
  
  return Math.max(ln, rn) + 1
};