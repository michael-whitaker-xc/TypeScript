const button = document.querySelector("button")!;
button.addEventListener("click", () => {
  console.log("Clicked!");
});

function addThis(n1: number, n2: number) {
  return n1 + n2;
}

function printResultHere(num: number) {
  console.log("Result: " + num);
}

printResultHere(addThis(5, 12));

//let combineValues : Function; //basic typing of a function

//function type is created with the arrow function notation
//let combineValues : () => number; //says it can be any function that returns a number
let combineValues: (a: number, b: number) => number; //specifically indicates a function that accepts two args of numbers and returns a number

combineValues = addThis;
//combineValues = 5; //causes TS error because the number 5 is not a function.
console.log(combineValues(8, 8)); //prints 16 to the log

//Function type demo
let combinedValues: (a: number, b: number) => number; //requires combinedValues to contain a function that receives two numbers and returns a number

//call back function
function addAndHandle(
  n1: number,
  n2: number,
  callbackfunction: (num: number) => void //scoped name for the function that is sent in
) {
  const result = n1 + n2;
  callbackfunction(result); //this is using the 'alias' created in the arguments above
  let thisString: string = '';//thisString has a yellow squigly line if "noUnusedLocals" is set to true in the tsconfig.json because this is never used
}

addAndHandle(5, 2, (answer) => {
  //anonymous function
  console.log(answer);
});

addAndHandle(5, 2, (result) => {
  printResultHere(result);
});
