function solution(record) {
  const answer = [];
  const mapObj = {};

  for (let x of record) {
    const info = x.split(' ');

    if (info[0] === 'Enter') {
      answer.push(`${info[1]}|님이 들어왔습니다.`);
      mapObj[info[1]] = info[2];
    }

    if (info[0] === 'Leave') {
      answer.push(`${info[1]}|님이 나갔습니다.`);
    }

    if (info[0] === 'Change') {
      mapObj[info[1]] = info[2];
    }
  }

  for (let [index, item] of answer.entries()) {
    const uid = item.split('|')[0];
    answer[index] = mapObj[uid] + item.split('|')[1];
  }
  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uiD1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
