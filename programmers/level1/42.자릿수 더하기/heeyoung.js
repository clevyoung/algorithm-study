// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

function solution(n) {
  let num = n;
  let sum = 0;

  while (num > 0) {
    let remain = num % 10;
    num = Math.floor(num / 10);

    sum += remain;
  }

  return sum;
}

console.log(solution(123));
