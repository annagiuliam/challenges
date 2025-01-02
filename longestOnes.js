// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] === 0) k--;
    if (k < 0) {
      if (nums[i] === 0) k++;
      i++;
    }
    j++;
  }
  return j - i;
};

const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k = 3;
// const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// const k = 2;

console.log(longestOnes(nums, k));