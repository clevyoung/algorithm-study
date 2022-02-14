class Solution {
    public int solution(int[] nums) {
        int answer = 0;

        for(int i = 0; i < nums.length; i++) {
            for(int j = i+1; j < nums.length; j++) {
                for(int k = j+1; k < nums.length; k++) {
                   answer += isPrimeNum(nums[i] + nums[j] + nums[k]) ? 1 : 0;
                    
                }
            }
        }

        return answer;
    }
    
    private boolean isPrimeNum(int val) {
        boolean res = true;
        
        for(int i = 2; i < val; i++) {
            if(val%i == 0) res = false;
        }
        
        return res;
    }
}
