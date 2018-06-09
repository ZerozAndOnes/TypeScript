class Generic<T1> {
    
    constructor(public value1: T1) {}

    // Define generic function with parameter constrained to be either a string or number
    myGenericFunction<T extends string | number>(someParameter: T) {
        // Cast the values to string 
        // (requires a double cast - first to any and then to string) 
        // and return
        return <string><any>this.value1 + someParameter;
    }
}

console.log(new Generic<number>(10).myGenericFunction<string>("Hello"));
