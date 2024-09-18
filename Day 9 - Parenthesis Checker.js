/* Parenthesis Checker

Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

Note: The driver code prints "balanced" if function return true, otherwise it prints "not balanced". */

/**
 * @param {string} x
 * @returns {boolean}
 */

class Solution {
  //Function to check if brackets are balanced or not.
  ispar(exp) {
    let stack = [];
    for (let i = 0; i < exp.length; i++) {
      let char = exp[i];
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        let last = stack.pop();
        if (
          (char === ")" && last !== "(") ||
          (char === "}" && last !== "{") ||
          (char === "]" && last !== "[")
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
