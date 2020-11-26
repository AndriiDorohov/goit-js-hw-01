const ADMIN_PASSWORD = 'jqueryismyjam'
let message;
message = prompt('Введите пароль администратора');

if (message === null) {message = 'Отменено пользователем!';}
    else 
    if (message === ADMIN_PASSWORD) {message = 'Добро пожаловать!';}
        else {message = 'Доступ запрещен, неверній пароль!'};
alert(message);