const Stack = require("../Stack");

function parenthesisCheck(str) {
  const stack = new Stack();
  for (let bracket of str) {
    switch (bracket) {
      case "[":
        stack.push(bracket);
        break;

      case "]":
        if (stack.pop() !== "[") {
          return false;
        }
        break;

      case "{":
        stack.push(bracket);
        break;

      case "}":
        if (stack.pop() !== "{") {
          return false;
        }
        break;

      case "(":
        stack.push(bracket);
        break;

      case ")":
        if (stack.pop() !== "(") {
          return false;
        }
        break;

      default:
        break;
    }
    stack.print();
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

console.log(parenthesisCheck("[()]{}{()()}"));
console.log(parenthesisCheck("[(])"));
