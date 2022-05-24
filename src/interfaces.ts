///////////////////////////////////////////////////////////////
//////////////        interfaces   ///////////////////////
///////////////////////////////////////////////////////////////
interface INamed {
  name: string;
  outputName?: string; //indicates an optional property. Objects that implement will not be required to implment
  nameThis?(): string; //methods can be optionsl as well
}

interface IGreetable extends INamed {
  // readonly name: string; //peropeties set to readonly will cascade down to classes that implement it
  greet(phrase: string): void;
}

interface IAging {
  age: number;
  getOlder(): number;
}

// multiple interfaces can be implemented by separating with comas.
class Person implements IGreetable, IAging {
  name: string; // name must be implmented because IGreetable inherits from INamed
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  getOlder(): number {
    this.age = this.age + 1;
    return this.age;
  }
  greet(phrase: string): void {
    console.log(`${phrase}${this.name}; I am ${this.age} years old.`);
  }
}

let michael = new Person("Michael", 36);
michael.getOlder();
michael.greet("Hello, my name is, ");

console.log(michael);

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

//type allows for union types etc which makes it more flexible? But interfaces make it more clear
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// let user1: Person;

// user1 = {
//   name: "Michael",
//   age: 42,
//   greet(phrase: string) {
//     console.log(`${phrase}${this.name}`);
//   },
// };

// user1.greet("Hello! My name is, ");

///////////////////////////////////////////////////////////////
//////////////        interfaces to define functions   ///////////////////////
///////////////////////////////////////////////////////////////
interface AddFn {
  (a: number, b: number): number;
}

let addthis: AddFn;

addthis = (n1: number, n2: number) => {
  return n1 + n2;
};
