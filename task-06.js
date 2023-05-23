let input;
let total = 0;

while (input !== null) {
    input = prompt('Enter a number');
    
    if (input !== null) {
        input = Number(input);
    }
    
    if (Number.isNaN(input) === false) {
        total = (total + input);
    }
};

alert(`The total sum of numbers is ${total}`);