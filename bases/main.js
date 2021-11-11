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
    getfullNamedesdeXmen() {
        console.log(super.getfullName());
    }
}
const wolwerine = new Xmen('Wolwerine', 'Logan', true);
console.log(wolwerine);
wolwerine.getfullNamedesdeXmen();
//# sourceMappingURL=main.js.map