(()=>{

    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string,
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo salvado';
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolwerine = new Xmen('Wolwerine','Logan');
    const magneto = new Villian('Magneto','Magnus');
    //console.log(wolwerine.salvarMundo());
    //console.log(magneto.conquistarMundo());

    const printName = (character:Mutante) =>{
        console.log(character.realName);
    }

    //printName(magneto);

})()