import java.util.*;

class Solution {
    public int solution(int[][] sizes) {
        int maxW = 0;
        int maxH = 0;

        for(int i = 0; i < sizes.length; i++) {
            // 가로가 짧고 세로가 긴 길이가 되도록 정렬
            Arrays.sort(sizes[i]);
            
            maxW = Math.max(maxW, sizes[i][0]);
            maxH = Math.max(maxH, sizes[i][1]);
        }

        return maxW*maxH;
    }
}
