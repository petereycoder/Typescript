(()=>{

    const fullName = (firstName:string,lastName?:string,upper:boolean=false):string =>{
        if(upper){
            return `${firstName} ${lastName || 'No Lastname'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || 'No Lastname'}`;
        }
        

    }

    const name = fullName('Ash','Ketchup');
    console.log({name});

})()