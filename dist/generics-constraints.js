"use strict";
const names = ["loijlk", 2, 89, "dkjh", true];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
console.log("--------------------------------");
console.log("       generic function");
console.log("--------------------------------");
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
const mergedObject3 = mergeThis({ name: "Michael", hobbies: ["Kayaking", "Taekwondo", "3D printing"] }, { age: 42 });
console.log(mergedObject3.hobbies);
console.log("--------------------------------");
console.log("          constraints");
console.log("--------------------------------");
function mergeThisToo(objA, objB) {
    return Object.assign(objA, objB);
}
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hello there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Michael" }, "name"));
console.log("--------------------------------");
console.log("        generic classes");
console.log("--------------------------------");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Michael");
textStorage.addItem("Nathan");
textStorage.removeItem("Nathan");
console.log(textStorage.getItems());
const numStorage = new DataStorage();
numStorage.addItem(23);
numStorage.addItem(4);
numStorage.addItem(789);
numStorage.addItem(35);
numStorage.addItem(64);
console.log(numStorage.getItems());
const objectStorage = new DataStorage();
objectStorage.addItem({ name: "Ford Focus" });
objectStorage.addItem({ name: "Ford Taurus" });
objectStorage.addItem({ name: "Toyota Corolla" });
objectStorage.addItem({ name: "Ford Thunderbird" });
objectStorage.removeItem({ name: "Toyota Corolla" });
console.log(objectStorage.getItems());
console.log("--------------------------------");
console.log("        generic utilities");
console.log("--------------------------------");
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=generics-constraints.js.map