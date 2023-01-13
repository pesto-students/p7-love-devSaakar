console.log('closest3Sum');

// ! Time Complexity: O(N^3)
// ! Auxiliary Space: O(1)

// function closest3Sum(arr,s){
//     const len = arr.length;
//     let closeSum = Infinity;
//     for(let i =0;i<len;i++){
//         for(let j =i+1;j<len;j++){
//             for(let k =j+1;k<len;k++){
//                 if(Math.abs(closeSum - s) > Math.abs(arr[i]+arr[j]+arr[k] - s)){
//                     closeSum = arr[i]+arr[j]+arr[k];
//                 }
//             }
//         }
//     }
//     console.log('closeSum :>> ', closeSum);
//     return closeSum;
// }

// ! Time Complexity: O(N^2)
// ! Auxiliary Space: O(1)

function closest3Sum(arr,k){
    arr.sort((a,b)=>a-b);
    const len = arr.length;
    let threeSum = Infinity;
    for(let i=0;i<len-2;i++){
        let start = i+1;
        let end = len-1;
        while(start < end){
            let sum = arr[i]+arr[start]+arr[end];
            if(sum === k){
                return sum;
            }
            if( Math.abs(threeSum-k) > Math.abs(sum-k)){
                threeSum = sum;
            }
            if(sum < k){
                start++;
            }else{
                end--;
            }
        }
    }
    return threeSum;
}

// function closest3Sum(arr,k){
//     arr.sort((a,b)=>a-b);
//     const len = arr.length;
//     let threeSum = Infinity;
//     for(let i=0;i<len-2;i++){
//         let start = i+1;
//         let end = len-1;
//         while(start < end){
//             let sum = arr[i]+arr[start]+arr[end];
//             if(sum === k){
//                 return sum;
//             }
//             if( Math.abs(threeSum-k) > Math.abs(sum-k)){
//                 threeSum = sum;
//             }
//             if(sum < k){
//                 if(sum-arr[start]+arr[end-1]<k && start!=end-1){
//                     start=end-1;
//                 }else{
//                 start++;
//                 }
//             }else{
//                 if(sum-arr[end]+arr[start+1]>k && end!=start+1){
//                     end=start+1;
//                 }else{
//                 end--;
//                 }
//             }
//         }
//     }
//     return threeSum;
// }

console.log(closest3Sum([4,0,5,-5,3,3,0,-4,-5],-2));
console.log(closest3Sum([833,736,953,-584,-448,207,128,-445,126,248,871,860,333,-899,463,488,-50,-331,903,575,265,162,-733,648,678,549,579,-172,-897,562,-503,-508,858,259,-347,-162,-505,-694,300,-40,-147,383,-221,-28,-699,36,-229,960,317,-585,879,406,2,409,-393,-934,67,71,-312,787,161,514,865,60,555,843,-725,-966,-352,862,821,803,-835,-635,476,-704,-78,393,212,767,-833,543,923,-993,274,-839,389,447,741,999,-87,599,-349,-515,-553,-14,-421,-294,-204,-713,497,168,337,-345,-948,145,625,901,34,-306,-546,-536,332,-467,-729,229,-170,-915,407,450,159,-385,163,-420,58,869,308,-494,367,-33,205,-823,-869,478,-238,-375,352,113,-741,-970,-990,802,-173,-977,464,-801,-408,-77,694,-58,-796,-599,-918,643,-651,-555,864,-274,534,211,-910,815,-102,24,-461,-146],-7111));
console.log(closest3Sum([-1 , 2, 1, -4],1));
console.log(closest3Sum([1, 2, 3, 4, -5],10));
console.log(closest3Sum([13,252,-87,-431,-148,387,-290,572,-311,-721,222,673,538,919,483,-128,-518,7,-36,-840,233,-184,-541,522,-162,127,-935,-397,761,903,-217,543,906,-503,-826,-342,599,-726,960,-235,436,-91,-511,-793,-658,-143,-524,-609,-728,-734,273,-19,-10,630,-294,-453,149,-581,-405,984,154,-968,623,-631,384,-825,308,779,-7,617,221,394,151,-282,472,332,-5,-509,611,-116,113,672,-497,-182,307,-592,925,766,-62,237,-8,789,318,-314,-792,-632,-781,375,939,-304,-149,544,-742,663,484,802,616,501,-269,-458,-763,-950,-390,-816,683,-219,381,478,-129,602,-931,128,502,508,-565,-243,-695,-943,-987,-692,346,-13,-225,-740,-441,-112,658,855,-531,542,839,795,-664,404,-844,-164,-709,167,953,-941,-848,211,-75,792,-208,569,-647,-714,-76,-603,-852,-665,-897,-627,123,-177,-35,-519,-241,-711,-74,420,-2,-101,715,708,256,-307,466,-602,-636,990,857,70,590,-4,610,-151,196,-981,385,-689,-617,827,360,-959,-289,620,933,-522,597,-667,-882,524,181,-854,275,-600,453,-942,134],-2805));