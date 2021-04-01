let message = prompt ('password', "");

const ADMIN_PASSWORD = '1111';

if (message == null) {

    message = "Отменено пользователем!";

}else if (message == ADMIN_PASSWORD) {

    message = "Добро пожаловать!";

} else {

    message = "Доступ запрещен, неверный пароль!";

}

alert (message);