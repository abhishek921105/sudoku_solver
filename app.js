const puzzel = [
    [0, 0, 2, 0, 0, 1, 6, 0, 7],
    [0, 6, 8, 7, 0, 0, 9, 0, 0],
    [1, 0, 0, 3, 6, 8, 0, 5, 4],
    [0, 0, 0, 0, 0, 3, 4, 7, 9],
    [7, 0, 4, 0, 0, 0, 0, 0, 2],
    [0, 1, 0, 0, 7, 6, 0, 0, 0],
    [0, 5, 0, 0, 3, 0, 0, 0, 0],
    [9, 2, 0, 1, 0, 0, 3, 0, 5],
    [4, 7, 3, 0, 2, 5, 8, 0, 1]
]

//y > Rows
//x v Columns
let mat = puzzel;
const tools = require('./tools');

console.log(tools.searchInRow(puzzel,0,9));