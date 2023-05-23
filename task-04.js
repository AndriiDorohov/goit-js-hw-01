const credits = 23580;
let totalPrice = 0;
const priceDroid = 3000;

let quantity = prompt('Enter the quantity');

if (quantity === null) {
    console.log('Canceled by user!');
} else {
    totalPrice = Number(quantity) * priceDroid;
    if (totalPrice > credits) {
        console.log('Insufficient funds on the account');
    } else {
        console.log(`You bought ${quantity} drones, and you have ${credits - totalPrice} credits left on your account`);
    }
}
