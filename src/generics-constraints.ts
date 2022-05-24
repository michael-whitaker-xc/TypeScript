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
console.log("--------------------------------");
console.log("       generic function");
console.log("--------------------------------");
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
console.log(mergedObject2.name); //this does work because the generic type tells TS that the result will be the intersection of two objects
const mergedObject3 = mergeThis(
  { name: "Michael", hobbies: ["Kayaking", "Taekwondo", "3D printing"] },
  { age: 42 }
);
console.log(mergedObject3.hobbies); //this also works

///////////////////////////////////////////////////////////////
//////////////        constraints   ///////////////////////
///////////////////////////////////////////////////////////////
console.log("--------------------------------");
console.log("          constraints");
console.log("--------------------------------");
function mergeThisToo<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// const mergedObject4 = mergeThisToo({ name: "Michael" }, 42);//this will not work because the contraint that T and U must be objects and this is a number

interface Lengthy {
  length: number;
}

//'Lengthy' interface above indicates
//that whatever gets passed in has
//a 'length' property    |-----------------|            |-----------|<specifically defines the function to return a tuple
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hello there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(45));//a number is not an object that support 'length' property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Michael" }, "name"));

///////////////////////////////////////////////////////////////
//////////////        generic classes   ///////////////////////
///////////////////////////////////////////////////////////////
console.log("--------------------------------");
console.log("        generic classes");
console.log("--------------------------------");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Michael");
textStorage.addItem("Nathan");
textStorage.removeItem("Nathan");
console.log(textStorage.getItems());

const numStorage = new DataStorage<number>();
// numStorage.addItem("Max");//will not work because it knows to expect a number
numStorage.addItem(23);
numStorage.addItem(4);
numStorage.addItem(789);
numStorage.addItem(35);
numStorage.addItem(64);
console.log(numStorage.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Ford Focus" });
objectStorage.addItem({ name: "Ford Taurus" });
objectStorage.addItem({ name: "Toyota Corolla" });
objectStorage.addItem({ name: "Ford Thunderbird" });
objectStorage.removeItem({ name: "Toyota Corolla" });

console.log(objectStorage.getItems()); //the removal does not work properly because objects are stored in memory differently and the indexOf returns -1 so the last object gets removed.

///////////////////////////////////////////////////////////////
//////////////        generic utilities   ///////////////////////
///////////////////////////////////////////////////////////////
console.log("--------------------------------");
console.log("        generic utilities");
console.log("--------------------------------");

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //adding "Partial" basically makes the properties optional until they can be entered.
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;//you have to explicitly convert to a CourseGoal because that's what we want to return.
}

