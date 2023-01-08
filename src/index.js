const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  let endInd = 10;

  while (endInd <= expr.length) {
    let letter = expr.slice(endInd - 10, endInd);
    let symb = '';

    for (let i = 8; i >= 0; i -= 2) {
      let couple = letter.slice(i, i + 2);
      symb = couple === '11' ? '-' + symb : couple === '10' ? '.' + symb : symb;
    }

    result += symb === '' ? ' ' : MORSE_TABLE[symb];
    endInd += 10;
  }

  return result;
}

module.exports = {
  decode
}