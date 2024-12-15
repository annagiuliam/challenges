// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

function gdc(a, b) {
  console.log(a, b);
  console.log(b % a);
  if (a === 0) return b;

  return (gdc(b % a, a));
}
var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  console.log(min, max);
  return gdc(min, max);
};

const nums = [7, 5, 6, 8, 3];

console.log(findGCD(nums));