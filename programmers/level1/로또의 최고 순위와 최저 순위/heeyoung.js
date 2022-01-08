function solution(lottos, win_nums) {
  let obj = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let lottosMap = {};

  for (let x of lottos) {
    if (x !== 0) {
      lottosMap[x] = x;
    }
  }

  let winCount = 0;

  for (let x of win_nums) {
    if (lottosMap.hasOwnProperty(x)) {
      winCount++;
    }
  }

  const zeroCount = 6 - Object.keys(lottosMap).length;

  if (winCount === 6) return [1, 1];

  const max = obj[winCount + zeroCount];
  const min = obj[winCount];

  return [max, min];
}
