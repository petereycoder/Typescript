(()=>{

    class Avenger {
        //private name: string;
        //private team : string;
        //public realName?: string;
        static avgAge: number = 35;

        constructor( 
            private name:string, 
            private team:string, 
            public realName?:string
        ){}
    }

    Avenger.avgAge = 34;
    const atman = new Avenger('Antman','Capitan','Scott Lang');
    console.log(atman);

    console.log(Avenger.avgAge);
    

})()