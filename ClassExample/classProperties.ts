class Point {
    constructor(private x: number, private y: number) {}

    // We can implement properties as methods i.e., setX and getX
    // But that is not the preferred way, the preferred way is to use the get and set keywords i.e.,
    get X() {
        return this.x;
    }

    set X(value) {
        if(value < 0 )
            throw new Error("Value can't be less than 0.");
        this.x = value;
    }
    
}