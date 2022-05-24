let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
//userName=userInput; //causes an error because userInput is not gauranteed to be a string.

if (typeof userInput === "string") {
  userName = userInput; //this works because TS knows you have checked the type and ensured it is compatible
}

//ensures the function never returns anything at all v------v only really used to clarify
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; //this never returns; it crashes the script
}

generateError("An error occurred", 500);
//test