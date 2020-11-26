let input;
let total = 0;

while (input !== null)  {                   //проверяем на нажатие Cancel
    input = prompt('Введите число');
    
    if (input !== null)                     
    {input = Number(input);}                //если было введено значение, переведем его в число
    
    if (Number.isNaN(input) === false) {   //если введено число, а не символ, тогда выполняем сложение иначе возвращаемся в начало цикла
    total = (total + input);}
};
alert (`Общая сумма чисел равна ${total}`)
