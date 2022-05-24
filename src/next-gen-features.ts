//features table: https://kangax.github.io/compat-table/es6/

///////////////////////////////////////////////////////////
//////////////Let and Const///////////////////////
///////////////////////////////////////////////////////////
const userNameConstant = "Max";
//userNameConstant = "Michael"; //cannot reasign because it was declared as a constant

if (true) {
  var ageVar = 34; //has 2 scopes; global and function, therefore this is a global variable even though it was declared inside of an if-then statement
}
console.log(ageVar);

let age = 30; //is block scoped. Inside curly braces

{
  let thisDontWork = 23;
}
// console.log(thisDontWork);//this don't work because it was defined within the block above

///////////////////////////////////////////////////////////////
//////////////        Arrow functions   ///////////////////////
///////////////////////////////////////////////////////////////
//saves using the function keyword,
const addFunction = (a: number, b: number) => {
  return a + b;
};
console.log(addFunction(4, 5));

//curly braces and return statement can be omitted if you only have one expression
const addShortFunction = (a: number, b: number) => a + b; //implicitly returns after the arrow
console.log(addShortFunction(4, 5));

///////////////////////////////////////////////////////////////
//////////////        Default function params   ///////////////////////
///////////////////////////////////////////////////////////////
const addDefaultParam = (a: number, b: number = 1) => a + b; //will increment by 1 if 'b' is not specified. Default must be last in the list.
console.log(addDefaultParam(5));

///////////////////////////////////////////////////////////////
//////////////        Spread operator   ///////////////////////
///////////////////////////////////////////////////////////////
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
// activeHobbies.push(hobbies[0],hobbies[1])//you could add hobbies like this or...
//                  v-----using the spread operator
activeHobbies.push(...hobbies); //adds each item in the hobbies array as separtate entry into the active hobbies

const person1 = {
  fullName: "Max",
  personAge: 30,
};
// const copiedPerson = person1; //not really a copy of the person, it just points to the person1
const copiedPerson = { ...person1 }; //actually copies the keys and values from person1

///////////////////////////////////////////////////////////////
//////////////        rest parameters   ///////////////////////
///////////////////////////////////////////////////////////////
//allows you to accept an unlimited amount of params
const addRest = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return (currentResult += currentValue);
  }, 0);
};

const addedNumbers = addRest(5, 7, 89, 2, 45, 90);
console.log(addedNumbers);

///////////////////////////////////////////////////////////////
//////////////     array and object destructuring   ///////////////////////
///////////////////////////////////////////////////////////////
// rest params     ----v  if there are more than 2 hobbies, the remaining hobbies variable will contain the rest of the hobbies.
//    v--using square  v  brackets-------v
const [hobby1,hobby2, ...remainingHobbies] = hobbies;//destructers 'hobbies' into hobby1 and hobby2; putting any extras into the remainingHobbies variable

const {fullName,personAge: theAge} = person1;
console.log(theAge);

