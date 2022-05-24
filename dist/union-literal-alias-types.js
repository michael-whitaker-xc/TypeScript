"use strict";
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
function combineLiteral(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combineLiteral('26', 23, "as-number");
function combinableCombine(input1, input2) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number")) {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinableAges = combinableCombine('26', 23);
//# sourceMappingURL=union-literal-alias-types.js.map