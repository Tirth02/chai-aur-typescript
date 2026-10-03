"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is called union
let subs = '1M';
// Uses of union
let apiRequestStatus = 'pending';
let airlineSeat = 'middle';
airlineSeat = 'aisle';
const orders = ['12', '20', '28', '42'];
// use of any typescript
let currentOrder;
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
}
console.log(typeof (currentOrder));
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map