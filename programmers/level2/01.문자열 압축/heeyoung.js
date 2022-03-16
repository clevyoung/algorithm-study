function solution(str) {
  if (str.length === 1) return 1;
  let count = 1;
  let minChunk = Number.MAX_SAFE_INTEGER;

  while (count <= Math.floor(str.length / 2)) {
    const compressionArr = [];
    let p1 = 0; // 문자열이 같은지 확인하기 위한 기준점
    let last = ''; // 마지막 문자열

    for (let i = 0; i < str.length; i += count) {
      // 이전 문자열이 현재 문자열과 같을 때
      if (
        str.slice(p1, p1 + count) === str.slice(i, i + count) &&
        last === str.slice(i, i + count)
      ) {
        if (
          compressionArr[compressionArr.length - 1].slice(-count) ===
          str.slice(i, i + count)
        ) {
          compressionArr.pop();
        }

        compressionArr.push((i + count - p1) / count + str.slice(i, i + count));
      } else {
        compressionArr.push(str.slice(i, i + count));
        p1 = i;
      }

      last = str.slice(i, i + count);
    }

    const compressionStrLength = compressionArr.join('').length;

    count++;

    minChunk = Math.min(minChunk, compressionStrLength);
  }

  return minChunk;
}

console.log(solution('a'));
