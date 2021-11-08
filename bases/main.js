"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Dawney Jr.',
        vision: 'Paul Betanny',
        activo: true,
        poder: 152.245611
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengersArr = ['Capitan América', true, 30.8];
    const [capitan, boleano, numero] = avengersArr;
    console.log({ capitan, boleano, numero });
})();
(() => {
    const nombre = 'Felipe';
    const getName = () => {
        console.log(nombre);
    };
    getName();
})();
//# sourceMappingURL=main.js.map