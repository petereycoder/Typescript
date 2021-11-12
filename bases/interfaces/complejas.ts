(()=>{

    interface Client{
        name: string;
        age?: number;
        address: Address;
    }

    interface Address{
        id: number;
        zip: number;
        city: string;
    }

    const client: Client = {
        name: 'Felipe',
        age: 25,
        address: {
            id: 123,
            zip: 71500,
            city: 'Oaxaca'
        }
    }

    const client2: Client = {
        name: 'Mary',
        age: 25,
        address: {
            id: 124,
            zip: 71580,
            city: 'Miahuatlán'
        }
    }

})()