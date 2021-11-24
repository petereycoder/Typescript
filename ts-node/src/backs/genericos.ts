import { printObject, genericFuntion, genericFunctionArrow } from '.././generics/generics';
import { Villain, Hero } from '.././interfaces';
//import { Hero } from './interfaces/hero';
//import { Villain } from './interfaces/villain';


//printObject(123);
//printObject(new Date());
//printObject({a:1,b:2,c:3});
//printObject([1,2,3,4,5,6,7,8,9]);
//printObject('Hola Mundo');

//const name:string = 'Felipe';
//console.log(genericFuntion(123));
//console.log(genericFunctionArrow(3.1416).toFixed(2));
//console.log(genericFunctionArrow(name.toUpperCase()));
//console.log(genericFunctionArrow(new Date().getDay()));

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);





