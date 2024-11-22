function deleteNth(arr, n) {
  const counter = {};
  return arr.filter(num => {
    counter[num] ? counter[num]++ : counter[num] = 1;
    // OR
    // cache[n] = (cache[n] || 0) + 1;
    return counter[num] <= n;
  })
}

console.log(deleteNth([20, 37, 20, 21, 21], 1));