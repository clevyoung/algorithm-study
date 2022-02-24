function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  // 배열을 오름차순으로 정렬한다.
  d.sort((a, b) => a - b);

  for (let x of d) {
    sum += x;

    // 순서대로 숫자의 합을 더하면서
    if (sum <= budget) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

//12345

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
