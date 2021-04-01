let total;

let number = Number(prompt("Введите число для суммы"));

let message;

if (number === 0) {

    message = "Вы не ввели число";

} else if (Number.isNaN(number)) {

    message = "Вы ввели не число";

}

alert(message);