const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;


let countrySelect = prompt('Введите страну').toLowerCase();                     //преобразовуем в строчные символы введенное слово
countrySelect = countrySelect.slice(0,1).toUpperCase()+countrySelect.slice(1);  //делаем первый символ названия с большой буквы

switch (countrySelect) {
    case 'Китай':
    alert(`Доставка в ${countrySelect} будет стоить ${china}`);
    break;
    case 'Чили':
    alert(`Доставка в ${countrySelect} будет стоить ${chili}`);
    break;
    case 'Австралия':
    alert(`Доставка в ${countrySelect} будет стоить ${australia}`);
    break;
    case 'Индия':
    alert(`Доставка в ${countrySelect} будет стоить ${india}`);
    break;
    case 'Ямайка':
    alert(`Доставка в ${countrySelect} будет стоить ${jamaica}`);
    break;
    default : alert('В вашей стране доставка недоступна')
}
