import java.util.*;

class Solution {
    public int solution(int[] d, int budget) {
       int sum = 0;
        int answer = 0;

        // 부서별 신청 금액 오름차순 정렬
        Arrays.sort(d);

        for(int val : d) {
            sum += val;
            
            // 지원금이 예산보다 클경우 더 이상 지원 못함
            if(sum > budget)
                break;

            answer++;
        }

        return answer;
    }
}
