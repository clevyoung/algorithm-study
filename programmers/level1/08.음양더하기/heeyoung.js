function solution(absolutes, signs) {
  let answer = 0;

  absolutes.forEach((element, index) => {
    if (signs[index] === true) {
      answer += absolutes[index];
    } else {
      answer += absolutes[index] * -1;
    }
  });
  return answer;
}
