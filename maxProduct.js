/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = 0;
  if (!nums.length) return 0;
  if (nums.length === 1) {
    result = nums[0]
  }

  for (let i = 0; i < nums.length - 1; i++) {
    let prod = nums[i] * nums[i + 1];
    console.log('multi', 0 * 2);
    if (prod > result) {
      result = prod;
    }
  }
  return result;
};

// const nums = [2, 3, -2, 4];
// const nums = [-2, 0, -1];
const nums = [0, 2];
console.log(maxProduct(nums));