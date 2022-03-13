// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg'));
