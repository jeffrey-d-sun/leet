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
 * @param {number} sum
 * @return {boolean}
 */

const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  };
  
  if (sum === root.val && root.left === null && root.right === null) {
    return true
  };
  
  let left = hasPathSum(root.left, sum - root.val);
  let right = hasPathSum(root.right, sum - root.val);
  
  return left || right
};