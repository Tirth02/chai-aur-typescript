const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};
let tea;
tea = {
    name: "Ginger Tea",
    price: 32,
    isHot: true
};
const adrakwaliChai = {
    name: "Adrak chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "12345"
};
const updatedChai = (updates) => {
    console.log("Updating chai with", updates);
};
updatedChai({ price: 25 });
updatedChai({ isHot: false });
updatedChai({}); // Sometime this can be issue with the Partial sending empty object is possible through partial which can cause error
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 9
});
const coffeeInfo = {
    name: "Brew",
    price: 100
};
export {};
//# sourceMappingURL=objectTs.js.map