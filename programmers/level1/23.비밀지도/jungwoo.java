class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];

        for(int i = 0; i < arr1.length; i++){
            answer[i] =
                    String.format("%0" + n + "d", Long.parseLong(Integer.toBinaryString(arr1[i] | arr2[i])))
                            .replaceAll("1", "#").replaceAll("0", " ");
        }
        return answer;
    }
}