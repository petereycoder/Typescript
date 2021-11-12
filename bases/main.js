"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
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
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy yo wey');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Peterey');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map