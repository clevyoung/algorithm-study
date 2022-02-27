import java.util.*;
class Solution {
    public int solution(int[][] sizes) {
        int max = 0;
        int min = 0;
        for(int i = 0; i < sizes.length; i++){
            int big = 0;
            int small = 0;

            big = sizes[i][0];
            small = sizes[i][1];

            if(big < small){
                int temp = big;
                big = small;
                small = temp;
            }

            if(big > max){
                max = big;
            }
            if(small > min){
                min = small;
            }
        }

        System.out.println(max * min);
        return max * min;
    }
}