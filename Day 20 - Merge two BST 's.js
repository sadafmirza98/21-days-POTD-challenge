/* Merge two BST 's 

Given two BSTs, return elements of merged BSTs in sorted form.

Examples :

Input:
BST1:
       5
     /   \
    3     6
   / \
  2   4  
BST2:
        2
      /   \
     1     3
            \
             7
            /
           6
Output: 1 2 2 3 3 4 5 6 6 7
Explanation: After merging and sorting the two BST we get 1 2 2 3 3 4 5 6 6 7.
 */

class Solution {
  // Helper function to perform in-order traversal of a BST
  inOrderTraversal(root, result) {
    if (root === null) return;
    this.inOrderTraversal(root.left, result);
    result.push(root.data);
    this.inOrderTraversal(root.right, result);
  }

  // Function to merge two BSTs and return elements in sorted order
  merge(root1, root2) {
    let list1 = [];
    let list2 = [];

    // Perform in-order traversal to get sorted elements
    this.inOrderTraversal(root1, list1);
    this.inOrderTraversal(root2, list2);

    // Merge the two sorted arrays
    let merged = [];
    let i = 0,
      j = 0;
    while (i < list1.length && j < list2.length) {
      if (list1[i] < list2[j]) {
        merged.push(list1[i]);
        i++;
      } else {
        merged.push(list2[j]);
        j++;
      }
    }
    while (i < list1.length) {
      merged.push(list1[i]);
      i++;
    }
    while (j < list2.length) {
      merged.push(list2[j]);
      j++;
    }
    return merged;
  }
}
