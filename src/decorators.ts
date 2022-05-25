///////////////////////////////////////////////////////////////
//////////////        decorators   ///////////////////////
///////////////////////////////////////////////////////////////
//requires "experimentalDecorators": true, in the tsconfig file.
console.log("--------------------------------");
console.log("           decorators");
console.log("--------------------------------");

function Logger(constructor: Function) {
  console.log("logging...");
  console.log(constructor);
}

@Logger
class Person1 {
  name = "Max";
  constructor() {
    console.log("Creating person");
  }
}
const pers = new Person1();
console.log(pers);
