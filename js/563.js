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
var findTilt = function(root) {
  let tilt = 0;
  (function postTraversal(root) {
    if (!root) return 0;
    const left = postTraversal(root.left);
    const right = postTraversal(root.right);

    tilt += Math.abs(left - right);

    return left + right + root.val;
  })(root);
  return tilt;
};
