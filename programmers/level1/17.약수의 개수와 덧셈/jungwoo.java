import java.util.*;
import java.lang.System;

class Solution {
    public int solution(int left, int right) {
        int answer = 0;
        for(int i = left; i <= right; i++){
            int count = getCount(i);

            if(getOdd(count)){
                answer += i;
            }else {
                answer -= i;
            }
        }
        return answer;
    }

    boolean getOdd(int num){
        if(num % 2 == 0){
            return true;
        }else {
            return false;
        }
    }

    int getCount(int num) {
        int count = 0;
        for (int i = 1; i * i <= num; i++) {
            if (i * i == num) count++;
            else if (num % i == 0) count += 2;
        }
        return count;
    }
}