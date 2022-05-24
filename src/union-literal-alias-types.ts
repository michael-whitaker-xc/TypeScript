//union types
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

//literal types
function combineLiteral(
  input1: number | string,
  input2: number | string,
  resultType: "as-number" | "as-text" //Restrict this param to one of these two values and combines a union type with literals
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    //       v----converts variable to number
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
//returns sum of 26 and 23
const combinedAges = combineLiteral('26', 23, "as-number");

//type alias
type Combinable = number | string;
function combinableCombine(
    input1: Combinable,
    input2: Combinable,
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number")
    ) {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  //returns '2623' because one of these is a string
  const combinableAges = combinableCombine('26', 23);

