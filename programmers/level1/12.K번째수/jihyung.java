import java.util.Arrays;
import java.util.ArrayList;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        ArrayList<Integer> answer = new ArrayList<>();
        for(int[] command :commands){
            int start = command[0] -1;
            int end = command[1];
            int idx = command[2] -1;
            
           int[] sliced_array = Arrays.copyOfRange(array, start, end);
            Arrays.sort(sliced_array);
            answer.add(sliced_array[idx]);
        }
        int[] casted_answer = new int[answer.size()];
        for(int i=0; i<answer.size(); i++){
            casted_answer[i] = answer.get(i);
        }
        return casted_answer;
    }
}