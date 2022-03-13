// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return (a > b) - (a < b);
    }

    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] > b[n]) {
      return 1;
    }
    return 0;
  });

  return strings;
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
