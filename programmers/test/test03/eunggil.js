function solution(movie) {
	let answer = [];
  let sorts = [];

	const movies = movie.reduce((prev, curr) => {
		prev[curr] = ++prev[curr] || 1;
		return prev;
	}, {});

	for (let name in movies) {
		sorts.push([name, movies[name]]);
	}

	sorts.sort(function (a, b) {
		if (a[1] === b[1]) {
			return -1;
		}
		return b[1] - a[1];
	});

  sorts.forEach((item) => {
    answer.push(item[0])
  })

	return answer
}

console.log(solution(['spy', 'ray', 'spy', 'room', 'once', 'ray', 'spy', 'once'])) // solved;
