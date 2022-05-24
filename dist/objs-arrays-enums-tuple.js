"use strict";
function add(n1, n2, showResult, phrase) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult, resultPhrase);
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking']
};
console.log("Person's name" + person.name);
const personWithTuple = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role[Role["AUTHOR"] = 4] = "AUTHOR";
})(Role || (Role = {}));
;
const personWithEnum = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
};
//# sourceMappingURL=objs-arrays-enums-tuple.js.map