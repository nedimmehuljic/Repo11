var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function multiplyArrayFunction (myarray){
    var product;
    var sum = 0;
    var arr;

    total = myarray.map(item => item.reduce((a, b) => a + b));
    sum = total.reduce((a, b) => a+b);

    product1 = myarray.map(item => item.reduce((a, b) => a * b));
    product = product1.reduce((a, b) => a * b);

    arr = [product, sum];

    return arr;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));

module.exports = multiplyArrayFunction;