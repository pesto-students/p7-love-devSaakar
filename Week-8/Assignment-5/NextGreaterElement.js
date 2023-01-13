// ! Solution using Array 

// ! TC - O(N^2)
// ! SC - O(N)

// function nextGreaterElement(arr) {
//   let length = arr.length;
//   let result = [];
//   for (let i = length - 1; i >= 0; i--) {
//     let current = arr[i];
//     if (current < arr[i + 1]) {
//       result[i] = arr[i + 1];
//     } else {
//       let j = i + 1;
//       while (j < length) {
//         if (current < result[j]) {
//           result[i] = result[j];
//           break;
//         }
//         j++;
//       }
//       if (j === length) {
//         result[i] = -1;
//       }
//     }
//   }
//   console.log("result :>> ", result);
//   return result;
// }

// ! Solution using Stack

// ! TC - O(N)
// ! SC - O(N)

// function nextGreaterElement(arr) {
//   let length = arr.length;
//   if (length == 1) {
//     return [-1];
//   }
//   let result = [];
//   let greaterStack = [];
//   for (let i = length - 1; i >= 0; i--) {
//     while (arr[i] > greaterStack.at(-1)) {
//       greaterStack.pop();
//     }
//     result[i] = greaterStack.at(-1) ? greaterStack.at(-1) : -1;
//     greaterStack.push(arr[i]);
//   }
//   console.log("result :>> ", result);
//   return result;
// }


function nextGreaterElement(arr) {
    // ! Solution using only Array
    // ! TC - O(N)
    // ! SC - O(N)
    
  let length = arr.length;
  let result = [];
  let greaterStack = [];
  for (let i = length - 1; i >= 0; i--) {
    let stackLength = greaterStack.length;
    while (arr[i] >= greaterStack[stackLength - 1]) {
      greaterStack.pop();
      stackLength--;
    }
    result[i] = greaterStack[stackLength - 1]? greaterStack[stackLength - 1]: -1;
    greaterStack.push(arr[i]);
  }
  console.log('result :>> ', result);
  return result;
}

nextGreaterElement([4]);
nextGreaterElement([6, 8, 0, 1, 3]);
nextGreaterElement([1, 3, 2, 4, 3]);
