console.log(Math.PI);
console.log(Math.max(1,23,4,5,3));

class MyMath {
    static readonly PI = 3.14;
    static max(...numbers:number[]){
        //return numbers.reduce((max,item)=>max>=item ? max: item,0);
        return numbers.reduce((max,item)=>max>=item ? max: item);
    }
}

console.log(MyMath.PI);
console.log(MyMath.max(-1,-2,-34,-4));



