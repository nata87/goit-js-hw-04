❗ ЗАДАЧА #1

Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

ТЕСТИ

✅ Оголошена змінна start
✅ Значення змінної start - це число 3
✅ Оголошена змінна end
✅ Значення змінної end - це число 7
✅ Оголошена змінна i - лічильник циклу
✅ Початкове значення змінної i дорівнює 3
✅ Умова циклу приводиться до true доти, доки i менше або дорівнює 7
✅ На кожній ітерації значення змінної i збільшується на одиницю
✅ Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }
----------------------------------------------------

❗ ЗАДАЧА #2

Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

ТЕСТИ

✅ Оголошена функція calculateTotal(number)
✅ Виклик функції calculateTotal(1) повертає 1
✅ Виклик функції calculateTotal(3) повертає 6
✅ Виклик функції calculateTotal(7) повертає 28
✅ Виклик функції calculateTotal(18) повертає 171
✅ Виклик функції calculateTotal(24) повертає 300
✅ Виклик функції calculateTotal() з випадковим числом повертає правильне значення

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function calculateTotal(number) {
// let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

---------------------------------------------------

❗ ЗАДАЧА #3

Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

ТЕСТИ

✅ Оголошена змінна fruits
✅ Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
✅ Оголошена змінна i - лічильник циклу
✅ Початкове значення змінної i дорівнює 0
✅ Умова циклу приводиться до true доти, доки i менше за 4
✅ На кожній ітерації значення змінної i збільшується на одиницю
✅ В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
✅ В тілі циклу for використовується виведення у консоль змінної fruit

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

--------------------------------------------------

❗ ЗАДАЧА #4

Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.


ТЕСТИ

✅ Оголошена функція calculateTotalPrice(order)
✅ Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
✅ Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
✅ Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
✅ Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function calculateTotalPrice(order) {
//   let total = 0;
// for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
--------------------------------------------------

❗ ЗАДАЧА #5

Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

ТЕСТИ

✅ Оголошена функція findLongestWord(string)
✅ Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
✅ Виклик функції findLongestWord("Google do a roll") повертає Google
✅ Виклик функції findLongestWord("May the force be with you") повертає force
✅ Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function findLongestWord(string) {
// const words = string.split(" ");
//   let longestWord = words[0];
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

----------------------------------------------------

❗ ЗАДАЧА #6

Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

ТЕСТИ

✅ Оголошена функція createArrayOfNumbers(min, max)
✅ Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
✅ Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
✅ Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
✅ Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
В циклі for використовувався метод push

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

----------------------------------------------------

❗ ЗАДАЧА #7

Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

ТЕСТИ

✅ Оголошена функція filterArray(numbers, value)
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
✅ Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
✅ Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
✅ Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
В циклі for використовувався метод push

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// let filteredArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   }
//   return filteredArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

----------------------------------------------------

❗ ЗАДАЧА #8

Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

Доповни код функції таким чином, що якщо:

фрукт присутній в масиві, то функція повертає true;
фрукт відсутній в масиві, то функція повертає false.

ТЕСТИ

✅ Оголошена функція checkFruit(fruit)
✅ Виклик checkFruit("plum") повертає true
✅ Виклик checkFruit("mandarin") повертає false
✅ Виклик checkFruit("pear") повертає true
✅ Виклик checkFruit("Pear") повертає false
✅ Виклик checkFruit("apple") повертає true
✅ Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
✅ У функції використовувався метод includes

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

----------------------------------------------------

❗ ЗАДАЧА #9

Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

ТЕСТИ

✅ Оголошена функція getCommonElements(array1, array2)
✅ Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
✅ Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
✅ Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
✅ Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
✅ Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
✅ Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
✅ В циклі for використовувалися методи includes і push


🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function getCommonElements(array1, array2) {
// let commonElements = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


-----------------------------------------------------

❗ ЗАДАЧА #10

Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

ТЕСТИ

✅ Оголошена функція calculateTotalPrice(order)
✅ Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
✅ Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
✅ Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
✅ Виклик функції calculateTotalPrice([]) повертає 0
✅ Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
//     total += price;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

----------------------------------------------------

❗ ЗАДАЧА #11

Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

ТЕСТИ

✅ Оголошена функція filterArray(numbers, value)
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
✅ Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
✅ Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
✅ Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
✅ Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
✅ Функція filterArray() використовує цикл for..of

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


-----------------------------------------------------

❗ ЗАДАЧА #12

Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

ТЕСТИ

✅ Оголошена змінна a
✅ Значення змінної a - це число 0
✅ Оголошена змінна b
✅ Значення змінної b - це число 1
✅ Оголошена змінна c
✅ Значення змінної c - це число 3
✅ Оголошена змінна d
✅ Значення змінної d - це число 5
✅ Оголошена змінна e
✅ Значення змінної e - це число 2

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


-----------------------------------------------------

❗ ЗАДАЧА #13

Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
    

ТЕСТИ

✅ Оголошена функція getEvenNumbers(start, end)
✅ Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
✅ Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
✅ Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
✅ Виклик функції getEvenNumbers(8, 8) повертає [8]
✅ Виклик функції getEvenNumbers(7, 7) повертає []
✅ Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function getEvenNumbers(start, end) {
// const result = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


-----------------------------------------------------

❗ ЗАДАЧА #14

Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

ТЕСТИ

✅ Оголошена змінна start зі значенням 6
✅ Оголошена змінна end зі значенням 27
✅ Оголошена змінна number без ініціалізації
✅ Підсумкове значення змінної number дорівнює 10
✅ В циклі for використовується break для виходу до завершення усіх ітерацій циклу

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

-----------------------------------------------------

❗ ЗАДАЧА 15

Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

повертала перше число від start до end, яке ділиться на divisor без остачі
не використала оператор break
не використала змінну number

ТЕСТИ

✅ Оголошена функція findNumber(start, end, divisor)
✅ Виклик findNumber(2, 6, 5) повертає 5
✅ Виклик findNumber(8, 17, 3) повертає 9
✅ Виклик findNumber(6, 9, 4) повертає 8
✅ Виклик findNumber(16, 35, 7) повертає 21
✅ Виклик findNumber() з випадковим набором чисел повертає правильний результат
✅ В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return null;
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

-----------------------------------------------------

❗ ЗАДАЧА 16

Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

ТЕСТИ

✅ Оголошена функція includes(array, value)
✅ Виклик includes([1, 2, 3, 4, 5], 3) повертає true
✅ Виклик includes([1, 2, 3, 4, 5], 17) повертає false
✅ Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
✅ Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
✅ Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
✅ Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
✅ Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
✅ У функції includes використовується for, return, але не метод масиву includes


🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function includes(array, value) {
// for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

