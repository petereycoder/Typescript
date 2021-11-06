"use strict";
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: 32,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
console.log('Paso por aquí');
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log('Paso por aca');
console.log(apocalipsis);
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || 'No Lastname')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || 'No Lastname');
        }
    };
    var name = fullName('Ash', 'Ketchup');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No Lastname');
    };
    var name = fullName('Ash');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Ash', 'Ketchup');
    console.log({ name: name });
})();
(function () {
    var fullName = function (fisrtName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return fisrtName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clarck', 'Joshep', 'Kent', 'Reyes');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return 'El mundo está de cabeza'; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Felipe'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var heroe = 'Shrek';
    function returnName() {
        return heroe;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    var heroeName = returnName();
})();
(function () {
    var flash = {
        name: 'Shrek',
        age: 25,
        powers: ['Super veloz', 'Super tragón']
    };
    var superman = {
        name: 'Clark Kent',
        age: 21,
        powers: ['Super fuerte']
    };
})();
(function () {
    var flash = {
        name: 'Shrek',
        age: 25,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 21,
        powers: [1]
    };
})();
(function () {
    var mycostumVariable = 'Felipe';
    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);
    mycostumVariable = 20;
    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);
    mycostumVariable = {
        name: 'Itachi',
        age: 32,
        powers: [1]
    };
    console.log(typeof mycostumVariable);
    console.log(mycostumVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.1256351;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villans = ['Duende Verde', 'Decepticoms', 'Malefica'];
    villans.forEach(function (v) { return console.log(v.toLocaleUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
(function () {
    var isValue = undefined;
    console.log(isValue);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villans = 20;
    if (avengers < villans) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Estamos salvados");
    }
    avengers = Number("55");
    console.log(avengers);
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "LinternaVerde";
    var volcanNegro = "H\u00E9roe: VolcanNegro";
    console.log("I'm " + batman);
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Shrek', 100, true];
    hero[0] = 'Fiona';
    hero[1] = 200;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callShrek() {
        return;
    }
    var callFiona = function () {
        return;
    };
    var a = callShrek();
    console.log(a);
})();
//# sourceMappingURL=main.js.map