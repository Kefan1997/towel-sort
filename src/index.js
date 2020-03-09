module.exports = function towelSort(matrix) {
    let newArray = [];
    if (!matrix || matrix.length === 0) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            newArray = newArray.concat(matrix[i]);
            console.log("matrix", matrix[i]);
        } else {
           newArray = newArray.concat(matrix[i].reverse());
            console.log("matrix", matrix[i]);
        }
    }
    return newArray;
    }
    

