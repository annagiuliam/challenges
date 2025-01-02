// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      console.log(j);
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
      console.log(nums);
    }
  };

  nums.splice(j);
  return j
};

// const nums = [3, 2, 2, 3];
// const val = 3;
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(removeElement(nums, val));