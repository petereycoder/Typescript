(()=>{


    const fullName = (fisrtName:string,...restArgs:string []): string =>{
        return `${fisrtName} ${restArgs.join(' ')}`;

    }

    const superman = fullName('Clarck','Joshep','Kent','Reyes');
    console.log({superman});

})()