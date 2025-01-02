// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    };
  };

};

const nums = [0, 1, 0, 3, 12];
// const nums = [0, 1, 0];
// const nums = [0, 0, 1];

console.log(moveZeroes(nums));