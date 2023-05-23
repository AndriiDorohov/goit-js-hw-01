const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let inputPassword = prompt('Enter the administrator password');

if (inputPassword === null) {
    message = 'Canceled by user!';
} else if (inputPassword === ADMIN_PASSWORD) {
    message = 'Welcome!';
} else {
    message = 'Access denied, incorrect password!';
}
alert(message);
