import java.util.Scanner;

public class BinaryConverter {

    static String encode(String baseTenValue) {
        int value = Integer.parseInt(baseTenValue);
        String binaryValue = "";
        int tempVal;
        String tempStr = "";

        //iteratively divide the input by 2
        while (value != 0) {
            tempVal = value;
            value /= 2;
            //decide if the bit added should be a 1 or a zero
            if ((value * 2) == tempVal) {
                tempStr = "0";
            }
            else {
                tempStr = "1";
            }
            //add the bit to the beginning of the string
            tempStr += binaryValue;
            binaryValue = tempStr;
        }

        return binaryValue;
    }

    static String decode(String binaryValue) {
        int baseTenValue = 0;
        int place = 0;

        //iterate through the binary string backwards
        for (int i = binaryValue.length() - 1; i >= 0; i--) {
            //store the bit being examined
            String currentBit = binaryValue.substring(i, i + 1);
            if (currentBit.equals("1")) {
                baseTenValue += Math.pow(2, place);
            }
            //increment the bit being examined
            place++;
        }

        return String.valueOf(baseTenValue);
    }

    @SuppressWarnings("resource")
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("input int (0-255)");
        System.out.print("input: ");
        String baseTenValue = scan.nextLine();
        String binaryOutput = encode(baseTenValue);
        System.out.println("binary encoding: " + binaryOutput);

        System.out.println("input binary value");
        System.out.print("input: ");
        String binaryValue = scan.nextLine();
        String baseTenOutput = decode(binaryValue);
        System.out.println("binary decoding: " + baseTenOutput);

    }

}
