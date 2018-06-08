class Greeter {
    greeting: string; // A string property
    constructor(message: string) { // A constructor that takes a string parameter
        this.greeting = message; 
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}