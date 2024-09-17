/* Circle of Strings

Given an array arr of lowercase strings, determine if the strings can be chained together to form a circle.
A string X can be chained together with another string Y if the last character of X is the same as the first character of Y. If every string of the array can be chained with exactly two strings of the array(one with the first character and the second with the last character of the string), it will form a circle.
For example, for the array arr[] = {"for", "geek", "rig", "kaf"} the answer will be Yes as the given strings can be chained as "for", "rig", "geek" and "kaf" */

/**
 * @param {number} n
 * @param {number} a
 * @returns {number}
 */

class Solution {
  isCircle(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    // Create a graph with 26 vertices (for each letter of the alphabet)
    const graph = Array.from({ length: 26 }, () => []);
    const inDegree = Array(26).fill(0);
    const outDegree = Array(26).fill(0);

    // Helper function to get the index of a character
    const getIndex = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

    // Build the graph
    for (const str of arr) {
      const first = getIndex(str[0]);
      const last = getIndex(str[str.length - 1]);
      graph[first].push(last);
      outDegree[first]++;
      inDegree[last]++;
    }

    // Check if in-degree and out-degree of every vertex is the same
    for (let i = 0; i < 26; i++) {
      if (inDegree[i] !== outDegree[i]) return 0;
    }

    // Helper function for DFS
    const visited = Array(26).fill(false);
    const dfs = (v) => {
      visited[v] = true;
      for (const neighbor of graph[v]) {
        if (!visited[neighbor]) dfs(neighbor);
      }
    };

    // Find the first vertex with an outgoing edge
    let start = -1;
    for (let i = 0; i < 26; i++) {
      if (outDegree[i] > 0) {
        start = i;
        break;
      }
    }

    // Perform DFS from the start vertex
    dfs(start);

    // Check if all vertices with outgoing edges are visited
    for (let i = 0; i < 26; i++) {
      if (outDegree[i] > 0 && !visited[i]) return 0;
    }

    return 1;
  }
}
