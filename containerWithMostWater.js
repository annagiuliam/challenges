// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let min = Math.min(height[i], height[j]);
    let distance = j - i;
    let localArea = min * distance;
    area = Math.max(area, localArea);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return area;
};

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];
const height = [8, 7, 2, 1];

console.log(maxArea(height));