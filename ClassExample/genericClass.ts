class Generic {
    constructor() {}
    myGenericFunction<TYPE>(someParameter: TYPE) {
        return someParameter;
    }
}

console.log(new Generic().myGenericFunction<string>("Hello"));
