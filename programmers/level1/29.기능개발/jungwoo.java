import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = {};

        Queue<Integer> periods = new LinkedList<Integer>();

        for(int i = 0 ; i < speeds.length; i++ ){

            int value = (100 - progresses[i]) / speeds[i];

            if( (100 - progresses[i]) % speeds[i] != 0){
                value++;
            }
            System.out.println(value);
            periods.offer(value);
        }

        List<Integer> result = new ArrayList<Integer>();

        while( !periods.isEmpty() ){
            int cnt = 1;
            // poll 가장 먼저 보관한 값 꺼내고 반환
            int period = periods.poll();
            // 처음 꺼낸 배포 작업일이 다음 작업일 보다 크다면 배포 가능 갯수 플러스
            // peek 가장 먼저 보관한 값 단순 참조, 꺼내지 않음
            while( !periods.isEmpty() && period >= periods.peek()){
                periods.poll();
                cnt++;
            }

            result.add(cnt);
        }

        answer = new int[result.size()];

        for ( int i = 0 ; i < answer.length; i++ ) {
            answer[i] = result.get(i);
        }

        return answer;
    }
}