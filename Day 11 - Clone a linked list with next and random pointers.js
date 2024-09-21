/* Clone a linked list with next and random pointers

You are given a special linked list where each node has a next pointer pointing to its next node. You are also given some random pointers, where you will be given some pairs denoting two nodes a and b i.e. a->random = b (random is a pointer to a random node).

Construct a copy of the given list. The copy should consist of the same number of new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the original and copied list pointers represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes x and y in the original list, where x->random = y, then for the corresponding two nodes xnew and ynew in the copied list, xnew->random = ynew.

Return the head of the copied linked list.

NOTE : 
1. If there is any node whose arbitrary pointer is not given then it's by default NULL. 
2. Don't make any changes to the original linked list. */

class Solution {
  // Function to clone a linked list with next and random pointer.
  copyList(head) {
    if (!head) return null;

    let temp = head;
    let copy = new Node(0);
    let point = copy;

    // Step 1: Create a copy of the list with only next pointers
    while (temp !== null) {
      point.next = new Node(temp.data);
      temp = temp.next;
      point = point.next;
    }

    temp = head;
    point = copy.next;

    // Step 2: Set the random pointers in the copied list
    while (point !== null) {
      if (temp.random !== null) {
        let randomPoint = copy.next;
        while (randomPoint !== null) {
          if (randomPoint.data === temp.random.data) {
            point.random = randomPoint;
            break;
          }
          randomPoint = randomPoint.next;
        }
      }
      point = point.next;
      temp = temp.next;
    }

    return copy.next;
  }
}
