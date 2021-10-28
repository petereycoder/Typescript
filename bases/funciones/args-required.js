"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Ash', 'Ketchup');
    console.log({ name: name });
})();
