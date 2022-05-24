//using generic types gives us better type-safety

const names: Array<string | number | boolean> = ["loijlk", 2, 89, "dkjh", true]; //an array is a generic type

//promise is generic.  |------|<this is not required unless you define the type for the promise constant.
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

///////////////////////////////////////////////////////////////
//////////////        generic function   ///////////////////////
///////////////////////////////////////////////////////////////
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Michael" }, { age: 42 });
console.log(mergedObject); //can be printed and you see an object with a name and age but...
// console.log(mergedObject.name); //this will not work because TS doesn't understand the object will have a name field (or an age field)

//therefore, we can use generics
function mergeThis<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObject2 = mergeThis({ name: "Michael" }, { age: 42 });
console.log(mergedObject2.name);//this does work because the generic type tells TS that the result will be the intersection of two objects
const mergedObject3 = mergeThis({ name: "Michael", hobbies: ['Kayaking','Taekwondo','3D printing'] }, { age: 42 });
console.log(mergedObject3.hobbies);//this also works

///////////////////////////////////////////////////////////////
//////////////        constraints   ///////////////////////
///////////////////////////////////////////////////////////////
function mergeThis<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  