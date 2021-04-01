let credits = 35500;

const pricePerDroid = 3000;

let totalPrice = 0;

let numberDroids = prompt ("3000 credits for 1 droid","");

let message;

console.log (numberDroids);


if (numberDroids === null) {

    message = "Отменено пользователем!";

}
// else if (Number.isNaN(numberDroids)) {

//     message = "Вы ввели не число";                 ??????????????????

// }
else if (numberDroids === "") {

    message = 'Вы не ввели количество!';

} else if (numberDroids * 3000 > credits) {

    message = "Недостаточно средств на счету!";

} else if (numberDroids * 3000 < credits) {

    credits = credits - (numberDroids * 3000);

    totalPrice = (numberDroids * 3000);

    message = `Вы купили ${numberDroids} дроидов, на счету осталось ${credits}. Вы потратили ${totalPrice} кредитов!`;

}

alert(message);