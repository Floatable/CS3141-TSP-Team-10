class CaesarCipher {

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