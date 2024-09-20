/* Facing the Sun

Given an array height representing the heights of buildings. You have to count the buildings that will see the sunrise (Assume the sun rises on the side of the array starting point).
Note: The height of the building should be strictly greater than the height of the buildings left in order to see the sun.
 */

class Solution {
  //Function to check if brackets are balanced or not.
  countBuildings(height) {
    let count = 1; // The first building can always see the sunrise
    let max_height = height[0];

    for (let i = 1; i < height.length; i++) {
      if (height[i] > max_height) {
        count++;
        max_height = height[i];
      }
    }

    return count;
  }
}
