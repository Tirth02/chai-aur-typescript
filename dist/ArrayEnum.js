"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 20 },
    { name: "Adrak", price: 25 },
];
const cities = ["Delhi", "Ahmedabad"];
// cities.push("Pune")
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// tuples
let chaiTupple;
chaiTupple = ["Masala", 20];
// chaiTupple = [20,"Masala"] not allowed follow the order
let userInfo;
userInfo = ["Tirth", 100];
userInfo = ["Tirth", 100, true];
const location = [28.66, 12.88]; // This is a readonly tuple, we cannot change the values of this tuple.
// named tuples
const chaiItems = ["Masala", 20];
// Enums
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
// autoincremented enums
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // AUTOMATICALLY INCREMENTED TO 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
    ChaiType["ELAICHI"] = "elaichi";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type} chai`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala"); // This will give error because we are passing a string instead of enum value.
// Not a good practice to use enums with string values because it will not give error if we pass a string value which is not in the enum. So, it is better to use enums with number values.
var randomEnum;
(function (randomEnum) {
    randomEnum[randomEnum["ID"] = 1] = "ID";
    randomEnum["NAME"] = "chai";
})(randomEnum || (randomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
const s = Sugars.LOW;
let t = ["chai", 10];
t.push("extra"); // This will not give error because we can push any value to the tuple but it will give error if we try to access the value at index 2 because it is not defined in the tuple type.
//# sourceMappingURL=ArrayEnum.js.map