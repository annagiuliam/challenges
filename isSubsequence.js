/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;
  let i = 0, j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      if (i === s.length) return true;
    };
    j++;
    console.log(i, j);
  }
  return false;
};
const s = "abc";
const t = "ahbgdcdef";

// const s = "axc"
// const t = "ahbgdc"

console.log(isSubsequence(s, t));