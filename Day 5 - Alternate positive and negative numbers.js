/* Alternate positive and negative numbers

Given an unsorted array arr containing both positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
Note: Array should start with a positive number and 0 (zero) should be considered a positive element. If any of the positive or negative integers are exhausted, then add the remaining integers in the answer.

Examples:

Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
Output: 9 -2 4 -1 5 -5 0 -3 2
Explanation: Positive elements : [9, 4, 5, 0, 2]
Negative elements : [-2, -1, -5, -3]
As we need to maintain the relative order of postive elements and negative elements we will pick each element from the positive and negative and will store them. If any of the positive and negative numbers are completed, we will continue with the remaining signed elements.
Hence, the output is 9, -2, 4, -1, 5, -5, 0, -3, 2.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

Constraints:
1 ≤ arr.size() ≤ 107
-106 ≤ arr[i] ≤ 107 */

/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */

class Solution {
  rearrange(arr) {
    let positives = [];
    let negatives = [];
    let result = [];
    let i = 0,
      j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        positives.push(arr[i]);
      } else {
        negatives.push(arr[i]);
      }
    }
    while (i < positives.length && j < negatives.length) {
      result.push(positives[i++]);
      result.push(negatives[j++]);
    }

    while (i < positives.length) {
      result.push(positives[i++]);
    }
    while (j < negatives.length) {
      result.push(negatives[j++]);
    }
    for (var index = 0; index < result.length; index++) {
      arr[index] = result[index];
    }
    return arr;
  }
}
