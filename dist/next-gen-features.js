"use strict";
const userNameConstant = "Max";
if (true) {
    var ageVar = 34;
}
console.log(ageVar);
let age = 30;
{
    let thisDontWork = 23;
}
const addFunction = (a, b) => {
    return a + b;
};
console.log(addFunction(4, 5));
const addShortFunction = (a, b) => a + b;
console.log(addShortFunction(4, 5));
const addDefaultParam = (a, b = 1) => a + b;
console.log(addDefaultParam(5));
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const person1 = {
    fullName: "Max",
    personAge: 30,
};
const copiedPerson = Object.assign({}, person1);
const addRest = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return (currentResult += currentValue);
    }, 0);
};
const addedNumbers = addRest(5, 7, 89, 2, 45, 90);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { fullName, personAge: theAge } = person1;
console.log(theAge);
//# sourceMappingURL=next-gen-features.js.map