// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.

// 최대공약수 함수
const gcf = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcf(b, a % b);
};
// 최소공배수 함수
const lcm = (a, b) => (a * b) / gcf(a, b);

function solution(n, m) {
  return [gcf(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
