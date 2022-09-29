"use strict";
exports.__esModule = true;
function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('engin');
console.log(mesaj);
var sayi;
var sayilar = [1, 2, 3];
var dizi = [2, "Ankara"]; //tuple
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
