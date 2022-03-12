// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

function sum(num) {
  return (num * (num + 1)) / 2;
}

function solution(a, b) {
  if (a === b) return a;

  return sum(Math.max(a, b)) - sum(Math.min(a, b) - 1);
}

console.log(solution(3, 5));
