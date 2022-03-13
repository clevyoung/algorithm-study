function solution(nums) {
  let answer = 0;
  const len = nums.length / 2
  const result = [...new Set(nums)].length
  if(len >= result) {
      answer = result
  } else{
      answer = len
  }
  return answer;
}

solution([3,1,2,3]) // solved
solution([3,3,3,2,2,4]) // solved
solution([3,3,3,2,2,2]) // solved