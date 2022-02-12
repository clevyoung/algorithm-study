class Solution {
    public int[] solution(int N, int[] stages) {
        int[] intArr = new int[N];
        Map<Integer, Double> map = new HashMap<>();
        double total = stages.length;
        int[] answer = new int[N];

        // 스테이지 성공한 사람
        for(int i = 0; i < total; i++) {
            if(stages[i] == N+1) continue;

            intArr[stages[i]-1]++;
        }

       // 실패율 계산
        for(int i = 0; i < intArr.length; i++) {
            map.put(i+1, Double.valueOf(intArr[i] / total));
            total -= intArr[i];
        }


        // value순으로 정렬
        for(int i = 0; i < N; i++) {
            double max = -1;
            int maxKey = 0;

            for(Integer key : map.keySet()) {
                if(max < map.get(key)) {
                    max = map.get(key);
                    maxKey = key;
                }
            }

            answer[i] = maxKey;
            map.remove(maxKey);
        }

        return answer;
    }
}
