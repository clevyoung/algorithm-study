function solution(n) {
	let answer = 0;
	const count = n.toString(2).match(/1/g).length;

	for (let i = 1; i < n; i++) {
		const length = i.toString(2).match(/1/g).length;
		if (count === length) {
			answer++;
		}
	}

	return answer;
}

solution(9); // solved
