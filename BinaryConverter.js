function encode(baseTenValue) {
    let value = 0;
    //make sure input is valid
    try {
        value = parseInt(baseTenValue);
    } catch (e) {
        return "Incorrect input, please try again";
    }
    let binaryValue = "";
    let tempVal;
    let tempStr = "";

    //iteratively divide the input by 2
    while (value !== 0) {
        tempVal = value;
        value = Math.floor(value / 2);
        //decide if the bit added should be a 1 or a zero
        if ((value * 2) === tempVal) {
            tempStr = "0";
        } else {
            tempStr = "1";
        }
        //add the bit to the beginning of the string
        tempStr += binaryValue;
        binaryValue = tempStr;
    }

    return binaryValue;
}

function decode(binaryValue) {
    let baseTenValue = 0;
    let place = 0;

    //iterate through the binary string backwards
    for (let i = binaryValue.length - 1; i >= 0; i--) {
        //store the bit being examined
        let currentBit = binaryValue.charAt(i);
        //make sure the bit is a 0 or 1
        if (currentBit !== "0" && currentBit !== "1") {
            return "Incorrect input, please try again";
        } else if (currentBit === "1") {
            baseTenValue += Math.pow(2, place);
        }
        //increment the bit being examined
        place++;
    }

    try {
        return String(baseTenValue);
    } catch (e) {
        return "Incorrect input, please try again";
    }
}

// Main function to simulate the Java main method
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("input int (0-255)\ninput: ", (baseTenValue) => {
        const binaryOutput = encode(baseTenValue);
        console.log("binary encoding: " + binaryOutput);

        readline.question("input binary value\ninput: ", (binaryValue) => {
            const baseTenOutput = decode(binaryValue);
            console.log("binary decoding: " + baseTenOutput);
            readline.close();
        });
    });
}

main();

