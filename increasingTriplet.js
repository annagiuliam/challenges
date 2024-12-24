// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return false;
  }

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < first) {
      first = nums[i];
    }
    if (nums[i] > first && nums[i] < second) {
      second = nums[i];
    }
    if (nums[i] > second) {
      return true;
    }
  }
  return false;
};

// const nums = [20, 100, 10, 12, 5, 13];
// const nums = [5, 4, 3, 2, 1];
// const nums = [6, 7, 1, 2];
// const nums = [1, 5, 0, 4, 1, 3];
const nums = [5, 1, 5, 5, 2, 5, 4];

console.log(increasingTriplet(nums));