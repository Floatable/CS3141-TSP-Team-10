class VigenereCipher {
    constructor(key) {
        this.key = key.toUpperCase();
    }

    encode(message) {
        return this._process(message, true);
    }

    decode(message) {
        return this._process(message, false);
    }

    _process(message, encode = true) {
        let result = "";
        let keyIndex = 0;
        let keyLength = this.key.length;

        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            if (char.match(/[A-Z]/i)) {
                let isUpperCase = char === char.toUpperCase();
                char = char.toUpperCase();
                let shift = this.key[keyIndex % keyLength].charCodeAt(0) - 65;
                let base = char.charCodeAt(0) - 65;
                let newChar = encode 
                    ? String.fromCharCode(((base + shift) % 26) + 65)
                    : String.fromCharCode(((base - shift + 26) % 26) + 65);
                result += isUpperCase ? newChar : newChar.toLowerCase();
                keyIndex++;
            } else {
                result += char;
            }
        }
        return result;
    }
}

// Example usage:
const cipher = new VigenereCipher("BABBAGE");
console.log(cipher.encode("HAPPY BIRTHDAY")); // Expected: "PHXXF MQYBPKNJ"
console.log(cipher.decode("PHXXF MQYBPKNJ")); // Expected: "HAPPY BIRTHDAY"
