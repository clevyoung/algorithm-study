function solution(S) {
	const array = S.split('');
	let answer = '';
	let alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let arr = [];
	let reduce = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (array[i] === alphabet[j]) {
				arr.push(j);
			}
		}
	}

	arr.reduce((acc, cur, idx) => {
		reduce.push(Math.abs(cur - acc));
		return cur;
	});

	array.splice(reduce.indexOf(Math.max.apply(null, reduce)) + 1, 1);

	answer = array.join('');
	return console.log(answer);
}

solution('codility');
solution('acb');
solution('hot');
