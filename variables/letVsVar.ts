// Let vs Var Scope
function simpleLoop() {
    for(var i=0; i < 5; i++){
        console.log(i);
    }
    // Here i shouldn't generally be available, but since we are using var (global scope)
    // it will be available here. To have it block-scoped we can use let i
    console.log('Current i value ' + i);
}

simpleLoop();