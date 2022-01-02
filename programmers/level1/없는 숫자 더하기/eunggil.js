function solution(numbers) {
	let answer = 0;

	numbers.forEach((num) => {
		answer += num;
	});
	return 45 - answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // clear
solution([5, 8, 4, 0, 6, 7, 9]); // clear
