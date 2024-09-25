/* Smallest window in a string containing all the characters of another string

Given two strings s and p. Find the smallest window in the string s consisting of all the characters(including duplicates) of the string p.  Return "-1" in case there is no such window present. In case there are multiple such windows of same length, return the one with the least starting index.
Note : All characters are in Lowercase alphabets. 

Examples:

Input: s = "timetopractice", p = "toc"
Output: toprac
Explanation: "toprac" is the smallest
substring in which "toc" can be found.
Input: s = "zoomlazapzo", p = "oza"
Output: apzo
Explanation: "apzo" is the smallest 
substring in which "oza" can be found.
Expected Time Complexity: O(|s|)
Expected Auxiliary Space: O(n), n = len(p)

Constraints: 
1 ≤ |s|, |p| ≤ 105
 */

//User function Template for javascript

/**
 * @param {string} s
 * @param {string} p
 * @returns {string}
 */

class Solution {
  //Function to find the smallest window in the string s consisting
  //of all the characters of string p.
  smallestWindow(s, p) {
    // Step 1: Initialize frequency arrays for pattern and string
    let hash_pat = new Array(256).fill(0);
    let hash_str = new Array(256).fill(0);

    // Step 2: Populate the frequency array for the pattern string `p`
    for (let i = 0; i < p.length; i++) {
      hash_pat[p.charCodeAt(i)]++;
    }

    // Step 3: Initialize variables for the sliding window
    let start = 0,
      start_index = -1,
      min_len = Infinity,
      count = 0;

    // Step 4: Traverse the string `s` with a sliding window
    for (let j = 0; j < s.length; j++) {
      // Increment the frequency of the current character in `s`
      hash_str[s.charCodeAt(j)]++;

      // If the current character is part of `p` and its count in the current window is less than or equal to its count in `p`
      if (
        hash_pat[s.charCodeAt(j)] !== 0 &&
        hash_str[s.charCodeAt(j)] <= hash_pat[s.charCodeAt(j)]
      ) {
        count++;
      }

      // If all characters of `p` are found in the current window
      if (count === p.length) {
        // Try to minimize the window
        while (
          hash_str[s.charCodeAt(start)] > hash_pat[s.charCodeAt(start)] ||
          hash_pat[s.charCodeAt(start)] === 0
        ) {
          if (hash_str[s.charCodeAt(start)] > hash_pat[s.charCodeAt(start)]) {
            hash_str[s.charCodeAt(start)]--;
          }
          start++;
        }

        // Update the minimum length and starting index of the smallest window
        let len_window = j - start + 1;
        if (min_len > len_window) {
          min_len = len_window;
          start_index = start;
        }
      }
    }

    // If no valid window is found, return "-1"
    if (start_index === -1) {
      return "-1";
    }

    // Return the smallest window substring
    return s.substring(start_index, start_index + min_len);
  }
}
