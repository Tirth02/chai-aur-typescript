function getChai(kind) {
    if (typeof (kind) === 'string') {
        return `Making ${kind} chai.....`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    else {
        return `Serving default masala chai`;
    }
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai.....`;
    }
    if (size === 'medium' || size === 'Large') {
        return `make extra chai....`;
    }
    return `chai order #${size}`;
}
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cUTTING Chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
console.log(serveOrder({ type: "masala chai", sugar: 2 }));
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spicelevel}`;
            break;
        case "ginger":
            return `Making ginger chai with amount ${order.amount}`;
            break;
        case "elaichi":
            return `Making elaichi chai with aroma ${order.aroma}`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
export {};
// function isStringArray(arr: unknown): arr is string[]{
// }
//# sourceMappingURL=typeNarrowing.js.map