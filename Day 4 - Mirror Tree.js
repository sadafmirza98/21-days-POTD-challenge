/* Mirror Tree

Given a Binary Tree, convert it into its mirror.
Input:
      10
     /  \
    20   30
   /  \
  40  60
Output: 30 10 60 20 40
Explanation: The tree is
      10               10
    /    \  (mirror)    /    \
   20    30    =>   30    20
  /  \                     /   \
 40  60                 60   40
The inroder traversal of mirror is: 30 10 60 20 40.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(height of the tree)

Constraints:
1 ≤ Number of nodes ≤ 105
1 ≤ Data of a node ≤ 105 */

// User function Template for javascript

/**
 * @param {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  mirror(node) {
    if (node === null) {
      return null;
    }
    // Recursively convert left and right subtrees
    const left = this.mirror(node.left);
    const right = this.mirror(node.right);
    // Swap left and right subtrees
    node.left = right;
    node.right = left;
    return node;
  }
}

// Helper function to perform inorder traversal
function inorderTraversal(node, result = []) {
  if (node !== null) {
    inorderTraversal(node.left, result);
    result.push(node.value);
    inorderTraversal(node.right, result);
  }
  return result;
}
