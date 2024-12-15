//  https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

var reverseVowels = function (s) {

  const regex = /[aeiou]/ig;
  let vowels = s.match(regex);

  return s.replace(regex, el => vowels.pop())

};

const s = "IceCreAm";

console.log(reverseVowels(s))