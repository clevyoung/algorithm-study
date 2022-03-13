// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  let index = 1;
  let sum = 0;

  while (index <= n) {
    if (n % index === 0) {
      sum += index;
    }
    index++;
  }

  return sum;
}

console.log(solution(12));
