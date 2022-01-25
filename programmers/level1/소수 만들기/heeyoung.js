function isPrime(num) {
  let start = 2;

  while (num > start) {
    if (num % start === 0) {
      return false;
    }
    start++;
  }

  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let x = j + 1; x < nums.length; x++) {
        const sum = nums[i] + nums[j] + nums[x];

        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
