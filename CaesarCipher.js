class CaesarCipher {

    static printDesc(input, output, key) {
        //initialize the description and add some text to it
        let desc = "Cipher table based on the key of " + key + ":\n";
        desc += "Plain:  ";
        //print out the normal alphabet
        for (let i = 65; i < 91; i++) {
            desc += String.fromCharCode(i) + " ";
        }
        desc += "\nCipher: ";
        //print out the cipher alphabet
        for (let count = 0; count < 26; count++) {
            let val = (count + 65 + key);
            if (val > 90) {
                val -= 26;
            }
            desc += String.fromCharCode(val) + " ";
        }
        //convert the input and output to arrays of chars
        let inputChars = Array.from(input);
        let outputChars = Array.from(output);
        //runs if input is 0 characters long
        if (inputChars.length === 0) {
            return desc;
        }
        //runs if input is 1 character long
        else if (inputChars.length === 1) {
            desc += "\n" + inputChars[0] + "\n↓\n" + outputChars[0]; 
            return desc;
        }
        //runs if input is 2 characters long
        else if (inputChars.length === 2) {
            desc += "\n" + inputChars[0] + "  " + inputChars[1] + "\n↓, ↓\n" + outputChars[0] + "  " + outputChars[1];
            return desc;
        }
        //runs if input is 3 characters long
        else {
            desc += "\n" + inputChars[0] + "  " + inputChars[1] + "  " + inputChars[2]  + "\n↓, ↓, ↓";
            if (inputChars.length > 3) {
                desc += "...";
            }
            desc += "\n" + outputChars[0] + "  " + outputChars[1] + "  " + outputChars[2];
            return desc;
        }
    }

    static encode(input, key) {
        //initialize the output
        let output = "";
        input = input.toLowerCase();
        //convert the input string to an array of chars
        const inputList = Array.from(input);

        //iterate through the array of chars
        for (let i = 0; i < inputList.length; i++) {
            //find the current character as an int
            let updatedChar = inputList[i].charCodeAt(0) + key;
            //loop back around to "a" if the loop surpasses the end of the alphabet
            if (updatedChar >= 123) {
                updatedChar -= 26;
            }
            //add a space when necessary
            if (inputList[i] === ' ') {
                output += " ";
            }
            //otherwise, update the output
            else {
                output += String.fromCharCode(updatedChar);
            }
        }

        return output;
    }

    static decode(input, key) {
        //initialize the output
        let output = "";
        input = input.toLowerCase();
        //convert the input string to an array of chars
        const inputList = Array.from(input);

        //iterate through the array of chars
        for (let i = 0; i < inputList.length; i++) {
            //find the current character as an int
            let updatedChar = inputList[i].charCodeAt(0) - key;
            //loop back around to "a" if the loop surpasses the end of the alphabet
            if (updatedChar <= 96) {
                updatedChar += 26;
            }

            //add a space when necessary
            if (inputList[i] === ' ') {
                output += " ";
            }
            //otherwise, update the output
            else {
                output += String.fromCharCode(updatedChar);
            }
        }

        return output;
    }

    static main() {
        let result = this.encode("the worst cipher", 7);
        console.log(result);

        result = this.decode("aol dvyza jpwoly", 7);
        console.log(result);
    }
}

CaesarCipher.main();