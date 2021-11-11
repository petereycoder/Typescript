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

    getfullNamedesdeXmen(){
        console.log(super.getfullName());
    }
}

const wolwerine =  new Xmen('Wolwerine','Logan',true);
console.log(wolwerine);

wolwerine.getfullNamedesdeXmen();