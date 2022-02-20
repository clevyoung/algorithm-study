class Solution {
    public int solution(int n) {
        StringBuilder sb = new StringBuilder();
        int answer = 0;

        // 3진법 변환 및 뒤집기
        while (n != 0) {
            sb.append(n % 3);
            n = (n / 3);
        }

        // 3진수 -> 10진수
        answer = Integer.parseInt(String.valueOf(sb), 3);

        return answer;
    }
}
