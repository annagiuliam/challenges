function solution(str) {
  const strArr = str.match(/.{1,2}/g) || [];

  return strArr.map(substr => substr.length === 2 ? substr : substr + '_');
}

console.log(solution(''))