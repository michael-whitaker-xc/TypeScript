function subtract(a: number, b: number): number;
function subtract(a: string, b: string): string;
function subtract(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = subtract(6, 1);
console.log(result1);
// result1.split(' ');//will not work because TS knows (because of the overload) that the result will be a number which cannot be split

const result2 = subtract("Max", " Thomas");
result2.split(" ");

// const result3 = subtract(5,' Thomas');//idk why this doesn't work

///////////////////////////////////////////////////////////////
//////////////        Optional chaining   ///////////////////////
///////////////////////////////////////////////////////////////
const fetchedUserData = {
  id: 1,
  name: "Thomas",
  job: { title: "CEO", description: "My company" },
};

console.log(fetchedUserData?.job?.title);

///////////////////////////////////////////////////////////////
//////////////        Nullish coalescing   ///////////////////////
///////////////////////////////////////////////////////////////
const userInput1 = "";
const storedData = userInput1 ?? "DEFAULT";
