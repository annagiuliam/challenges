// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxLen = 0;
  let curLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      maxLen = Math.max(maxLen, curLen);
      curLen = 0;
    } else {
      curLen++;
    }

  }

  return Math.max(curLen, maxLen);
};

const nums = [1, 0, 1, 1, 0, 1];

console.log(findMaxConsecutiveOnes(nums));