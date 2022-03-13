// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.

function solution(s) {
  const reg = /^\d+$/;
  return (s.length === 4 || s.length === 6) && reg.test(s);
}

console.log(solution('a234'));
console.log(solution('1234'));
