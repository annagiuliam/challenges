// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

// You are given two strings word1 and word2.Merge the strings by adding letters in alternating order, starting with word1.If a string is longer than the other, append the additional letters onto the end of the merged string.

var mergeAlternately = function (word1, word2) {
  let mergedString = '';

  for (let i = 0; i < word1.length; i++) {
    mergedString += word1[i];
    if (word2[i]) {
      mergedString += word2[i];
    }
  };

  if (word2.length > word1.length) {
    mergedString += word2.slice(word1.length);
  }

  return mergedString;
};

const word1 = "ab"
const word2 = "pqrs"

console.log(mergeAlternately(word1, word2));