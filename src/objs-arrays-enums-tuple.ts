function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; //5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);


const person = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking']
}

console.log("Person's name" + person.name);

//tuple
const personWithTuple: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple, enforced number of elements in the array
} = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2,'author']
}

//Enum           v---start is usually 0
enum Role {ADMIN = 2, READ_ONLY,AUTHOR};

const personWithEnum = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
}

