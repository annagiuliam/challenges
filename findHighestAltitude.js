// https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const prefixSum = Array(gain.length).fill(0);
  prefixSum[0] = gain[0];

  for (let i = 1; i < gain.length; i++) {
    prefixSum[i] = gain[i] + prefixSum[i - 1];
  };

  return Math.max(...prefixSum);
};

const gain = [-5, 1, 5, 0, -7];

// const gain = [3, 1, 5, 2, 4];

console.log(largestAltitude(gain));