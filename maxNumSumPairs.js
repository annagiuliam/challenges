// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let counter = 0;

  while (i < j) {
    console.log(nums[i], nums[j]);
    if (nums[i] + nums[j] === k) {
      counter += 1;
      i++;
      j--;
    } else if (nums[i] + nums[j] < k) {
      i++;
    } else if (nums[i] + nums[j] > k) {
      j--;
    }
  };
  return counter;
};

const nums = [1, 2, 3, 4];
const k = 5;
console.log(maxOperations(nums, k));