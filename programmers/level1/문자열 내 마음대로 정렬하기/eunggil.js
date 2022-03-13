function solution(strings, n) {
  let answer = [];
  let arr = []
  
  for(i in strings){
      arr.push(strings[i][n] + strings[i])
  }

  arr.sort()
  
  for(i in arr){
      answer.push(arr[i].substring(1))
  }

  return answer;
}

solution(["sun", "bed", "car"],1) // solved
solution(["abce", "abcd", "cdx"],2) // solved