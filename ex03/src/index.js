var myPetsArray = ["Bird", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
    myNewPets.push("Bird", "Fish");
    myNewPets.pop("Fish");

    firstPet = myNewPets[0];
    lastPet = myNewPets[myNewPets.length - 1];

    return myNewPets;
    // Only change code above this line

}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;