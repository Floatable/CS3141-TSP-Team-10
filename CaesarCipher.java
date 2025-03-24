public class CaesarCipher {
    
    static String encode (String input, int key) {
        
        //initialize the output
        String output = "";
        input = input.toLowerCase();
        //convert the input string to an array of chars
        char[] inputList = input.toCharArray();

        //iterate through the array of chars
        for (int i = 0; i < inputList.length; i++) {

            //find the current character as an int
            int updatedChar = (int)inputList[i] + key;
            //loop back around to "a" if the loop surpasses the end of the alphabet
            if (updatedChar >= 123) {
                updatedChar -= 26;
            }
            //add a space when necessary
            if (inputList[i] == 32) {
                output += " ";
            }
            //otherwise, update the output
            else {
                output += (char)updatedChar;
            }

        }

        return output;
    
    }

    static String decode (String input, int key) {

        //initialize the output
        String output = "";
        input = input.toLowerCase();
        //convert the input string to an array of chars
        char[] inputList = input.toCharArray();

        //iterate through the array of chars
        for (int i = 0; i < inputList.length; i++) {

            //find the current character as an int
            int updatedChar = (int)inputList[i] - key;
            //loop back around to "a" if the loop surpasses the end of the alphabet
            if (updatedChar <= 96) {
                updatedChar += 26;
            }

            //add a space when necessary
            if (inputList[i] == 32) {
                output += " ";
            }
            //otherwise, update the output
            else {
                output += (char)updatedChar;
            }

        }

        return output;

    }

    public static void main(String[] args) {
        
        String result = encode("the worst cipher", 7);
        System.out.println(result);

        result = decode("aol dvyza jpwoly", 7);
        System.out.println(result);

    }

}
