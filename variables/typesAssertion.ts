let message;
message = 'The Message';
// let endsWithA = message.endsWith('A'); //endWith is available in es2015
// Will not work since the message variable is defined and initiated on a different line
// thus the compiler can't infer its type. To overcome this we assert the type of the message variable
let endsWithA = (<string>message).endsWith('A');

//Alternatively, we can use
let alternateWay = (message as string).endsWith('A');