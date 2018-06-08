class Greeter {
    greeting: string; 
    // A string property. Can also be defined in constructor as public message: string
    
    constructor(message: string) { // A constructor that takes a string parameter
        this.greeting = message; 
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}