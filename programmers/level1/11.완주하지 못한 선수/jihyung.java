import java.util.HashMap;
class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String,Integer> completion_participant_count = new HashMap<>();
        for(String runner :completion){
            if(completion_participant_count.get(runner) == null){
                completion_participant_count.put(runner, 1);
            }else{
                completion_participant_count.put(runner, completion_participant_count.get(runner) +1);
            }
        }
        
        String answer = "";
        for(String runner :participant){
            if(completion_participant_count.containsKey(runner) && completion_participant_count.get(runner) >= 1){
                completion_participant_count.put(runner, completion_participant_count.get(runner) -1);
            }else{
                answer = runner;
            }
        }
        
        return answer;
    }
}