abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase {
    hesapla(): void {
       console.log("Tuketici kredisine göre hesap yapıldı")
    }
    constructor(){
        super();
    }
}

class MortgageKredi extends KrediBase {
    hesapla(): void {
        console.log("Konut kredisine gore hesap yapildi")
    }
    constructor(){
        super();
    }
    baskaBirOperasyon(){
        console.log("Merhaba mortgage kredisine hosgeldiniz")
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.kaydet();
tuketiciKredisi.hesapla();


let mortgageKredisi = new MortgageKredi()
mortgageKredisi.hesapla();
mortgageKredisi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()