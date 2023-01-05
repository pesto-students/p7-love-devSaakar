// ! Max Sum Contiguous Subarray
// ! Time Complexity: O(N^2)
// ! Auxiliary Space: O(1)

// function maxContiguousSum(arr){
//     if(arr.length ===0){
//         return 'No Element Present'
//     }
//     let maxSum = -Infinity;
//     for(let i =0; i<arr.length;i++){
//         let currentIndexSum = 0;
//         for(let j=i;j<arr.length;j++){
//             currentIndexSum+=arr[j];
//             if(maxSum<currentIndexSum){
//                 maxSum = currentIndexSum;
//             }
//         }
//     }
//     return maxSum;
// }

// ! Kadane's Algorithm
// ! Time Complexity: O(N)
// ! Auxiliary Space: O(1)

function maxContiguousSum(arr) {
  if (arr.length === 0) {
    return "No Element Present";
  }
  let maxSum = -Infinity;
  let currentIndexSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentIndexSum += arr[i];
    if (currentIndexSum > maxSum) maxSum = currentIndexSum;
    if (currentIndexSum < 0) currentIndexSum = 0;
  }
  return maxSum;
}

console.log("maxContiguousSum( ) =>", maxContiguousSum([1, 2, 3, 4, -10]));
console.log(
  "maxContiguousSum( ) =>",
  maxContiguousSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
console.log(
  "maxContiguousSum( ) =>",
  maxContiguousSum([-2, -3, 4, -1, -2, 1, 5, -3])
);
