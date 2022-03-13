// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.

function solution(arr) {
  let newArr = [];

  for (let [index, element] of arr.entries()) {
    if (element !== arr[index - 1]) {
      newArr.push(element);
    }
  }

  return newArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
