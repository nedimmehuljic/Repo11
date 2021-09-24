function splitArrayInGroups (arr, n) {
    const result = [];
    while (arr.length > 0){
        const res = arr.splice(0, n);
        result.push(res);
    }
    return result;
}
console.log(splitArrayInGroups(["a", "b", "c", "d", 2]));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;