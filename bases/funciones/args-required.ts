(()=>{

    const fullName = (firstName:string,lastName:string):string =>{

        return `${firstName} ${lastName}`;

    }

    const name = fullName('Ash','Ketchup');
    console.log({name});

})()