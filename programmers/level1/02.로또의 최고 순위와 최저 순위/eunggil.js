function solution(lottos, win_nums) {
	const answer = [];
	const length = lottos.filter((num) => win_nums.includes(num)).length;
	const zero = lottos.filter((num) => num === 0).length;

	const max = length + zero > 0 ? 7 - (length + zero) : 6;
	const min = 7 - length >= 6 ? 6 : 7 - length;

	answer.push(max, min);

	return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); // clear
