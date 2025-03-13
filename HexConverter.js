function hexEncode(input) {
    let value = 0;
    //make sure input is valid
    try {
        value = parseInt(input);
    } catch (e) {
        return "Incorrect input, please try again";
    }
    let hexValue = "";
    let tempVal;
    let tempStr = "";

    //iteratively divide the input by 16
    while (value !== 0) {
        tempVal = value;
        value = Math.floor(value / 16);
        //decide if the hex digit added should be a 0-9 or a-f
        if ((value * 16) === tempVal) {
            tempStr = "0";
        } else {
            let remainder = tempVal % 16;
            if (remainder < 10) {
                tempStr = remainder.toString();
            } else {
                tempStr = String.fromCharCode(87 + remainder);
            }
        }
        //add the hex digit to the beginning of the string
        tempStr += hexValue;
        hexValue = tempStr;
    }

    return hexValue;
}

function hexDecode(input) {
    let baseTenValue = 0;
    let place = 0;

    //iterate through the hex string backwards
    for (let i = input.length - 1; i >= 0; i--) {
        //store the hex digit being examined
        let currentDigit = input.charAt(i);
        //make sure the hex digit is a 0-9 or a-f
        if (currentDigit < "0" || (currentDigit > "9" && currentDigit < "a") || currentDigit > "f") {
            return "Incorrect input, please try again";
        } else {
            let digitValue = 0;
            if (currentDigit < "a") {
                digitValue = parseInt(currentDigit);
            } else {
                digitValue = currentDigit.charCodeAt(0) - 87;
            }
            baseTenValue += digitValue * Math.pow(16, place);
        }
        //increment the hex digit being examined
        place++;
    }

    try {
        return String(baseTenValue);
    } catch (e) {
        return "Incorrect input, please try again";
    }
}