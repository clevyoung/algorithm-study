class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
       String[] answer = new String[n];

        for(int i = 0; i < n; i++) {
            // or 연산하여 10진수 -> 2진수 변환
            String strBinary = Integer.toBinaryString(arr1[i] | arr2[i]);

            while (strBinary.length() != n) {
                strBinary = "0" + strBinary;
            }
            answer[i] = (strBinary.replaceAll("1", "#")).replaceAll("0", " ");
        }

        return answer;
    }
}
