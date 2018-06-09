class Greeter {
    /***************** See Alternative
    greeting: string; 
    // A string property. Can also be defined in constructor as public message: string
    
    constructor(message: string) { // A constructor that takes a string parameter
        this.greeting = message; 
    }*/

    /***** Alternative by defining access modifier in Constructor Parameters */
    constructor(private greeting: string) {}

    greet() {
        return "Hello, " + this.greeting;
    }
}