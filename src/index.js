module.exports = function solveSudoku(matrix) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {
                let impos = [];
                for (let index = 0; index < 9; index++) {
                    impos.push(matrix[row][index]);
                    impos.push(matrix[index][col]);
                }
                for (
                    let smCubeRow = Math.floor(row / 3) * 3;
                    smCubeRow < Math.floor(row / 3) * 3 + 3;
                    smCubeRow++
                ) {
                    for (
                        let smCubeCol = Math.floor(col / 3) * 3;
                        smCubeCol < Math.floor(col / 3) * 3 + 3;
                        smCubeCol++
                    ) {
                        impos.push(matrix[smCubeRow][smCubeCol]);
                    }
                }
                const pos = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
                    item => impos.indexOf(item) == -1
                );
                for (let posInd = 0; posInd < pos.length; posInd++) {
                    matrix[row][col] = pos[posInd];
                    const isSolved = solveSudoku(matrix);
                    if (isSolved) return isSolved;
                }
                matrix[row][col] = 0;
                return false;
            }
        }
    }
    return matrix;
};