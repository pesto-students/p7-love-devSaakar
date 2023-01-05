console.log('Sort 0,1,2');

// ! Time Complexity: O(N)
// ! Auxiliary Space: O(1)

function sortZeroOneTwo(arr){
    let countZero = 0; 
    let countOne = 0;
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]===0){
            countZero++;
        }else if(arr[i]===1){
            countOne++;
        }
    }
    for(i = 0 ; i<arr.length;i++){
        if(countZero){
            arr[i] = 0;
            countZero--;
        }
        else if(countOne){
            arr[i] = 1;
            countOne--;
        }else{
            arr[i] = 2;
        }
    } 
    console.log('Result    -> ', arr)
    return arr;
}


sortZeroOneTwo([0,0,1,1,0,0,2,0,1,2,2,0,1,1]);
