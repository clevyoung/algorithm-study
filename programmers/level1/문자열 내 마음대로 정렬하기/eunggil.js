function solution(strings, n) {
  let answer = [];
  let arr = []
  
  for(let i=0; i < strings.length; i++){
      arr.push(strings[i][n] + strings[i])
  }
  
  arr.sort()
  
  for(let i=0; i < arr.length; i++){
      answer.push(arr[i].substring(1))
  }
  
  
  return answer;
}

solution(["sun", "bed", "car"],1) // solved
solution(["abce", "abcd", "cdx"],2) // solved