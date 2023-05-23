const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

let countrySelect = prompt('Enter a country').toLowerCase();
countrySelect = countrySelect.slice(0, 1).toUpperCase() + countrySelect.slice(1);

switch (countrySelect) {
    case 'China':
        alert(`The delivery to ${countrySelect} will cost ${china}`);
        break;
    case 'Chile':
        alert(`The delivery to ${countrySelect} will cost ${chili}`);
        break;
    case 'Australia':
        alert(`The delivery to ${countrySelect} will cost ${australia}`);
        break;
    case 'India':
        alert(`The delivery to ${countrySelect} will cost ${india}`);
        break;
    case 'Jamaica':
        alert(`The delivery to ${countrySelect} will cost ${jamaica}`);
        break;
    default:
        alert('Delivery is not available in your country');
}
