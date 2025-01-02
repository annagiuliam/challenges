// https://leetcode.com/problems/number-of-matching-subsequences/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let wordObj = {};
  let counter = 0;

  words.forEach((word) => {
    if (wordObj.hasOwnProperty(word)) {
      wordObj[word] += 1;
    } else {
      wordObj[word] = 1;
    }
  });

  console.log(wordObj);
  Object.entries(wordObj).forEach(([word, value]) => {
    console.log(word, value);
    let i = 0;
    let j = 0;
    while (i < s.length && j < word.length) {
      if (s[i] === word[j]) {
        j++;
        if (j === word.length) counter += value;
      }
      i++;
    }
  });
  return counter;
};

// const s = "abcde";
// const words = ["a", "bb", "acd", "ace"];

const s = "qlhxagxdqh";
const words = ["qlhxagxdq", "qlhxagxdq", "lhyiftwtut", "yfzwraahab"];

console.log(numMatchingSubseq(s, words));