// 파일명 영문대소문자, 숫자, 공백, 마침표, 빼기 부호
// 파일명은 영문자로 시작하며, 숫자 하나 이상 포함
// HEAD - 문자로만, 최소 한 글자 이상
// NUMBER - 최소 한글자에서 다섯 글자 앞쪽에 0이 올 수 있음 0부터  99999사이 숫자
// TaIL 숫자가 다시 나타날 수있고 아무 글자도 없을 수 있음

const getHead = (file) => {
  let head = '';
  for (let x of file) {
    if (Number.isNaN(Number(x))) {
      head += x;
    } else {
      break;
    }
  }

  return head.toUpperCase();
};

const getNumber = (file) => {
  let number = '';
  for (let x of file) {
    if (!Number.isNaN(Number(x))) {
      number += x;
    } else {
      if (number) break;
    }
  }

  return parseInt(number, 10);
};

function solution(files) {
  files.sort((a, b) => {
    let headA = getHead(a);
    let headB = getHead(b);

    let numberA = getNumber(a);
    let numberB = getNumber(b);

    if (headA > headB) return 1;
    if (headA < headB) return -1;
    if (headA === headB) {
      if (numberA > numberB) return 1;
      if (numberA < numberB) return -1;
      if (numberA === numberB) return 0;
    }
  });
  return files;
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
    'img2.png',
  ])
);

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ])
);

console.log(solution(['muzi1.txt', 'MUZI1.txt', 'muzi001.txt', 'muzi1.TXT']));
console.log(solution(['ver-10.zip', 'foo010bar020.zip', 'ver-09.zip']));
