// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
function reverseWords(s) {
  s.split(' ').map(seg => {
    console.log(!!seg);
  });
  return s.split(' ').filter(segment => !!segment).reverse().join(' ');
}
;
console.log(reverseWords('  hello world  '));