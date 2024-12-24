/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0;
  let str = '';
  if (chars.length === 1) return 1;
  let i = 0;
  while (i < chars.length) {
    let j = i + 1;
    let count = 1;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
      count++;
    };
    chars[index++] = chars[i];

    if (count > 1) {
      let str = count.toString();
      for (let k = 0; k < str.length; k++) {
        chars[index++] = str[k];
      }

    }
    console.log(str);
    i = j;
  };
  console.log(chars)
  return index;
};


const chars = ["a", "a", "b", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"];
// const chars = ["a", "a", "b", "b", "c", "c", "c"];
// const chars = ["a", "a", "b", "b", "c", "c", "c"];

console.log(compress(chars));