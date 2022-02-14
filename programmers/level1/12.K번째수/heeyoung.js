function solution(array, commands) {
  let answer = [];

  for (let x of commands) {
    const start = x[0] - 1;
    const end = x[1];
    const slicedArray = array.slice(start, end);
    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[x[2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
