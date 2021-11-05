(()=>{

    let flash: { name: string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Shrek',
        age: 25,
        powers: ['Super veloz','Super tragón']
    }

    flash = {
        name: 'Pinocho',
        //age: 60,
        powers: ['Mentiroso'],
        getName(){
            return this.name;
        }
    }

    console.log(flash.getName());

})()