// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.

function solution(x) {
  let sum = 0;
  let num = x;

  while (num > 0) {
    const remain = num % 10;
    sum += remain;
    num = Math.floor(num / 10);
  }

  return x % sum === 0;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
