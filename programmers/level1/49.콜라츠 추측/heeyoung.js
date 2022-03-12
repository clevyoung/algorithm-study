function solution(num) {
  let n = num;
  let count = 0;

  if (n === 1) return 0;

  while (true) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }

    count++;
    if (n === 1) return count;
    if (count === 500) return -1;
  }
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(1));
console.log(solution(626331));
