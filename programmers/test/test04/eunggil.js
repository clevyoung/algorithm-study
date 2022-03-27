function solution(sentence) {
	let answer = '';
	const str = sentence
		.toLowerCase()
		.replace(/[^a-z]/gi, '')
		.split('');
	const alphabet = [];

	for (let i = 97; i <= 122; i++) {
		alphabet.push(String.fromCharCode(i));
	}

	answer = alphabet.filter((item) => !str.includes(item));

	return answer.join('');
}

solution(
	'His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.',
); // solved
