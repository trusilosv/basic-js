module.exports = function countCats(matrix) {
    temp = 0;
    temp2 = "";

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            temp2 = matrix[i][j];
            if (temp2 == "^^") temp++;
        }

    }
    return temp;
}