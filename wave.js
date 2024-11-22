
function wave(str) {
  const newArr = [];
  str.split('').forEach((char, i) => {
    if (/\w/.test(char)) {
      newArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1));
    }
  });
  return newArr;
}

let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];




