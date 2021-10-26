(()=>{

    const heroe: string = 'Shrek';

    function returnName(): string {
        return heroe;
    }

    const activateBatisignal = ():string =>{
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatisignal);
    const heroeName = returnName();
})()