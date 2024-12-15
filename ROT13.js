function rot13(str) {

  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  return str.split('').map((char, i) => {
    if (char.match(/[a-z]/)) {
      const alphaIndex = alpha.indexOf(char);
      const newIdx = (alphaIndex + 13) % alpha.length;
      const newChar = alpha[newIdx];
      return newChar;
    } else if (char.match(/[A-Z]/)) {
      const alphaIndex = alpha.indexOf(char.toLowerCase());
      const newIdx = (alphaIndex + 13) % alpha.length;
      const newChar = alpha[newIdx].toUpperCase();
      return newChar;
    }

    else {
      return char;
    }
  }).join('');
}

console.log(rot13('EBG13 rknzcyr.'))