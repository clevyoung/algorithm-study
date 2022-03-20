// 괄호 변환
function isRightBracket(bracket) {
  const stack = [];

  for (let x of bracket) {
    if (stack[stack.length - 1] === '(' && x === ')') {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}

function solution(p) {
  // 입력이 빈 문자열인 경우, 빈 문자열을 반환
  if (!p) return '';
  // 올바른 괄호 문자열인지 체크 만약 올바른 괄호 문자열일 경우 반환
  if (isRightBracket(p)) return p;

  const result = recursiveBracket(p);

  // 두 문자열 u, v로 분리
  return result;
}

function recursiveBracket(str) {
  if (!str) return '';

  let rightStr = '';
  let emptyStr = '';
  let slicedU = '';
  let slicedIndex;

  // 문자열 w를 두 균형잡힌 괄호 문자열 u, v로 분리한다.

  const uObj = {};

  for (let i = 0; i < str.length; i++) {
    uObj[str[i]] = uObj[str[i]] + 1 || 1;

    if (uObj['('] === uObj[')']) {
      slicedIndex = i;
      break;
    }
  }

  const u = str.slice(0, slicedIndex + 1);
  const v = str.slice(slicedIndex + 1, str.length);

  let slicedUArr = [];

  if (isRightBracket(u)) {
    rightStr += u;
    rightStr += recursiveBracket(v);
  } else {
    emptyStr += '(';
    emptyStr += recursiveBracket(v);

    emptyStr += ')';

    slicedU = u.slice(1);
    slicedU = slicedU.slice(0, -1);
    slicedUArr = slicedU.split('');

    for (let i = 0; i < slicedUArr.length; i++) {
      if (slicedUArr[i] === '(') {
        slicedUArr[i] = ')';
      } else {
        slicedUArr[i] = '(';
      }
    }
  }

  return rightStr + emptyStr + slicedUArr.join('');
}

console.log(solution('()))((()'));
