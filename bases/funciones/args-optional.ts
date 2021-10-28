(()=>{

    const fullName = (firstName:string,lastName?:string):string =>{

        return `${firstName} ${lastName || 'No Lastname'}`;

    }

    const name = fullName('Ash');
    console.log({name});

})()