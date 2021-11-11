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
    console.log(Avenger.getavgAge());
})();
//# sourceMappingURL=main.js.map