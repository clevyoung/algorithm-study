function solution(participant, completion) {
	let answer = '';

	participant.filter((item, index) => {
		if (!completion.includes(item)) {
			return (answer = item);
		}
		if (participant.indexOf(item) !== index) {
			return (answer = item);
		}
	});

	return answer;
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']); // solved
solution(
	['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
	['josipa', 'filipa', 'marina', 'nikola'],
); // solved
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']); // solved
