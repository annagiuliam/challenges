// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  //variant with regex


  // const vowels = /[aeiou]/;
  // let currCount = 0;
  // let maxCount = 0;

  // for (let i = 0; i < k; i++) {
  //   if (vowels.has(s[i])) currCount++;
  // };

  // if (s.length === k) return currCount;
  // maxCount = currCount;

  // for (let j = k; j < s.length; j++) {
  //   if (vowels.has(s[j])) currCount++;
  //   if (vowels.has(s[j - k])) currCount--;
  //   maxCount = Math.max(currCount, maxCount);
  // }
  // return maxCount;

  // variant with Set
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currCount++;
  };

  if (s.length === k) return currCount;
  maxCount = currCount;

  for (let j = k; j < s.length; j++) {
    if (vowels.has(s[j])) currCount++;
    if (vowels.has(s[j - k])) currCount--;
    maxCount = Math.max(currCount, maxCount);
  }
  return maxCount;
};

const s = "abciiidef";
const k = 3;

console.log(maxVowels(s, k));