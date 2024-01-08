❗ ЗАДАЧА #1

Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

ТЕСТИ

✅ Оголошена функція checkAge(age).
✅ У виразі перевірки віку використаний оператор >=
✅ Виклик checkAge(20) повертає "You are an adult"
✅ Виклик checkAge(8) повертає "You are a minor"
✅ Виклик checkAge(14) повертає "You are a minor"
✅ Виклик checkAge(38) повертає "You are an adult"
✅ В тілі функції є тільки одна інструкція if
✅ В тілі функції відсутні інструкції else або else if


🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
----------------------------------------------------

❗ ЗАДАЧА #2

Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

available - загальна кількість товарів на складі
ordered - одиниць товару в замовленні
Використовуючи розгалуження, доповни код функції таким чином, що:

Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
В іншому випадку записується рядок "Order is processed, our manager will contact you.".

ТЕСТИ

✅ Оголошена функція checkPassword(password)
✅ Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
✅ Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
✅ Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

---------------------------------------------------

❗ ЗАДАЧА #3

Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

ТЕСТИ

✅ Оголошена функція checkStorage(available, ordered)
✅ Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
✅ Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
✅ Виклик checkStorage(70, 0) повертає "Your order is empty!"
✅ Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
✅ Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
✅ Виклик checkStorage(150, 0) повертає "Your order is empty!"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (available < ordered) {
//     return "The order is accepted, our manager will contact you";
//   }
//     return "Your order is too large, not enough goods in stock!";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

--------------------------------------------------

❗ ЗАДАЧА #4

Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".


ТЕСТИ

✅ Оголошена змінна fruits
✅ Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);
--------------------------------------------------

❗ ЗАДАЧА #5

Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

Ім'я змінної	Значення змінної
firstElement	перший елемент масиву
secondElement	другий елемент масиву
lastElement	останній елемент масиву

ТЕСТИ

✅ Оголошена змінна firstElement
✅ Значення змінної firstElement - це рядок "apple"
✅ Оголошена змінна secondElement
✅ Значення змінної secondElement - це рядок "plum"
✅ Оголошена змінна lastElement
✅ Значення змінної lastElement - це рядок "orange"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

----------------------------------------------------

❗ ЗАДАЧА #6

Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

ТЕСТИ

✅ Оголошена змінна fruits
✅ Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

----------------------------------------------------

❗ ЗАДАЧА #7

Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.



ТЕСТИ

✅ Оголошена змінна fruitsArrayLength
✅ Значення змінної fruitsArrayLength - це число 4

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

----------------------------------------------------

❗ ЗАДАЧА #8

Оголоси дві зміні:

Ім'я змінної	Очікуване значення
lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
lastElement	Значення останнього елемента масиву

ТЕСТИ

✅ Оголошена змінна lastElementIndex
✅ Значення змінної lastElementIndex - це число 3
✅ Оголошена змінна lastElement
✅ Значення змінної lastElement - це рядок "banana"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

----------------------------------------------------

❗ ЗАДАЧА #9

Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

ТЕСТИ

✅ Оголошена функція getExtremeElements(array)
✅ Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
✅ Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
✅ Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]


🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


-----------------------------------------------------

❗ ЗАДАЧА #10

Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

ТЕСТИ

✅ Оголошена функція splitMessage(message, delimiter)
✅ Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
✅ Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
✅ Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function splitMessage(message, delimiter) {
//   let words;
// words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

----------------------------------------------------

❗ ЗАДАЧА #11

Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

ТЕСТИ

✅ Оголошена функція calculateEngravingPrice(message, pricePerWord)
✅ Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
✅ Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
✅ Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
✅ Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function calculateEngravingPrice(message, pricePerWord) {
// const words = message.split(" ");
//   const wordCount = words.length;
//   return wordCount * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

-----------------------------------------------------

❗ ЗАДАЧА #12

Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

ТЕСТИ

✅ Оголошена функція makeStringFromArray(array, delimiter)
✅ Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
✅ Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
✅ Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function makeStringFromArray(array, delimiter) {
//   let string;
// string = array.join(delimiter)
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


-----------------------------------------------------

❗ ЗАДАЧА #13

Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

Увага
Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами
Усі символи slug повинні бути у нижньому регістрі
Всі слова slug повинні бути розділені тире
    

ТЕСТИ

✅ Оголошена функція slugify(title)
✅ Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
✅ Виклик slugify("English for developer") повертає "english-for-developer"
✅ Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
✅ Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(' ').join('-');
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


-----------------------------------------------------

❗ ЗАДАЧА #14

Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

firstTwoEls - масив із перших двох елементів
nonExtremeEls - масив з усіх елементів, крім першого та останнього
lastThreeEls - масив із трьох останніх елементів

ТЕСТИ

✅ Оголошена змінна fruits
✅ Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
✅ Оголошена змінна firstTwoEls
✅ Значення змінної firstTwoEls - це масив ["apple", "plum"]
✅ Оголошена змінна nonExtremeEls
✅ Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
✅ Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
✅ Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

-----------------------------------------------------

❗ ЗАДАЧА 15

Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

ТЕСТИ

✅ Оголошена змінна oldClients
✅ Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
✅ Оголошена змінна newClients
✅ Значення змінної newClients - це масив ["Peach", "Houston"]
✅ Оголошена змінна allClients
✅ Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
✅ Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);

-----------------------------------------------------

❗ ЗАДАЧА 16

Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

ТЕСТИ

✅ Оголошена функція makeArray(firstArray, secondArray, maxLength)
✅ Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
✅ Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
✅ Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
✅ Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
✅ Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
✅ Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
✅ Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив


🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function makeArray(firstArray, secondArray, maxLength) {
//   const combinedArray = firstArray.concat(secondArray);
//   if (combinedArray.length > maxLength) {
//     return combinedArray.slice(0, maxLength);
//   }
//   return combinedArray;
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

