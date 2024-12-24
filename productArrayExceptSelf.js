// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // const prefixes = Array(nums.length).fill(1);
  // const suffixes = Array(nums.length).fill(1);
  // const answer = [];

  // for (let i = 1; i < nums.length; i++) {
  //   prefixes[i] = prefixes[i - 1] * nums[i - 1];
  // }
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   suffixes[i] = suffixes[i + 1] * nums[i + 1];
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   answer[i] = prefixes[i] * suffixes[i];
  // }
  // return answer;

  const answer = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  };

  let suffixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffixProduct;
    suffixProduct *= nums[i];
  };

  return answer;
};

const nums = [1, 2, 3, 4];
// const nums = [3, 4, 6, 1, 2];
// const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));