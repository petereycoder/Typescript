"use strict";
(function () {
    var flash = {
        name: 'Shrek',
        age: 25,
        powers: ['Super veloz', 'Super tragón']
    };
    flash = {
        name: 'Pinocho',
        //age: 60,
        powers: ['Mentiroso'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
