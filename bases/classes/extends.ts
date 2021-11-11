class Avenger{
    constructor(
        public name: string,
        public realName: string,
    ){
        console.log('Contructor Avenger llamado!!');
    }  
    
    protected getfullName(){
        return `${this.name} ${this.realName}`;
    }
    
}

class Xmen extends Avenger{
    constructor(
        name: string,
        realName: string,
        public isMutant: boolean,
    )
    {
        super(name,realName);
        console.log('Constructor Xmen Llamando ');
    }

    get fullName(){
        return `${this.name} - ${this.realName}`;
    }

    set fullName(name:string){
        if(name.length < 3){
            throw new Error('El nombre tiene que ser mayor a 3 letras');
        }
        this.name = name;
    }

    getfullNamedesdeXmen(){
        console.log(super.getfullName());
    }

    
}

const wolwerine =  new Xmen('Wolwerine','Logan',true);
wolwerine.fullName = 'Felipe';
console.log(wolwerine.fullName);

//wolwerine.getfullNamedesdeXmen();