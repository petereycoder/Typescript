(()=>{

    class Avenger{
        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name = name;
            this.power = power;
        }
    }

    class flyingAvenger extends Avenger{
        flying;

        constructor(name,power){
            super(name,power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk',9120);

    console.log(hulk);

    const birdcrazy = new flyingAvenger('Pájaro Loco',2356);
    console.log(birdcrazy);

})()