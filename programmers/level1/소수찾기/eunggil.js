function solution(n) {
  var answer = 0;
  
  const isPrime = (s) => {
      for (let i = 2; i < s; i++) {
        if (s % i === 0) {
          return false;
        }
      }
      return answer++
  } 
  
  for(let i=1; i<=n; i++){
      isPrime(i)
  }   
  
  return answer - 1;
}

solution(10,4) // solved
solution(5,3) // solved