function solution(sizes) {
  const arr = [...sizes];
  const widthArr = [];
  const heightArr = [];

  for (let x of arr) {
    x.sort((a, b) => a - b);
  }

  for (let x of arr) {
    widthArr.push(x[0]);
    heightArr.push(x[1]);
  }

  const widthMax = Math.max(...widthArr);
  const heightMax = Math.max(...heightArr);
  return widthMax * heightMax;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);

// 4 14
// 6 19
// 6 16
// 7 18
// 7 11
