/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  function build(left, right) {
    if (left > right) return null
    if (left === right) return new TreeNode(nums[left])

    const mid = left + Math.floor((right - left) / 2)
    const root = new TreeNode(nums[mid])

    root.left = build(left, mid - 1)
    root.right = build(mid + 1, right)

    return root
  }
  return build(0, nums.length - 1)
};