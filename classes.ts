class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi
        this._pencereSayisi = pencereSayisi
        this._kat = kat 
    }
    yemekYe(){
        console.log(this._kat + " katlı evde yemek yiyildi")
    }
}

let ev = new Ev(3,4,5)
ev.yemekYe();
console.log(ev._kat)

class Kisi{
    private _isim:string

   set isim(ad){
    this._isim = ad;
   }

   get isim():string{
    return this._isim
   }
    kaydet(){
        console.log("Kişi kaydedildi");
    }
    gunaydin(_isim:string):string{
        return "Gunaydin" + _isim 
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış yapıldı");
    }
}

class Personel extends Kisi{ 
    maasOde(){
        console.log("Maaş ödendi");
    }
}

let musteri = new Musteri()
musteri.isim = "Engin"
console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap();
console.log(musteri.gunaydin)

let personel = new Personel();
personel.kaydet();
personel.maasOde();