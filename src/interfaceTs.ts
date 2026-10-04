type ChaiOrder = {
    type: String;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder)
{
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50;
// }

// type CupSize = "small" | "medium" | "large"; // will not work because we cannot implement a type, we can only implement a object type.
interface CupSize{
    size: "small" | "medium" | "large"  // will work because we can implement an interface.
} 

class Chai implements CupSize{  
    size: "small"|"medium"|"large" ="large";
}

type Response = {ok : true} | {ok: false}

// class myRes implements Response{
//     ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"
function orderChai(t: TeaType)
{
    console.log(t);
}

type BaseChai = {tealeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra; // intersection type

const cup: MasalaChai = {
    tealeaves: 2,
    masala: 1
}

type User = {
    username: string,
    bio?: string
}

const u1: User = {username:"Tirth"}
const u2: User = {username:"Het",bio:"Future Doctor"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiCode"