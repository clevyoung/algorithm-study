class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
         Stack<Integer> basket = new Stack<Integer>();

        for (int move : moves) {
            for (int i = 0; i < board.length; i++) {
              if(board[i][move-1] == 0)
                  continue;
              else {
                  // 같은 모양 인형 쌓이는 경우
                  if (!basket.isEmpty() && board[i][move-1] == basket.peek()) {
                      answer += 2;
                      basket.pop();
                  } else {
                      System.out.println("basket : " + board[i][move-1]);
                      basket.add(board[i][move-1]);
                  }
                  // 바구니에 옮긴 후 인형 제거
                  board[i][move-1] = 0;
                  break;
              }
            }
        }
        return answer;
    }
}
