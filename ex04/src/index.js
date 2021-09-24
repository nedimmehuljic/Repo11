var monitorListArray = ["Apple", "Peach", "Barry"];

function myMonitorFunction(arr) {
    // Only change code below this line
    var newMonitorsList = [...arr];
    var monitorList = [];

    for (let i = 0; i < monitorListArray.length; i++){
        monitorList[i] = [monitorListArray[i], i+ 1];
    }
    return monitorList;
    // Only change code above this line

}

console.log(myMonitorFunction(monitorListArray));
module.exports = myMonitorFunction;