/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  if (t1 && !t2) return t1
  if (!t1 && t2) return t2
  if (!t1 && !t2) return null
  
  t1.val += t2.val
  
  const left =mergeTrees(t1.left, t2.left)
  const right = mergeTrees(t1.right, t2.right)
  
  t1.left = left
  t1.right = right
  
  return t1
    
};