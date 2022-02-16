function solution(left, right) {
  let obj = {}
  var answer = 0;
  for (let i = left; i<=right; i++) {
      obj[i] = []
      for(let j = 1; j <= i; j++) {
          if(i % j === 0) {
              obj[i].push(j)
          }
      }
      if (obj[i].length % 2 === 0) {
          answer += i;
      } else {
          answer -= i;
      }  
  }
  return answer;
}

solution(13,17) // solved
solution(24,27) // solved

