"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });
function pair(a, b) {
    return [a, b];
}
pair("Masala", 20);
pair("Masala", { flavor: "Ginger" });
const numberBox = { content: 10 };
const numberBoxCup = { content: "ten" };
const res = {
    status: 200,
    data: { flavor: "Masala" }
};
//# sourceMappingURL=Generics.js.map