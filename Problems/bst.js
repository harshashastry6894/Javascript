/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Maximum Depth of Binary Tree
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Validate Binary Search Tree
// Input: root = [2,1,3]
// Output: true
var isValidBST = function (root) {
    if (!root) return true;
    let helper = (root, min, max) => {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// symmetric 
// Given the root of a binary tree, check whether it is a mirror of itself.
// Input: root = [1,2,2,3,4,4,3]
// Output: true
let isSymmetric = function (root) {
    if (!root) return true;
    let helper = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return helper(left.left, right.right) && helper(left.right, right.left);
    }
    return helper(root.left, root.right);
};