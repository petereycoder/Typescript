(()=>{


    const batman:string = 'Batman';
    const linternaVerde:string = "LinternaVerde"; 
    const volcanNegro:string = `Héroe: VolcanNegro`;

    console.log(`I'm ${batman}`);

    console.log(batman.toLocaleUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No está presente');
})()