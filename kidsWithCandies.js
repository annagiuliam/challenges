// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);

  return candies.map((candiesBag) => {
    return candiesBag + extraCandies >= max;
  });
};

const candies = [4, 2, 1, 1, 2];
const extraCandies = 1;

console.log(kidsWithCandies(candies, extraCandies));