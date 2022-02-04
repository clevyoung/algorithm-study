function solution(a, b) {
	let answer = 0;

	a.forEach((item, i) => {
		answer += item * b[i];
	});

	return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // clear
