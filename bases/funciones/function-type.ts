(()=>{

    const addNumbers = (a:number,b:number) => a+b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está de cabeza';



    let myFunction: Function;
    //let myFunction;
   // myFunction = 10;
    //console.log(myFunction);

    //let myFunction: (x:number,y:number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1,2));

    //let myFunction: (nombre:string) => string;
    myFunction = greet;
    console.log(myFunction('Felipe'));

    //let myFunction: () => string;
    myFunction = saveTheWorld;
    console.log(myFunction());

})()