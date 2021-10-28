"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No Lastname');
    };
    var name = fullName('Ash');
    console.log({ name: name });
})();
