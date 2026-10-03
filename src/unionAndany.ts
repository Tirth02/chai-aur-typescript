// This is called union
let subs: number | string = '1M'

// Uses of union
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle'

airlineSeat = 'aisle';

const orders = ['12','20','28', '42'];

// use of any typescript
let currentOrder: string | undefined;

for(let order of orders)
{
    if(order === '28')
    {
        currentOrder = order;
        break;
    }
}

console.log(typeof(currentOrder));


console.log(currentOrder);
