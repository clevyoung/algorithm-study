function solution(numbers, hand) {
	const array = numbers.join().replace(0, 11).split(',').map(Number);
	let answer = '';
	let left = 10;
	let right = 12;

	const numFc = (hands, idx) => {
		if (idx === hands) {
			return 0;
		}
		if ([2, 5, 8, 11].includes(hands)) {
			return 1;
		}
		return Math.abs(idx - hands);
	};

	array.forEach((i) => {
		if (i % 3 === 1) {
			answer += 'L';
			left = i;
		}
		if (i % 3 === 0 && i !== 0) {
			answer += 'R';
			right = i;
		}
		if ([2, 5, 8, 11].includes(i)) {
			let handL = numFc(left, i);
			let handR = numFc(right, i);

			if (handL === handR) {
				if (hand === 'left') {
					answer += 'L';
					left = i;
				}
				if (hand === 'right') {
					answer += 'R';
					right = i;
				}
			} else if (handL > handR) {
				answer += 'R';
				right = i;
			} else {
				answer += 'L';
				left = i;
			}
		}
	});

	return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // clear
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'); // fail
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'); // clear
