import java.util.*;

class Solution {
    public int solution(int[] nums) {
        // int array to Integer array
        Integer[] arr = Arrays.stream(nums).boxed().toArray(Integer[]::new);
        // array to Set
        Set<Integer> set = new HashSet<Integer>(Arrays.asList(arr));
        // N/2
        int answer = nums.length / 2;

        if(set.size() < answer)
            answer = set.size();

        return answer;
    }
}
