"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getavgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    Avenger.avgAge = 34;
    const atman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
class Avenger {
    constructor(name, realName) {
        this.name = name;
        this.realName = realName;
        console.log('Contructor Avenger llamado!!');
    }
    getfullName() {
        return `${this.name} ${this.realName}`;
    }
}
class Xmen extends Avenger {
    constructor(name, realName, isMutant) {
        super(name, realName);
        this.isMutant = isMutant;
        console.log('Constructor Xmen Llamando ');
    }
    get fullName() {
        return `${this.name} - ${this.realName}`;
    }
    set fullName(name) {
        if (name.length < 3) {
            throw new Error('El nombre tiene que ser mayor a 3 letras');
        }
        this.name = name;
    }
    getfullNamedesdeXmen() {
        console.log(super.getfullName());
    }
}
const wolwerine = new Xmen('Wolwerine', 'Logan', true);
wolwerine.fullName = 'Felipe';
console.log(wolwerine.fullName);
//# sourceMappingURL=main.js.map