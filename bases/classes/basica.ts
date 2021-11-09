(()=>{

    class Avenger {
        private name: string;
        private team : string;
        public realName?: string;
        static avgAge: number = 35;

        constructor(name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    Avenger.avgAge = 34;
    const atman = new Avenger('Antman','Capitan');
    console.log(atman);
    

})()