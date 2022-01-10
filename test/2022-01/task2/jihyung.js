// 배열에 있는 숫자중 가장 작은 숫자를 리턴해야 합니다.
// initial_solution에서 잘못된 부분을 찾아 고치시오
function initial_solution(A) {
  var ans = 0;
  for (i = 1; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}

function solution(A) {
  var ans = 0;
  // 반복문에서 처음 초기값을 0으로 해야 첫번째 값부터 확인할 수 있습니다.
  // 문제의 경우 첫번째 값이 가장 작은 값이면 두번째로 작은 수를 리턴하게 됩니다.
  for (i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}

console.log(solution([-100, -1, -2, -3, 4, 5, 6, 7, 8, 10]));
// solution([-1, 1, -2, 2]);
