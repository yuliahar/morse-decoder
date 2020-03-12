const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let SPACE = '**********';
let DOT = '10';
let DASH = '11';

function decode(expr) {
    let result = '';
    expr.match(/.{1,10}/g).forEach( letter => {
        if (letter == SPACE) {
            result += ' ';
        } else {
            let str = '';
            letter.match(/.{1,2}/g).forEach( char => {
                if (char == DOT) {
                    str += '.';
                }
                if (char == DASH)
                    str += '-';
            });
            result += MORSE_TABLE[str];
        }
    });
    return result;
}

module.exports = {
    decode
}