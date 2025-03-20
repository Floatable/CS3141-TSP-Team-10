class CeasarCipher {
    // INSTANCE VARIABLES
    keyList; 
    cipherTable;

    // METHODS
    /**
     * Encodes a message based on the cipher table and key.
     * @param message The message to encode.
     * @return The encoded message.
     */
    encode(message) {
        let result = "";
        // Loop through each character in the message
        for (let l = 0; l < message.length; l++) {
            const messageChar = message.charAt(l);
            const keyIndex = l % this.keyList.length;
            const keyChar = this.keyList[keyIndex];
            if ('A' <= messageChar && messageChar <= 'Z') {
                // Encode based on the cipher table
                result += this.cipherTable[keyChar.charCodeAt(0) - 'A'.charCodeAt(0)][messageChar.charCodeAt(0) - 'A'.charCodeAt(0)];
            } else {
                result += messageChar;
            }
        }
        console.log(result);
        return result;
    }

    /**
     * Decodes a message based on the cipher table and key.
     * @param message The message to decode.
     * @return The decoded message.
     */
    decode(message) {
        const messageList = message.split('');  
        let result = "";
        let currKeyChar = 0;
        let tChar = 0;
        for (const currChar of messageList) {
            for (let row = 0; row <= 25; row++) { 
                if (currKeyChar === this.keyList.length) {
                    currKeyChar = 0;
                }
                if (currChar === ' ') {
                    result += " ";
                    row = 0;
                    currKeyChar++;
                } else if (currChar === this.cipherTable[row][this.keyList[currKeyChar].charCodeAt(0) - 65]) {
                    tChar = row + 65;
                    if (tChar > 90) {
                        tChar -= 26;
                    }
                    result += String.fromCharCode(tChar);
                    row = 0;
                    currKeyChar++;
                    break;
                }
            }
        }
        result = result.toUpperCase();
        console.log(result);
        return result;
    }

    // CONSTRUCTORS
    /**
     * Constructor to initialize the cipher table based on the key and starting code.
     * @param code The starting code character for ciphering.
     * @param key The key used to initialize the cipher.
     */
    constructor(code, key) {
        this.cipherTable = Array.from({ length: 26 }, () => Array(26).fill('')); // Create a 26x26 cipher table
        this.keyList = key.split(''); // Convert key to a char array
        code -= 2; // Adjust code for starting point
        for (let i = 0; i < this.cipherTable.length; i++) {
            let k = 65; // Start from 'A'
            code += 1;
            for (let j = 0; j < this.cipherTable[i].length; j++) {
                if (k <= 90 && k >= 64) {
                    k++;
                    if (code < 90) {
                        code++;
                    } else {
                        code -= 25;
                    }
                    this.cipherTable[i][j] = String.fromCharCode(code);
                }
            }   
        }
    }

    // MAIN (TEST) Method
    /**
     * Main method to test encoding and decoding.
     * @param args Command line arguments (not used here).
     */
    static main() {
        // Testing only works if using VM argument -ea
        const self = new CeasarCipher('H'.charCodeAt(0), "BABBAGE"); // Use CeasarCipher here
        console.log(" ");
        console.assert("PHXXF MQYBPKNJ" === self.encode("HAPPY BIRTHDAY"));
        console.log(" ");    
        console.assert("HAPPY BIRTHDAY" === self.decode("PHXXF MQYBPKNJ"));
    }
}

// Call the main method to run the tests
CeasarCipher.main();

