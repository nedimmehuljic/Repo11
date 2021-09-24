function largestNumFromArr (arr) {
    var maxNumArray = [];


for (i=0; i<arr.length; i++){
    var max = 0;
    for (j=0; j<arr[i].length; j++){
        if(arr[i][j] > max){
            max = arr[i][j];
        }
    }
    maxNumArray.push(max);
}
    return maxNumArray;
}
console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [100, 1001, 857, 1]]));
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [35, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestNumFromArr([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [73, 3, 17, 10]]));
module.exports = largestNumFromArr;