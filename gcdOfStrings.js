// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
function gcd(a, b) {
  if (a == 0)
    return b;
  return gcd(b % a, a);
};

var gcdOfStrings = function (str1, str2) {

  if ((str1 + str2) !== (str2 + str1)) {
    return '';
  };

  let len1 = str1.length;
  let len2 = str2.length;
  const length = gcd(len1, len2);
  return str1.slice(0, length);
};



// const str1 = "LEET";
// const str2 = "ABAB";
const str1 = "ABABAB";
const str2 = "ABAB";

console.log(gcdOfStrings(str1, str2));