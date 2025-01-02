// https://leetcode.com/problems/consecutive-characters/

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let maxString = 0;
  let left = 0;
  let right;

  for (right = left + 1; right < s.length; right++) {
    console.log(s.substring(left, right));
    if (s[right] !== s[left]) {
      maxString = Math.max(maxString, right - left);
      console.log(maxString);
      left = right;
    }
  }


  return Math.max(maxString, right - left);
};

const s = "abbcccddddeeeeedcba";
console.log(maxPower(s));