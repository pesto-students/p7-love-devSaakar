// ! Max Sum Contiguous Subarray

function maxContiguousSum(arr){
    if(arr.length ===0){
        return 'No Element Present'
    }
    let maxSum = -Infinity;
    for(let i =0; i<arr.length;i++){
        let currentIndexSum = 0;
        for(let j=i;j<arr.length;j++){
            currentIndexSum+=arr[j];
            if(maxSum<currentIndexSum){
                maxSum = currentIndexSum;
            }
        }
    }
    return maxSum;
}

console.log('maxContiguousSum( ) =>', maxContiguousSum([1, 2, 3, 4,-10]))
console.log('maxContiguousSum( ) =>', maxContiguousSum([-2, 1, -3, 4, -1, 2, 1, -5, 4] ))