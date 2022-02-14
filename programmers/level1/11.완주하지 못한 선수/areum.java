class Solution {
    public String solution(String[] participants, String[] completion) {
        Map<String, Integer> map = new HashMap<>();
        String ret = "";
        
        for(String participant : participants) {
            map.put(participant, map.getOrDefault(participant, 0)+1);
       }
        
        for(String comp : completion) {
            map.put(comp, map.get(comp)-1);
        }
        
        for(String key : map.keySet()) {
            if(map.get(key) > 0)
                ret = key;
        }
      
        return ret;
    }
}
