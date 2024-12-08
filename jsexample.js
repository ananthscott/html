var global_var = 1000;
//1
function forVariables(x) {
    setTimeout(()=>console.log("printing value in function ==> "+x),5000); //api call
}
//2
function callingFunction(){
    let a = 200;
    console.log("Calling start");
    forVariables(a);
    console.log("Calling end");
}

//clling
callingFunction();
//HOF
function one(){
    console.log("printing in one");
}

function hof(c){
    c();
}

hof(one);

function hof2(){
    console.log("returning funciotn")
    return one;
}

const hof2Result = hof2();
hof2Result();



