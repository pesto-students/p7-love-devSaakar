console.log('Pair With Given Difference');

// ! Time Complexity: O(N)
// ! Auxiliary Space: O(N)

function pairDifferenceExist(A,B){
    let result = new Set(A);
    if(B===0){
        if(result.size < A.length){
            return 1;
        }else{
            return 0;
        }
    }
    for(let element of A){
        if(result.has(element+B) || result.has(element-B)){
            return 1;
        }
    }
    return 0;
}

console.log('Ans :>> ', pairDifferenceExist([5, 10, 3, 2, 50, 80],78));
console.log('Ans :>> ', pairDifferenceExist([-10,20],30));