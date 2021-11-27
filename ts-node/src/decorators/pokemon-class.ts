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

function CheckValidPokemonId(){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = (id:number) => {
            if(id < 1 || id > 800){
                return console.error('El id del Pokemon debe estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }
        }
    }
}

@bloquearPrototipo
@prinToConsoleConditional(false)
export class Pokemon{
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB ${id}`)
    }
}