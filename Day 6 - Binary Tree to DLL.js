/* Binary Tree to DLL

Given a Binary Tree (BT), convert it to a Doubly Linked List (DLL) in place. The left and right pointers in nodes will be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as the order of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

Note: h is the tree's height, and this space is used implicitly for the recursion stack.

Expected Time Complexity: O(no. of nodes)
Expected Space Complexity: O(height of the tree)

Constraints:
1 ≤ Number of nodes ≤ 105
0 ≤ Data of a node ≤ 105 */

//User function Template for javascript

/**
 * @param {Node} root
 * @returns {Node}
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
  bToDLL(root) {
    if (!root) return null;

    let head = null;
    let prev = null;

    const convert = (node) => {
      if (!node) return;

      // Recursively convert the left subtree
      convert(node.left);

      // Now convert this node
      if (prev === null) {
        head = node; // This node becomes the head of the DLL
      } else {
        node.left = prev;
        prev.right = node;
      }
      prev = node;

      // Recursively convert the right subtree
      convert(node.right);
    };

    convert(root);
    return head;
  }

  // Helper function to print the DLL
  printDLL(head) {
    let current = head;
    while (current) {
      process.stdout.write(current.data + " ");
      current = current.right;
    }
  }
}
