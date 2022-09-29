export{};
function topla(x:number,y:number):number{
    return x+y;
}

let topla2 = function(x:number,y:number):number{
    return x+y;
    }


console.log(topla(2,3))
console.log(topla2(2,4))

function topla3(x:number,y?:number):number{
    if(y){
    return x+y;
    }
    return x;
}
console.log(topla3(3))

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Engin","Derin","Salih","Ahmet"))

