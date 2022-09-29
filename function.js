"use strict";
exports.__esModule = true;
function topla(x, y) {
    return x + y;
}
var topla2 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla2(2, 4));
function topla3(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla3(3));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"));
