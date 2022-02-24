function solution(N, stages) {
  const stageResult = {};
  const failureRate = {};

  // 참가자 수
  let participant = stages.length;

  // 각 스테이지의 빈도수를 구해서 저장한다.
  for (let x of stages) {
    stageResult[x] = stageResult[x] + 1 || 1;
  }

  // 실패율을 구한다.
  for (let i = 0; i < N; i++) {
    participant = participant - (stageResult[i] || 0);

    const result = stageResult[i + 1] || 0;

    failureRate[i + 1] = result / participant;
  }

  // 실패율을 정렬한다.
  const answer = Object.entries(failureRate)
    .sort((a, b) => b[1] - a[1])
    .map((el) => Number(el[0]));

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
