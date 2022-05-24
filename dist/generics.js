"use strict";
const names = ["loijlk", 2, 89, "dkjh", true];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Michael" }, { age: 42 });
console.log(mergedObject);
function mergeThis(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject2 = mergeThis({ name: "Michael" }, { age: 42 });
console.log(mergedObject2.name);
const mergedObject3 = mergeThis({ name: "Michael", hobbies: ['Kayaking', 'Taekwondo', '3D printing'] }, { age: 42 });
console.log(mergedObject3.hobbies);
function mergeThisToo(objA, objB) {
    return Object.assign(objA, objB);
}
//# sourceMappingURL=generics.js.map