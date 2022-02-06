function solution(A) {
	const array = A.sort((a, b) => b - a);

	let answer = 0;
	let arr = [];
	let filter = [];
	let result = [];

	for (i in array) {
		const num = (n) => Number(String(A[i]).substr(n, 1));
		arr.push(num(0) + num(1));
		filter = arr.filter((item, index) => {
			return arr.indexOf(item) !== index;
		});
	}

	for (i in arr) {
		if (arr[i] === filter[0]) {
			result.push(array[i]);
			answer = result[0] + result[1];
		}

		if (!result.length) {
			answer = -1;
		}
	}

	return answer;
}

solution([51, 72, 17, 42]); // solved
solution([42, 33, 60]); // solved
solution([51, 32, 43]); // solved
