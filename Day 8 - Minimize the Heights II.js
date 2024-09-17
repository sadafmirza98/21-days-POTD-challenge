// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  getMinDiff(arr, k) {
    const n = arr.length;

    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Initialize the answer with the difference between the largest and smallest unmodified heights
    let ans = arr[n - 1] - arr[0];

    // Step 3: Set initial smallest and largest values after adjusting the first and last towers
    let smallest = arr[0] + k;
    let largest = arr[n - 1] - k;

    // Ensure smallest is actually smaller than largest after adjustment
    if (smallest > largest) {
      [smallest, largest] = [largest, smallest];
    }

    // Step 4: Traverse the array from the first to the second-last element
    for (let i = 0; i < n - 1; i++) {
      let minHeight = Math.min(smallest, arr[i + 1] - k); // Calculate new minimum height
      let maxHeight = Math.max(largest, arr[i] + k); // Calculate new maximum height

      // If subtracting leads to a negative height, skip this case
      if (minHeight < 0) continue;

      // Step 5: Update the answer with the smallest difference found so far
      ans = Math.min(ans, maxHeight - minHeight);
    }

    return ans;
  }
}
