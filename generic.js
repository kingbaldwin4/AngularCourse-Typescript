function deger(x) {
    return x;
}
var sayi = deger(53);
var sehir = deger("Rize");
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon(53);
