/* Missing And Repeating
Difficulty: MediumAccuracy: 24.83%Submissions: 508K+Points: 4
Given an unsorted array arr of of positive integers. One number 'A' from set {1, 2,....,n} is missing and one number 'B' occurs twice in array. Find numbers A and B.

Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

Examples

Input: arr[] = [2, 2]
Output: 2 1
Explanation: Repeating number is 2 and smallest positive missing number is 1.
Input: arr[] = [1, 3, 3] 
Output: 3 2
Explanation: Repeating number is 3 and smallest positive missing number is 2.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
2 ≤ n ≤ 105
1 ≤ arr[i] ≤ n


 */
// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  // Function to find two repeating elements in an array of size n.
  findTwoElement(arr) {
    // your code here
    let n = arr.length;
    let sumN = (n * (n + 1)) / 2;
    let sumNSquare = (n * (n + 1) * (2 * n + 1)) / 6;

    let sumArr = 0;
    let sumArrSquare = 0;

    for (let i = 0; i < n; i++) {
      sumArr += arr[i];
      sumArrSquare += arr[i] * arr[i];
    }

    let diff = sumN - sumArr; // A - B
    let sumDiff = (sumNSquare - sumArrSquare) / diff; // A + B

    let A = (diff + sumDiff) / 2;
    let B = sumDiff - A;

    return [B, A];
  }
}
