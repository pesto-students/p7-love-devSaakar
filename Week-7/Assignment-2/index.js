console.log(" Spiral Order Matrix II");

function printSpiral(arr) {
  let startRow = 0;
  let startCol = 0;
  let lastRow = arr.length - 1;
  let lastCol = arr[0].length - 1;
  let result = [];
  while (startRow <= lastRow || startCol <= lastCol) {
    for (let i = startCol; i <= lastCol; i++) {
      result.push(arr[startRow][i]);
    }
    for (let i = startRow + 1; i <= lastRow; i++) {
      result.push(arr[i][lastCol]);
    }
    for (let i = lastCol - 1; i >= startCol; i--) {
      result.push(arr[lastRow][i]);
    }
    for (let i = lastRow - 1; i > startRow; i--) {
      result.push(arr[i][startCol]);
    }
    startCol++;
    startRow++;
    lastCol--;
    lastRow--;
  }
  console.log("result :>> ", result);
  return result;
}

printSpiral([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
printSpiral([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
