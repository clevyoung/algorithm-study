function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let stuArr = [];
  let resArr = [];
  
  for (i in lost){
      if(reserve.includes(lost[i])){
          answer++
      } else {
          stuArr.push(lost[i] - 1)
      }
  }
  
  for(i in stuArr) { 
      if (reserve.includes(stuArr[i])) {
          answer ++
      } else{
          resArr.push(stuArr[i] + 1)
      }
  }
  
  for(i in resArr) { 
      if (reserve.includes(resArr[i])) {
          answer ++
      } 
  }    
  
  return answer;
}

solution(5,[2, 4],[1, 3, 5]) // solved
solution(5,[2, 4],[3]) // solved
solution(3,[3],[1]) // solved