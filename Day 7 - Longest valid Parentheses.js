/* Longest valid Parentheses

Given a string str consisting of opening and closing parenthesis '(' and ')'. Find length of the longest valid parenthesis substring.

A parenthesis string is valid if:

For every opening parenthesis, there is a closing parenthesis.
Opening parenthesis must be closed in the correct order.
Examples :

Input: str = ((()
Output: 2
Explaination: The longest valid parenthesis substring is "()".
Input: str = )()())
Output: 4
Explaination: The longest valid parenthesis substring is "()()".
Expected Time Complexity: O(|str|)
Expected Auxiliary Space: O(|str|) */

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
  maxLength(str) {
    let maxLength = 0;
    let stack = [-1]; // Initialize stack with -1 to handle the base case

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        stack.push(i); // Push the index of '(' onto the stack
      } else {
        stack.pop(); // Pop the top of the stack for ')'
        if (stack.length === 0) {
          stack.push(i); // If stack is empty, push the current index
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        }
      }
    }

    return maxLength;
  }
}
