let response = "42";
// forcefully asserting the type of response to be string
let numericLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
// Type assertion is a way to tell the compiler "trust me, I know what I'm doing."
// const inputElement = document.getElementById("input") as HTMLInputElement; 
// console.log(inputElement.value)
let value;
value = "chai";
value = [1, 2, 3];
value = 2.9;
value.toFixed(2); // This is valid because value is of type any, so TypeScript does not check the type of value at compile time.
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.9;
// newValue.toFixed(2) // This will throw an error because newValue is of type unknown, so TypeScript does not allow any operations on it without first checking its type.
if (typeof newValue === "string") {
    newValue.toUpperCase(); // This is valid because we have checked that newValue is of type string, so TypeScript allows us to call string methods on it.
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data; // Type assertion is used here to tell the compiler that data is of type string.
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard!!");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard!!");
        return;
    }
    if (role === "guest") {
        console.log("Redirecting to guest dashboard!!");
        return;
    }
    role;
}
function neverReturn() {
    while (true) {
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map