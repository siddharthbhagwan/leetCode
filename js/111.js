/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root == null) return 0;
  if (root.val != null && (root.left == null && root.right == null)) return 1;

  return Math.min(minDepth(root.left) || Number.MAX_SAFE_INTEGER, minDepth(root.right) || Number.MAX_SAFE_INTEGER) + 1;
};
