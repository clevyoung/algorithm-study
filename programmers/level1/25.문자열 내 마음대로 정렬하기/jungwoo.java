import java.util.*;

class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = stringArraySort(strings, n);

        return answer;
    }

    String[] stringArraySort(String[] words, int index){
        for(int i = 0; i < words.length - 1; i++){
            for(int j = i+1; j < words.length; j++){
                if(words[i].charAt(index) - words[j].charAt(index) > 0){
                    String temp = words[i];
                    words[i] = words[j];
                    words[j] = temp;
                }else if(words[i].charAt(index) - words[j].charAt(index) == 0){
                    if(words[i].compareTo(words[j]) > 0){
                        String temp = words[i];
                        words[i] = words[j];
                        words[j] = temp;
                    }
                }
            }
        }
        return words;
    }
}