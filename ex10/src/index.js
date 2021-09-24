function mySplice(arr1, arr2, n){
    if(n==1) {
        arr2.splice(1, 0, arr1[arr1.length - 1]);
        arr2.splice(2, 0, arr1[arr1.length - 2]);
        if(arr1[0] == 1){
            arr2.splice(3, 0, arr1[0]);
        }
    } else {
        arr2.splice(2, 0, arr1[arr1.length - 1]);
        arr2.splice(3, 0, arr1[arr1.length - 2]);
        if(arr1[0] == 1){
            arr2.splice(4, 0, arr1[0]);
        }
    }
    return arr2;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;