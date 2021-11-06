"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return 'El mundo está de cabeza'; };
    var myFunction;
    //let myFunction;
    // myFunction = 10;
    //console.log(myFunction);
    //let myFunction: (x:number,y:number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    //let myFunction: (nombre:string) => string;
    myFunction = greet;
    console.log(myFunction('Felipe'));
    //let myFunction: () => string;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map