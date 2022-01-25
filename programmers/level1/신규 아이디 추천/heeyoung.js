function solution(new_id) {
  let answer = new_id.toLowerCase();

  answer = answer
    .toLowerCase()
    .replace(/[^\w\.\-]/g, '')
    .replace(/[\.]{2,}/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '');

  if (!answer) answer = 'a';

  if (answer.length >= 16) {
    answer = answer.substring(0, 15).replace(/\.$/, '');
  }

  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}
