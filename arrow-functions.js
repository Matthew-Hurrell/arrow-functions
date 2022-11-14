/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// // Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    return a + b;
}

sum2 = addTwoNumbers2(3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => a + b;

sum3 = addTwoNumbers3(3, 5);
console.log(sum3);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("DAMN DANIEL");

const sayHello = () => console.log("Hello!");
sayHello();

// Returning Multiple Lines
// Use parenthesis and backticks 

const returnMultipleLines = () => (
    `<p>
    This is a multi line string!
    </p>`
)
console.log(returnMultipleLines());