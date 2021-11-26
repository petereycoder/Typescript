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

@prinToConsoleConditional(false)
export class Pokemon{
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string
    ){}
}