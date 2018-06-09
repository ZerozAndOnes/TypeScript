// Defining type with type annotation
function declareTypes() {
    let x: number;
    let b: boolean;
    let s: string;
    let arr: number[] = [1, 2, 3] // Declaration and Initiation.
    let z: any[] = [1, true, 'a', 1.5]

    // Enums
    enum Color { Red = 1, Green = 2, Blue =3 } // Default values are index-based i.e., Red -> 0 , Green -> 1 etc
    let backgroundColor = Color.Green;
}