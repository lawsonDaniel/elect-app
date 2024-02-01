let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]]
function trax(mat){
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let inMat = Array.from({length: rowLen}, ()=>Array(colLen))
  for(let i=0; i<rowLen; i++){
    for (let j = 0; j < colLen; j++) {
     inMat[j][i] = matrix[i][j]
    }
  }
  return inMat
}

console.log(trax(matrix))