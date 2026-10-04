const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5,5.0];

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala",price: 20},
    {name: "Adrak",price: 25},
]


const cities: readonly string[] = ["Delhi","Ahmedabad"]
// cities.push("Pune")

const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// tuples

let chaiTupple: [string, number];
chaiTupple = ["Masala",20];
// chaiTupple = [20,"Masala"] not allowed follow the order

let userInfo: [string,number, boolean?]
userInfo = ["Tirth",100]
userInfo = ["Tirth",100, true]

const location: readonly [number,number]= [28.66, 12.88]; // This is a readonly tuple, we cannot change the values of this tuple.

// named tuples
const chaiItems: [name: string, price: number] = ["Masala", 20]

// Enums
enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE;

// autoincremented enums

enum Status{
    PENDING = 100,
    SERVED, // AUTOMATICALLY INCREMENTED TO 101
    CANCELLED // AUTOMATICALLY INCREMENTED TO 102
}


enum ChaiType{
    MASALA = "masala",
    GINGER = "ginger",
    ELAICHI = "elaichi"
}

function makeChai(type: ChaiType)
{
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala"); // This will give error because we are passing a string instead of enum value.

// Not a good practice to use enums with string values because it will not give error if we pass a string value which is not in the enum. So, it is better to use enums with number values.
enum randomEnum{
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.LOW 

let t: [string,number] = ["chai",10]

t.push("extra") // This will not give error because we can push any value to the tuple but it will give error if we try to access the value at index 2 because it is not defined in the tuple type.