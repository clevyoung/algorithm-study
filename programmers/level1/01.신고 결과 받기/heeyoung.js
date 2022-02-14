function solution(id_list, report, k) {
  let answer = [];

  return answer;
}

// function solution(id_list, report, k) {
//   let obj = {};

//   for (let x of id_list) {
//     let innerObj = {};
//     for (let y of report) {
//       const arr = y.split(' ');
//       if (arr[0] === x) {
//         if (!innerObj.hasOwnProperty(arr[1])) {
//           innerObj[arr[1]] = 1;
//         }
//       }
//     }

//     for (let z in innerObj) {
//       if (obj.hasOwnProperty(z)) {
//         obj[z] += innerObj[z];
//       } else {
//         obj[z] = 1;
//       }
//     }
//   }

//   console.log(obj);

//   // let answer = id_list.map((item) => {
//   //     return obj.hasOwnProperty(item) ? obj[item] : 0
//   // })

//   return answer;
// }

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
