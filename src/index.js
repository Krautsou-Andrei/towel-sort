// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let array = [];

    matrix.forEach((element, index) => {
        if (index % 2 === 0) {
            array.push(...element);
        } else {
            element.reverse();
            array.push(...element);
        }
    });

    return array;
};
