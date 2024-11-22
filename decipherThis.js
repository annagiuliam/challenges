//  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//  - the second and the last letter is switched (e.g. Hello becomes Holle)
//  - the first letter is replaced by its character code (e.g. H becomes 72)

// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces

// Examples:
//  - '72olle 103doo 100ya' --> 'Hello good day'
//  - '82yade 115te 103o'   --> 'Ready set go'

class DecipherThis {
  static decipherThis(input) {
   return input.split(' ').map(word => {
    const regex = /\d+/
    const charCode = word.match(regex);
    const newChar = String.fromCharCode(charCode)
    let newWord = word.replace(charCode, newChar)

    const second = newWord[1];
    const last = newWord[newWord.length -1];


    let charArr =  newWord.split('')
    charArr[1] = last;
     charArr[charArr.length - 1] = second;

     return charArr.join('');

    }).join(' ');

  }

  static runTests() {
    let currentTest = 0;
        /*1*/ this.runTest("72olle 103doo 100ya", "Hello good day", ++currentTest);
        /*2*/ this.runTest("82yade 115te 103o", "Ready set go", ++currentTest);
        /*3*/ this.runTest("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o", "Have a go at this and see how you do", ++currentTest);
        /*4*/ this.runTest("65 119esi 111dl 111lw 108dvei 105n 97n 111ka", "A wise old owl lived in an oak", ++currentTest);
        /*5*/ this.runTest("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp", "The more he saw the less he spoke", ++currentTest);
        /*6*/ this.runTest("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare", "The less he spoke the more he heard", ++currentTest);
        /*7*/ this.runTest("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri", "Why can we not all be like that wise old bird", ++currentTest);
        /*8*/ this.runTest("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple", "Thank you Piotr for all your help", ++currentTest);
  }

  static runTest(input, expected, currentTest) {
    let deciphered = this.decipherThis(input);
    if (deciphered !== expected) {
      console.log(`#${currentTest} Expected: <${expected}> but got: <${deciphered}>`);
    } else {
      console.log(`#${currentTest} Success: <${deciphered}>`);
    }
  }
}

DecipherThis.runTests();
