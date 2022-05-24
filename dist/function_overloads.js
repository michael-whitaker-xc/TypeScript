"use strict";
var _a;
function subtract(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result1 = subtract(6, 1);
console.log(result1);
const result2 = subtract("Max", " Thomas");
result2.split(" ");
const fetchedUserData = {
    id: 1,
    name: "Thomas",
    job: { title: "CEO", description: "My company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = "";
const storedData = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "DEFAULT";
//# sourceMappingURL=function_overloads.js.map