function solution(absolutes, signs) {
	let answer = 0;

	absolutes.forEach((item, i) => {
		answer += signs[i] ? item : -item;
	});

	return answer;
}

solution([4, 7, 12], [true, false, true]); // clear
