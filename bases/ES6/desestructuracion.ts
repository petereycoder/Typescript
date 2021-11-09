(()=>{

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers:Avenger =  {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Dawney Jr.',
        vision: 'Paul Betanny',
        activo: true,
        poder: 152.245611
    }

    //const { poder, vision} = avengers;
    //console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ironman,...resto}:Avenger) => {
        //console.log(ironman,resto);
    }

    //printAvenger(avengers);

    const avengersArr: [string,boolean,number] = ['Capitan América', true, 30.8];
    const [capitan, boleano, numero] = avengersArr;
    //console.log({capitan,boleano,numero});

})()