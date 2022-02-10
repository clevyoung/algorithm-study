class Solution {
    public String solution(int[] numbers, String hand) {
        String answer = "";
        
        // * : 10, # : 12
        int left = 10, right = 12;

        for(int num : numbers) {
            if(num == 0) num = 11;

            switch (num%3) {
                // 3, 6, 9, 12 (오른손 위치)    
                case 0:
                    answer += "R";
                    right = num;
                    break;
                // 1, 4, 7, 11 (왼손 위치)
                case 1:
                    answer += "L";
                    left = num;
                    break;
                // 가까운 손    
                case 2:
                    int leftDistance = (Math.abs(num-left))/3 + (Math.abs(num-left))%3;
                    int rightDistance = (Math.abs(num-right))/3 + (Math.abs(num-right))%3;
                    if(leftDistance==rightDistance){
                        if(hand.equals("right")){
                            answer+="R";
                            right = num;
                        }else{
                            answer+="L";
                            left = num;
                        }
                    }else if(leftDistance>rightDistance){
                        answer+="R";
                        right = num;
                    }else{
                        answer+="L";
                        left = num;
                    }
                    break;
            }
        }

        return answer;
    }
}
