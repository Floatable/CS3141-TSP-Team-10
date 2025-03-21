function modInverse(a, m) {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) {
            return i;
        }
    }
    return null;
}

function encode() {
    let value = document.querySelector("#encodeInput").value;
    let output = document.querySelector("#encodeOutput");
    let a = 5, b = 8, m = 26; // Example keys, ensure 'a' is coprime with 'm'
    let encryptedText = "";

    for (let char of value) {
        if (char.match(/[a-zA-Z]/)) {
            let isUpperCase = char === char.toUpperCase();
            let x = char.toLowerCase().charCodeAt(0) - 97;
            let encryptedChar = String.fromCharCode(((a * x + b) % m) + 97);
            encryptedText += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
        } else {
            encryptedText += char;
        }
    }
    output.innerHTML = encryptedText;
    return output;
}

function decode() {
    let value = document.querySelector("#decodeInput").value;
    let output = document.querySelector("#decodeOutput");
    let a = 5, b = 8, m = 26;
    let a_inv = modInverse(a, m);
    if (a_inv === null) {
        return "Invalid key, 'a' must be coprime with 26";
    }

    let decryptedText = "";
    for (let char of value) {
        if (char.match(/[a-zA-Z]/)) {
            let isUpperCase = char === char.toUpperCase();
            let y = char.toLowerCase().charCodeAt(0) - 97;
            let decryptedChar = String.fromCharCode(((a_inv * (y - b + m)) % m) + 97);
            decryptedText += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
        } else {
            decryptedText += char;
        }
    }
    output.innerHTML = decryptedText;
    return output;
}
