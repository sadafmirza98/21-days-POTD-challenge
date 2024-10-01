/* Multiply two linked lists 

Given elements as nodes of the two singly linked lists. The task is to multiply these two linked lists, say L1 and L2.

Note: The output could be large take modulo 10^9+7.

Examples :

Input: LinkedList L1 : 3->2 , LinkedList L2 : 2
Output: 64
Explanation: 

Multiplication of 32 and 2 gives 64.
Input: LinkedList L1: 1->0->0 , LinkedList L2 : 1->0
Output: 1000
Explanation: 

Multiplication of 100 and 10 gives 1000.
Expected Time Complexity: O(max(n,m))
Expected Auxilliary Space: O(1)
where n is the size of L1 and m is the size of L2

Constraints:
1 <= number of nodes <= 105
1 <= node->data <= 103
 */

// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} l1
 * @param {Node} l2
 * @return {number}
 */

// Use Bigint for javascript
class Solution {
  multiplyTwoLists(first, second) {
    const MOD = 1e9 + 7;

    // Helper function to convert linked list to number
    function linkedListToNumber(list) {
      let num = BigInt(0);
      while (list !== null) {
        num = (num * BigInt(10) + BigInt(list.data)) % BigInt(MOD);
        list = list.next;
      }
      return num;
    }

    // Convert both linked lists to numbers
    const num1 = linkedListToNumber(first);
    const num2 = linkedListToNumber(second);

    // Multiply the numbers and take modulo
    const result = (num1 * num2) % BigInt(MOD);

    return Number(result);
  }
}
