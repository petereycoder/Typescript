"use strict";
(() => {
    let flash = {
        name: 'Shrek',
        age: 25,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 21,
        powers: [1]
    };
})();
(() => {
    const client = {
        name: 'Felipe',
        age: 25,
        address: {
            id: 123,
            zip: 71500,
            city: 'Oaxaca'
        },
        getfullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Mary',
        age: 25,
        address: {
            id: 124,
            zip: 71580,
            city: 'Miahuatlán'
        },
        getfullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map