import java.util.*;
import java.util.regex.*;

class Solution {
    public int solution(String dartResult) {
         // 점수(0-10)|보너스(S,D,T)|[옵션(*,#)]
        Matcher matcher = Pattern.compile("([0-9]+)([SDT])([*#]?)").matcher(dartResult);
        List<Integer> valueList = new ArrayList<>();
        int index = 0;

        while (matcher.find()) {
            // 점수
            int value = Integer.parseInt(matcher.group(1));

            // 보너스
            switch (matcher.group(2)) {
                case "D":
                    value = (int) Math.pow(value, 2);
                    break;
                case "T":
                    value = (int) Math.pow(value, 3);
                    break;
            }

            // 옵션
            switch (matcher.group(3)) {
                case "*": // 해당 점수와 바로 전 점수 *2
                    value *= 2;
                    if(index > 0) valueList.set(index-1, valueList.get(index-1) * 2);
                    break;
                case "#": // 해당 점수 -
                    value *= -1;
                    break;
            }
            valueList.add(value);

            index++;
        }

        return valueList.stream().mapToInt(Integer::intValue).sum();
    }
}
