class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n - lost.length;
        int lostSize = lost.length;

        for(int i = 0; i < lost.length; i++) {
            for (int j = 0; j < reserve.length; j++) {
                if (lost[i] == reserve[j]) {
                    answer++;
                    lost[i] = reserve[j] = -1;
                    break;
                }
            }
        }


        for(int lostNum : lost) {
            for(int i = 0; i < reserve.length; i++) {
                if(reserve[i] == lostNum - 1 || reserve[i] == lostNum+1) {
                    answer++;
                    reserve[i] = -1;
                    break;
                }
            }
        }

        return answer;
    }
}
