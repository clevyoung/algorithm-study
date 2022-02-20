class Solution {
public int solution(int left, int right) {
        int answer = 0;
        
        for(int i = left; i <= right; i++) {
            // 짝수
            if(getDivisorNum(i) % 2 == 0) 
                answer += i;
            else // 홀수
                answer -= i;
        }

        return answer;
    }

    // 약수의 개수 구하기
    private int getDivisorNum(int num) {
        int cnt = 0;

        for(int i = 1; i <= num; i++) {
            if(num % i == 0) cnt++;
        }
        return cnt;
    }
}
