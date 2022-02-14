function solution(answers) {
  let max = Number.MIN_SAFE_INTEGER;
  let counts = [];
  let answer = [];

  [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ].forEach((arr) => {
    let count = 0;
    for (let [index, number] of answers.entries()) {
      let round = Math.floor(index / arr.length);

      if (number === arr[index - round * arr.length]) {
        count++;
      }

      if (index > arr.length) {
        if (index === arr.length * round) {
          round++;
        }
      }
    }

    if (count > max) {
      max = count;
    }

    counts.push(count);
  });

  for (let [i, x] of counts.entries()) {
    if (x === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 2, 3, 4, 5]));

// [1,3,2,4,2]
