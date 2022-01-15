function getDigitSum(num) {
  let sum = 0;
  let n = num;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

function solution(A) {
  let max = -1;
  for (let x = 0; x < A.length; x++) {
    for (let y = x + 1; y < A.length; y++) {
      if (getDigitSum(A[x]) === getDigitSum(A[y])) {
        max = Math.max(A[x] + A[y], max);
      }
    }
  }

  return max;
}

console.log(solution([42, 33, 60]));
console.log(solution([51, 71, 17, 42]));
console.log(solution([51, 32, 43]));
