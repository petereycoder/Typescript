(()=>{


    type Hero = {
        name: string;
        age?:number;
        powers: number [];
        getName?: () => string;
    }

    let mycostumVariable: (string | number | Hero) = 'Felipe';
    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);

    mycostumVariable = 20;
    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);

    mycostumVariable = {
        name: 'Itachi',
        age: 32,
        powers: [1]
    }

    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);

})()
