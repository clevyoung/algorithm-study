function solution(nums) {
	let answer = 0;

	const isPrime = (n) => {
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return answer++;
	};

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				isPrime(nums[i] + nums[j] + nums[k]);
			}
		}
	}

	return answer;
}

solution([1, 2, 3, 4]); // clear
