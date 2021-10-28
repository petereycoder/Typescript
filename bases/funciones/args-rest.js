"use strict";
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
