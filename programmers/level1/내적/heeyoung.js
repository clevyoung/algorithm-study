function solution(a, b) {
  let answer = 0;

  for (let [index, element] of a.entries()) {
    answer += element * b[index];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
