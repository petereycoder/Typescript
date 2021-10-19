(()=>{

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    //console.log(avenger.charAt(0));
    //Casteo
    console.log((avenger as  string).charAt(0));

    avenger = 150.1256351;
    //Casteo
    console.log(<number>avenger.toFixed(2));

    console.log(exists);
    console.log(power);

})()