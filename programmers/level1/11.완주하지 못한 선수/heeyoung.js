function solution(participant, completion) {
  let participantObj = {};
  let completionObj = {};

  for (let x of participant) {
    if (participantObj.hasOwnProperty(x)) {
      participantObj[x]++;
    } else {
      participantObj[x] = 1;
    }
  }

  for (let x of completion) {
    if (completionObj.hasOwnProperty(x)) {
      completionObj[x]++;
    } else {
      completionObj[x] = 1;
    }
  }

  for (let prop in participantObj) {
    if (!completionObj[prop] || participantObj[prop] !== completionObj[prop]) {
      return prop;
    }
  }
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
