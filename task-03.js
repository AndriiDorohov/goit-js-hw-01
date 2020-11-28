const ADMIN_PASSWORD = 'jqueryismyjam'
let message;
let inputPassword = prompt('Введите пароль администратора');

if (inputPassword === null) {message = 'Отменено пользователем!';}
    else 
    if (inputPassword === ADMIN_PASSWORD) {message = 'Добро пожаловать!';}
        else {message = 'Доступ запрещен, неверній пароль!'};
alert(message);
