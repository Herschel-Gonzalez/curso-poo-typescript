import {Animal,Dog} from './08-protected'

const animal = new Animal('elite');
animal.greeting();

const  cheis = new Dog('cheis');
cheis.greeting();
cheis.woof(3);