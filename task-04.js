const credits = 23580;
let totalPrice = 0;
const priceDroid = 3000;

let quantity = prompt('Введите количество едениц');

if (quantity === null) {console.log('Отменено пользователем!')}
  else {totalPrice = (Number(quantity) * priceDroid);
     if (totalPrice > credits) {console.log('Недостаточно средств на счету')}
     else console.log(`Вы купили ${quantity} дронов, на счету осталось ${credits-totalPrice} кредитов`);};


