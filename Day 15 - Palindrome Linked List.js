/* Palindrome Linked List

Given a singly linked list of integers. The task is to check if the given linked list is palindrome or not.

Examples:

Input: LinkedList: 1->2->1->1->2->1
Output: true
Explanation: The given linked list is 1->2->1->1->2->1 , which is a palindrome and Hence, the output is true.

Input: LinkedList: 1->2->3->4
Output: false
Explanation: The given linked list is 1->2->3->4, which is not a palindrome and Hence, the output is false.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1) 
Note: You should not use the recursive stack space as well

Constraints:
1 <= number of nodes <= 105
1 ≤ node->data ≤ 103
 */
// User function Template for javascript

/**
 * @param {Node} head
 * @returns {boolean}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  // Function to check whether the list is palindrome.
  isPalindrome(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
      let nextNode = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextNode;
    }

    // Step 3: Compare the first half and the reversed second half
    let left = head;
    let right = prev;
    while (right) {
      if (left.data !== right.data) {
        return false;
      }
      left = left.next;
      right = right.next;
    }

    return true;
  }
}
