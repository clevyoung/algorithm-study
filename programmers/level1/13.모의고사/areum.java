class Solution {
    public int[] solution(int[] answers) {
        int[] a = {1,2,3,4,5};
        int[] b = {2,1,2,3,2,4,2,5};
        int[] c = {3,3,1,1,2,2,4,4,5,5};
        int[] cnt = {0, 0, 0};

       for(int i = 0; i < answers.length; i++) {
           if(a[i%a.length] == answers[i]) cnt[0]++;
           if(b[i%b.length] == answers[i]) cnt[1]++;
           if(c[i%c.length] == answers[i]) cnt[2]++;
       }

        int max = Math.max(Math.max(cnt[0], cnt[1]), cnt[2]);
        List<Integer> list = new ArrayList<>();

        for(int i = 0; i < cnt.length; i++) {
            if(cnt[i] == max) list.add(i+1);
        }
        Collections.sort(list);

        return   list.stream().mapToInt(i->i).toArray();
    }
}
