import java.util.Scanner;

public class VigenereCipher {

	char initialTableCharacter;
	String keyword;
	
	char [ ] keyList; //The user's keyword as an array of chars
	char [ ][ ] cipherTable; //The table formed by the user's initial character


	String encode( String message ) {

		//Convert message to array of chars
		char[] messageList = message.toCharArray();
		//Initializes result
		String result = "";
		
		//Sets an int variables to be the current character being changed
		int currentChar = 0;
		int currentKeyChar = 0;

		//Loop through rows searching for current message character
		for (int row = 0; row <= 25; row++) {
	
			//Resets the currentKeyChar when it gets too long
            if (currentKeyChar == keyList.length) {
                currentKeyChar = 0;
			}

            System.out.println("current char: " + currentChar + ", row + 65: " + (row + 65));

            //Checks for spaces
            if (messageList[currentChar] == (char)32) {
			    result = result + " ";
				
				if (messageList[currentChar + 1] == (char)65) {
					row = -1;
				}
				else {
					row = 0;
				}
				
				currentChar++;
				currentKeyChar++;
			}

			//Compares currentChar to col to find ciphertext
			else if (messageList[currentChar] == (char)(row + 65)) {

				for (int col = 0; col <= 25; col++) {

					//adds char to result and resets loops
					if (((int)keyList[currentKeyChar] - 65) == col) {

                        System.out.println("resulting char: " + cipherTable[row][col]);
						result = result + cipherTable[row][col];
						
						row = -1;
						col = 0;
						break;

					}

				}

				//progresses the string
				currentChar++;
				currentKeyChar++;
			
			}

			//Breaks the loop when the end of messageList[] is reached
			if (currentChar >= messageList.length) {
				break;
			}	

		}
		result.toUpperCase();
		return result;
	}

	String decode( String message ) {
	
		//Convert message to array of chars
                char[] messageList = message.toCharArray();
                //Initializes result
                String result = "";
		
		int currentKeyChar = 0;
		int tempChar = 0;

		//Looping through each character in messageList[]
		for (char currentChar : messageList) {

			for (int row = 0; row <= 25; row++) {

				//Resets the currentKeyChar when it gets too long
                if (currentKeyChar == keyList.length) {
                    currentKeyChar = 0;
                }

                System.out.println("Row: " + row + ", keyList[currentKeyChar] - 65: " + (int)keyList[currentKeyChar]);

				if (currentChar == (char)32) {
					result = result + " ";
					row = 0;
					currentChar++;
					currentKeyChar++;
				}
                
				else if (currentChar == cipherTable[row][(int)keyList[currentKeyChar] - 65]) {
					
					tempChar = row + 65;

					if (tempChar > 90) {
						tempChar = tempChar - 26;
					}
						
					result = result + (char)tempChar;
					
					row = 0;
					currentKeyChar++;

					break;	
				
				}
					
			}

		}

		result.toUpperCase();
		return result;
	
	}

	public VigenereCipher( char initialTableCharacter, String keyword ) {

        initialTableCharacter = Character.toUpperCase(initialTableCharacter);
		this.initialTableCharacter = initialTableCharacter;
		this.keyword = keyword.toUpperCase();

		char[][] cipherTable = new char[26][26];
		char[] keyList = keyword.toCharArray();

		int offset = 0;

		//Cycles through array rows
		for (int row = 0; row <= 25; row++) {	
			//Cycles through array columns
            for (int col = 0; col <= 25; col++) {

				//Creates a variable that to be put into the array
                int charBeingSet = (col + offset + (int)initialTableCharacter);

				//Resets to 'A' when loop reaches 'Z'
                while ((charBeingSet) > 90) {
					charBeingSet = charBeingSet - 26;
				}

				//Sets the current spot in the array to the correct letter
				cipherTable[row][col] = (char)charBeingSet;

            }
			//Increments the starting char in each row by one
            offset++;
        }

		//sets instance variables to cipher table and the key array
		this.cipherTable = cipherTable;
		this.keyList = keyList;

	}
 
	/**
	* Runs the constructor to create the cipherTable[][] array, and 
	* calls the encrypt/decrypt methods
	* @param args
	*/
	public static void main( String[ ] args ) {
		
		try (Scanner scan = new Scanner(System.in)) {
            System.out.println("\nInput a message:");
            String message = scan.nextLine();
            System.out.println("Next, input a keyword:");
            String keyword = scan.nextLine();
            System.out.println("Finally, choose a starting character: [A-Z]");
            String temp = scan.nextLine();
            char character = temp.charAt(0);

            VigenereCipher self = new VigenereCipher (character, keyword);

            System.out.println("Encoded message: " + self.encode(message));
            //System.out.println("Decoded message: " + self.decode(message));
        }

		System.out.println();
	
	}
} // END OF CLASS --------------------------------------------------------
