"use strict";
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
//# sourceMappingURL=args-default.js.map