function solution(new_id) {
	let answer = new_id
		.toLowerCase()
		.replace(/[^\w-_.]/g, '')
		.replace(/\.{2,}/g, '.')
		.replace(/^\.|\.$/g, '');

	if (!answer) answer = 'a';

	if (answer.length >= 16) {
		answer = answer.substr(0, 15).replace(/\.$/, '');
	}

	while (answer.length < 3) {
		answer = answer.concat(answer.substr(answer.length - 1));
	}

	return answer;
}

solution('...!@BaT#*..y.abcdefghijklm'); // clear
