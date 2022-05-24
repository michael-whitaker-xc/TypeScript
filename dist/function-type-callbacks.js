"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Clicked!");
});
function addThis(n1, n2) {
    return n1 + n2;
}
function printResultHere(num) {
    console.log("Result: " + num);
}
printResultHere(addThis(5, 12));
let combineValues;
combineValues = addThis;
console.log(combineValues(8, 8));
let combinedValues;
function addAndHandle(n1, n2, callbackfunction) {
    const result = n1 + n2;
    callbackfunction(result);
    let thisString = '';
}
addAndHandle(5, 2, (answer) => {
    console.log(answer);
});
addAndHandle(5, 2, (result) => {
    printResultHere(result);
});
//# sourceMappingURL=function-type-callbacks.js.map