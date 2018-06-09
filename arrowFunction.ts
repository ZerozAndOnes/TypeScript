// Arrow Functions aka Lambda Expresssion in C#
 
// Assume we have the function
let log = function(message: string) {
    console.log(message);
}

// With Arrow Function it becomes 
let logMessage = (message: string) => console.log(message);

// We can exclude the parenthesis around (message: string) but it isn't a good practice

// If there are no parameters then it becomes 
let logPredefinedMessage = () => console.log("Oh oh! I don't know what's happening.");

// If the function contains multiple lines then the definition becomes
let logPredefinedMultipleMessage = () => {
    console.log("Oh oh! I don't know what's happening.");
    console.log("I TOLD YOU to use a variable.");
} 