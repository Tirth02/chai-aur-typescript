"use strict";
// class Chai{
//     flavor: string;
//     price: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     // constructor(flavor: string, price:number){
//     //     this.flavor = flavor;
//     //     this.price = price;
//     // }
//     constructor(flavor: string){
//         this.flavor = flavor;
//         console.log();
//     }
// }
// const masalaChai = new Chai("Ginger");
// masalaChai.flavor = "Masala";
// access modifier
class Chai {
    flavour = "Masala";
    secretIngredients = "cardamom";
    reveal() {
        return this.secretIngredients; // ok
    }
}
const C = new Chai();
// console.log(C.secretIngredients); // This is not allowed to access directly as it is private
class Shop {
    shopName = "ChaI Corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //ok
    }
}
// new Branch().getName // This is possible to access protected variable
class Walet {
    #balance = 100; // This syntax is also used to declare private variable in a class but not a good practice to use this syntax as it is not supported in all browsers
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
w.getBalance();
class Cup {
    capacity = 299;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    // generally whenever we are not able to access the variable directly we use getter setter
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c1 = new ModernChai();
console.log(c1.sugar);
c1.sugar = 3;
console.log(c1.sugar);
class EkChai {
    flavour;
    static shopName = "Chaicode cafe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName); // This is how you define static values of class as we cannot access it from object of it, it directly accessed from class
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}
class Heater {
    heat() { }
}
class chaiMaker {
    heater;
    //composition 
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=oop.js.map