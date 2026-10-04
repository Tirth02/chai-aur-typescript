interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavor: "masala",
    price: 20
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name:"Chai code cafe"}
// s.id = 2 This is not allowed as we have intialized readonly so not able to change it

interface DiscountCalc{
    (price: number): number
}

const apply50: DiscountCalc = (p) => p * 0.5;

interface TeaMachine{
    start(): void
    stop(): void
}

const machine:TeaMachine = {
    start() {
        console.log("starting Machine....");
    },
    stop() {
        console.log("Machine stopped!!");
        
    },

}


// index signature

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}


interface Users {
    name: string
}
interface Users {
    age: number
}

const u: Users = {
    name: "Tirth",
    age: 42
}

interface A {a:string}

interface B {b:string}

interface C extends A, B {}


// Generics

