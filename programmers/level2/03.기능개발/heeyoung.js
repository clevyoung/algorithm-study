// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

function solution(progresses, speeds) {
  const answer = [];
  let last = Number.MIN_SAFE_INTEGER;

  for (let [index, item] of progresses.entries()) {
    const workDay = Math.ceil((100 - item) / speeds[index]);

    if (workDay <= last) {
      answer[answer.length - 1] = answer[answer.length - 1] + 1;
    } else {
      answer.push(1);
    }

    last = Math.max(last, workDay);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
