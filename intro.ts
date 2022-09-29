export {};
function selamVer(isim:String){
    return "Merhaba " + isim
}

let mesaj = selamVer('engin')
console.log(mesaj)

let sayi:number
let sayilar:Array<number> = [1,2,3]
let dizi:[number,string] = [2,"Ankara"] //tuple

enum Renk {Kirmizi=1,Siyah,Mavi}
let renk : Renk = Renk.Kirmizi