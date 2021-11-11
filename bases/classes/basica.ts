(()=>{

    class Avenger {
        //private name: string;
        //private team : string;
        //public realName?: string;
        static avgAge: number = 35;
        static getavgAge(){
            return this.name;
        }

        constructor( 
            private name:string, 
            private team:string, 
            public realName?:string
        ){}

        public bio(){
            return `${this.name} (${this.team})`;
        }
    }

    Avenger.avgAge = 34;
    const atman = new Avenger('Antman','Capitan','Scott Lang');
    //console.log(atman);

    console.log(Avenger.getavgAge());
    

})()