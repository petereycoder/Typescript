"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    Avenger.avgAge = 34;
    const atman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(atman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map