function solution(S) {
  let collection = [];

  for (let i = 0; i < S.length; i++) {
    let newS = S;

    newS = newS.replace(S[i], '');

    collection.push(newS);
  }

  collection.sort();

  return collection[0];
}

console.log(solution('codility'));
console.log(solution('hot'));
console.log(solution('aaaa'));
