// Defining type with type annotation
function declareTypes() {
    var x;
    var b;
    var s;
    var arr = [1, 2, 3]; // Declaration and Initiation.
    var z = [1, true, 'a', 1.5];
    // Enums
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {})); // Default values are index-based i.e., Red -> 0 , Green -> 1 etc
    var backgroundColor = Color.Green;
}
