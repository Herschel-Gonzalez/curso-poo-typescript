export class Animal{
    constructor(public name:string){
    }
    move(){
        console.log('Moving along');
        
    }
    greeting(){
        return `Hello im ${this.name}`
    }
}

export class Dog extends Animal{
    woof(times:number):void{
        for(let index = 0; index < times; index++){
            console.log('woof!');
            
        }
    }
}

const gato = new Animal('gato');
gato.move();
console.log(gato.greeting());

const balto = new Dog('balto');
balto.move();
console.log(balto.greeting());
balto.woof(3);
