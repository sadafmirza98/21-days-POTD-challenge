/* Minimal Cost

There is an array arr of heights of stone and Geek is standing at the first stone and can jump to one of the following: Stone i+1, i+2, ... i+k stone, where k is the maximum number of steps that can be jumped and cost will be |hi-hj| is incurred, where j is the stone to land on. Find the minimum possible total cost incurred before the Geek reaches the last stone.

Example:

Input: k = 3, arr[]= [10, 30, 40, 50, 20]
Output: 30
Explanation: Geek will follow the path 1->2->5, the total cost would be | 10-30| + |30-20| = 30, which is minimum
Input: k = 1, arr[]= [10, 20, 10]
Output: 20
Explanation: Geek will follow the path 1->2->3, the total cost would be |10 - 20| + |20 - 10| = 20.
Expected Time Complexity: O(n*k)
Expected Auxilary Space: O(n)
 */
class Solution {
  // Function to minimize the cost of reducing the heights.
  minimizeCost(k, arr) {
    const n = arr.length;
    const dp = new Array(n).fill(Infinity); // Initialize dp array with Infinity
    dp[0] = 0; // Cost to stay on the first stone is 0

    for (let i = 0; i < n; i++) {
      // Iterate through each stone
      for (let j = 1; j <= k; j++) {
        // Check jumps from 1 to k steps
        if (i + j < n) {
          // Ensure we don't go out of bounds
          // Update dp[i+j] with the minimum cost to reach stone i+j
          dp[i + j] = Math.min(
            dp[i + j],
            dp[i] + Math.abs(arr[i] - arr[i + j])
          );
        }
      }
    }

    return dp[n - 1]; // Return the minimum cost to reach the last stone
  }
}
