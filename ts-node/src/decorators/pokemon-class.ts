function prinToConsole(constructor: Function){
    console.log(constructor);
}

const prinToConsoleConditional = (print: boolean = false):Function =>{
    if(print){
        return prinToConsole;
    }else{
        return () => {};
    }
}

const bloquearPrototipo = function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@bloquearPrototipo
@prinToConsoleConditional(false)
export class Pokemon{
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string
    ){}
}