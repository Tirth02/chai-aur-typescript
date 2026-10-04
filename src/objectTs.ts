const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string,
    price: number,
    isHot: boolean
}

tea ={
    name:"Ginger Tea",
    price: 32,
    isHot: true
}
type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakwaliChai: Tea = {
    name: "Adrak chai",
    price: 25,
    ingredients: ["ginger","tea leaves"]
}


type Cup = {size: string};
let smallCup: Cup = {size:"200ml"}

let bigCup = {size:"500ml", material:"steel"}

smallCup = bigCup;


type Brew = {brewTime: number}
const coffee = {brewTime:5, beans:"Arabica"}
const chaiBrew: Brew = coffee

type User = {
    username: string,
    password: string
}

const u: User = {
    username:"chaicode",
    password: "12345"
}


// Datatypes splitout

type Item = {name:String, quantity: number}
type Address = {street: string, pin:number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updatedChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updatedChai({price: 25})
updatedChai({isHot: false})
updatedChai({}) // Sometime this can be issue with the Partial sending empty object is possible through partial which can cause error

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name:"Masala Chai",
    quantity:9
})

type Coffee = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type basicCoffeeInfo = Pick<Coffee, "name"| "price">;

const coffeeInfo: basicCoffeeInfo = {
    name: "Brew",
    price: 100
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretingredients: string;
};

type publicChai = Omit<ChaiNew, "secretingredients">;

