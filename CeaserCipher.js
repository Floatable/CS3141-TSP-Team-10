class CeaserCipher {
    constructor(code, key) {
        this.cipherTable = Array.from({ length: 26 }, () => Array(26).fill(''));
        this.keyList = key.split('');

        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                this.cipherTable[i][j] = String.fromCharCode('A'.charCodeAt(0) + (i + j) % 26);
            }
        }
    }

    encode(message) {
        let result = '';
        for (let l = 0; l < message.length; l++) {
            const messageChar = message[l];
            const keyIndex = l % this.keyList.length;
            const keyChar = this.keyList[keyIndex];
            if ('A' <= messageChar && messageChar <= 'Z') {
                result += this.cipherTable[keyChar.charCodeAt(0) - 'A'.charCodeAt(0)][messageChar.charCodeAt(0) - 'A'.charCodeAt(0)];
            } else {
                result += messageChar;
            }
        }
        return result;
    }

    decode(message) {
        let result = '';
        const messageList = message.split('');
        let currKeyChar = 0;

        for (const currChar of messageList) {
            if (currChar === ' ') {
                result += ' ';
                currKeyChar++;
                continue;
            }

            for (let row = 0; row < 26; row++) {
                if (currChar === this.cipherTable[row][this.keyList[currKeyChar] - 'A']) {
                    result += String.fromCharCode('A'.charCodeAt(0) + row);
                    currKeyChar = (currKeyChar + 1) % this.keyList.length;
                    break;
                }
            }
        }
        return result.toUpperCase();
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter starting code character (e.g., 'H'): ", (code) => {
    readline.question("Enter the key: ", (key) => {
        const cipher = new Prog5cipher(code, key.toUpperCase());

        readline.question("Enter your message: ", (message) => {
            if (message.charAt(0).toUpperCase() === message.charAt(0)) {
                console.log("Encoded message: " + cipher.encode(message.toUpperCase()));
            } else {
                console.log("Decoded message: " + cipher.decode(message));
            }
            readline.close();
        });
    });
});

