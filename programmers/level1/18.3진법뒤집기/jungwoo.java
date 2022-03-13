import java.util.*;
import java.lang.*;

class Solution {
    public int solution(int n) {

        String temp = Integer.toString(n, 3);
        String reverse = "";

        // for(int i = temp.length() - 1; i >= 0; i--) {
        //     reverse = reverse + temp.charAt(i);
        // }
        temp = new StringBuilder(temp).reverse().toString();

        return Integer.parseInt(temp, 3);
    }
}