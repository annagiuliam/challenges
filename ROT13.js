function rot13(str) {

  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  return str.split('').map((char, i) => {
    if (char.match(/[a-zA-Z]/)) {
      const alphaIndex = alpha.indexOf(char.toLowerCase());
      const newIdx = (alphaIndex + 13) % alpha.length;
      let newChar = alpha[newIdx];
      if (char.match(/[A-Z]/)) {
        newChar = newChar.toUpperCase();
      }
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

console.log(rot13('EBG13 rknzcyr.'))
