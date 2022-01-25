function solution(A) {
  var ans = 0;

  for (let i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }

  return ans;
}
