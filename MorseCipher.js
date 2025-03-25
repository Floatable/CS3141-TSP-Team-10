const MORSE_CODE = Object.assign({}, ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ".split('').map((char, i) => ({
    [char]: [
        '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---',
        '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-',
        '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---',
        '...--', '....-', '.....', '-....', '--...', '---..', '----.', '/'
    ][i]
})));

const REVERSE_MORSE_CODE = Object.fromEntries(Object.entries(MORSE_CODE).map(([k, v]) => [v, k]));

function textToMorse(text) {
    return text.toUpperCase().split('').map(char => MORSE_CODE[char] || '').join(' ');
}

function morseToText(morse) {
    return morse.split(' ').map(code => REVERSE_MORSE_CODE[code] || '').join('');
}

// Example usage
const text = "Hello World";
const morse = textToMorse(text);
console.log("Text to Morse:", morse);
console.log("Morse to Text:", morseToText(morse));
