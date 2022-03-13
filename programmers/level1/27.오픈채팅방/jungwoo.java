import java.util.*;

class Solution {
    public String[] solution(String[] record) {

        HashMap<String, String> tmap = new HashMap<>();
        List<String> str = new ArrayList<>();

        for (String s : record) {

            String[] strArr = s.split(" ");
            String type = strArr[0];
            String id = strArr[1];

            if(!type.equals("Leave")){
                String name = strArr[2];
                tmap.put(id, name);
            }
        }

        for (String s : record) {
            String[] strArr = s.split(" ");
            String type = strArr[0];
            String id = strArr[1];
            String text = "";
            if(type.equals("Leave")){
                text = tmap.get(id)+ "님이 나갔습니다.";
                str.add(text);
            }else if(type.equals("Enter")){
                text = tmap.get(id)+ "님이 들어왔습니다.";
                str.add(text);
            }
        }

        return str.stream().toArray(String[]::new);
    }
}