/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }
  let maxSum = currSum;

  for (let j = k; j < nums.length; j++) {
    currSum += nums[j] - nums[j - k];
    maxSum = Math.max(maxSum, currSum);
  };
  return maxSum / k;
};

// const nums = [1, 12, -5, -6, 50, 3];
const nums = [5];
const k = 1;
// const k = 2;

console.log(findMaxAverage(nums, k))