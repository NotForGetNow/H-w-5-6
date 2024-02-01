// Диапазон
// let a = +prompt('Введите число 1')
// let b = +prompt('Введите число 2')
// let sum = 0
// for (let i = sum; i <= b; i++){
//     sum++
// }
// alert(sum)


// Наибльший общий делитель
// let num1 = prompt('Введите число 1')
// let num2 = prompt('Введите число 2')
// const del = (a, b) => {
//     if (b !== 0){
//         c = a % b;
//         return del(b, c);
//     }
//     return a
// }
// alert(del(num1, num2))


// Все делители
// let num = prompt('Введите число')
// let i = 1
// while ( i <= num) {
//     if ( num % i === 0) {
//         document.write(i + ' ')
//     }
//     i++
// }


// Определить количество цифр 
// let num = prompt('Введите число')
// alert(num.length)
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;
// const userInput = prompt("Введите 10 чисел через пробел:");
// const numbers = userInput.split(' ').map(Number);
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number > 0) {
//         positiveCount++;
//     } else if (number < 0) {
//         negativeCount++;
//     } else {
//         zeroCount++;
//     }
//     if (number % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// alert(positiveCount)
// alert(negativeCount)
// alert(zeroCount)
// alert(evenCount)
// alert(oddCount)


// Зацикленный калькулятор
// let continueCalculating = true;
// while (continueCalculating) {
//     const number1 = parseFloat(prompt("Введите первое число:"));
//     const number2 = parseFloat(prompt("Введите второе число:"));
//     const operator = prompt("Введите знак операции (+, -, *, /):");

//     if (isNaN(number1) || isNaN(number2)) {
//         alert("Пожалуйста, введите корректные числа.");
//         continue;
//     }
//     let result;
//     switch (operator) {
//         case '+':
//             result = number1 + number2;
//             break;
//         case '-':
//             result = number1 - number2;
//             break;
//         case '*':
//             result = number1 * number2;
//             break;
//         case '/':
//             if (number2 === 0) {
//                 alert("Ошибка: деление на ноль.");
//                 continue;
//             }
//             result = number1 / number2;
//             break;
//         default:
//             alert("Неверный знак операции.");
//             continue;
//     }
//     alert(`Результат: ${result}`);
//     const userResponse = prompt("Хотите решить еще один пример? (да/нет)").toLowerCase();
//     continueCalculating = userResponse === 'да';
// }
// alert("Выход из калькулятора.");