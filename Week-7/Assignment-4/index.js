console.log('Best time to buy and sell stock');

// ! O(N^2) Time Complexity

// function calculateProfit(arr){
//     let maxProfit = 0;
//     for(let i = 0;i<arr.length;i++){
//         for(let j = arr.length-1;j>i;j--){
//             if(arr[j]-arr[i]>maxProfit){
//                 maxProfit = arr[j]-arr[i];
//             }
//         }
//     }
//     console.log('maxProfit :>> ', maxProfit);
//     return maxProfit;
// }

// ! O(N) Time Complexity

function calculateProfit(arr){
    let maxProfit = 0;
    let minPrice = arr[0];
    for(let price of arr){
        minPrice = Math.min(minPrice,price);
        maxProfit = Math.max(maxProfit,price-minPrice);
    }
    console.log('maxProfit :>> ', maxProfit);
    return maxProfit;
}

calculateProfit([7,1,5,3,6,4]);
calculateProfit([7,6,4,3,1]);