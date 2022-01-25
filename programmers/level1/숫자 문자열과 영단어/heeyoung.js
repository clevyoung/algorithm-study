function solution(s) {
  const voca = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = '';
  let text = '';

  for (let x of s) {
    // 숫자가 아닌 경우
    if (isNaN(x)) {
      text += x;
      if (text.length >= 3 && voca.hasOwnProperty(text)) {
        answer += voca[text];
        text = '';
      }
      // 숫자인 경우
    } else {
      answer += x;
    }
  }

  return parseInt(answer, 10);
}
