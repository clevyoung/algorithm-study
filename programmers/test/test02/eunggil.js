function solution(arrA, arrB) {
	let answer = false;
	let result = arrB.join('');

	for (let i = 1; i <= arrA.length; i++) {
		const arr = arrA;
		const pop = arrA.pop();
		arr.unshift(pop);
		if (result === arr.join('')) {
			answer = true;
		}
	}
	return answer;
}

solution([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]); // solved
