function deger<T>(x:T):T{
    return x;
}

let sayi = deger<number>(53)
let sehir = deger<string>("Rize")

class GenericClass<T> {
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
sinif.fonksiyon(53)