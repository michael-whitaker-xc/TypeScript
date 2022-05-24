//this signifies that you know this will NOT be null ------v
const paragraph = document.getElementById("message-output")!;

// const userInputElement = <HTMLInputElement>document.getElementById('user-input'); //this works, but there's another method...
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement; // use this to be compatible with react

userInputElement.value = "Hello!";

interface ErrorContainer {
  [prop: string]: string | number;
  id: number;
  name: string;
  // isWarning: boolean; //this gives an error because it's not one of the allow property types
}

const erroBag: ErrorContainer = {
  email: "Not a valid email!",
  id: 89,
  name: "Email Missing",
  userName: 'must start with blah'
};
