var temps = [
     monday = [31, 32, 19, 37],
     tesday = [29, 27, 55, 36],
     wednesday = [17, 27, 42, 46],
     thursday = [29, 52, 21, 64],
     friday = [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line
    var sum;
    for (var i = 0; i < monday.length; i++) {
        sum += parseInt (temps[i], 10);
}    
    averageDayTemp = sum / temps.length;
// Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;