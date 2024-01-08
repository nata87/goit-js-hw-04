                        числа

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"


                    Перевірка на число

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false
const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true


                         Клас Math​

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10



                        Методи

Number.parseFloat()​
Number.parseInt() парсить з рядка ціле число.

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

                        Рядки
                        
Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${вираз}.

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"


            Властивості і методи рядків

​
Властивість length.
const message = "Welcome to Bahamas!";
console.log(message.length); // 19

---------------------------------------------------
toLowerCase()
---------------------------------------------------
toUpperCase()
---------------------------------------------------
indexOf()​      Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1
----------------------------------------------------
includes()​

Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

const productName = "Ремонтний дроїд";
console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
---------------------------------------------------

endsWith()​

Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true
---------------------------------------------------
    
replace()
replaceAll()​

Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

------------------------------------------------------
slice()​
Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"


                ОТРИМАННЯ ДАНИХ

confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);
-------------------------------------------------------
prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.