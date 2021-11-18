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
    class Mutant {
        constructor(a, n, rln) {
            this.a = a;
            this.n = n;
            this.rln = rln;
            this.age = a;
            this.name = n;
            this.realName = rln;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
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
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map