// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }

  return true;
}

function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

console.log(solution(10));
