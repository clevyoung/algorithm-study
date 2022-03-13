function solution(answers) {
  const answer = [];    
  const result = [0, 0, 0];
  const one = [1, 2, 3, 4, 5]
  const two = [2, 1, 2, 3, 2, 4, 2, 5]
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] 
  
  for(let i in answers){
      one[i % 5] === answers[i] && result[0]++
      two[i % 8] === answers[i] && result[1]++
      three[i % 10] === answers[i] && result[2]++
  }   

  for(let i in result){
      if(result[i] === Math.max(...result)){
          answer.push(Number(i)+1)
      }
  }

  return answer;
}

solution([1,2,3,4,5]) // solved
solution([1,3,2,4,2]) // solved