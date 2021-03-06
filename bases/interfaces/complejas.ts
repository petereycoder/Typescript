(()=>{

    interface Client{
        name: string;
        age?: number;
        address: Address;
        getfullAddress( id: string): string;
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
        },
        getfullAddress( id:string ){
            return this.address.city;
        }

    }

    const client2: Client = {
        name: 'Mary',
        age: 25,
        address: {
            id: 124,
            zip: 71580,
            city: 'Miahuatlán'
        },
        getfullAddress( id:string ){
            return this.address.city;
        }
    }

})()