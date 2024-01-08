// ❗ ЗАДАЧА #1

// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.

// ТЕСТИ

// ✅ Оголошена змінна productName
// ✅ Значення змінної productName - це рядок "Droid"
// ✅ Оголошена змінна pricePerItem
// ✅ Значення змінної pricePerItem - це число 2000

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

//----------------------------------------------------

// ❗ ЗАДАЧА #2

// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// ТЕСТИ

// ✅ Змінна pricePerItem оголошена за допомогою let
// ✅ При оголошенні змінної pricePerItem присвоєно значення — число 2000
// ✅ Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// ✅ Змінна productName оголошена за допомогою let
// ✅ При оголошенні змінної productName присвоєно значення — рядок "Droid"
// ✅ Змінній productName присвоєно нове значення — рядок "Repair droid"

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;
// console.log(productName);
// console.log(pricePerItem);

// ---------------------------------------------------

// ❗ ЗАДАЧА #3

// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// ТЕСТИ

// ✅ Оголошена змінна topSpeed
// ✅ Значення змінної topSpeed - це число 160
// ✅ Оголошена змінна distance
// ✅ Значення змінної distance - це число 617.54
// ✅ Оголошена змінна login
// ✅ Значення змінної login - це рядок "mango935"
// ✅ Оголошена змінна isOnline
// ✅ Значення змінної isOnline - це буль true
// ✅ Оголошена змінна isAdmin
// ✅ Значення змінної isAdmin - це буль false

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

//--------------------------------------------------

// ❗ ЗАДАЧА #4

// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// ТЕСТИ

// ✅ Оголошена змінна pricePerItem
// ✅ Значення змінної pricePerItem - це число 3500
// ✅ Оголошена змінна orderedQuantity
// ✅ Значення змінної orderedQuantity - це число 4
// ✅ Оголошена змінна totalPrice
// ✅ Значення змінної totalPrice - це число 14000
// ✅ Використаний оператор *

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = (pricePerItem * orderedQuantity);
// console.log(totalPrice);

// --------------------------------------------------

// ❗ ЗАДАЧА #5

// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// ТЕСТИ

// ✅ Оголошена змінна productName
// ✅ Значення змінної productName - це рядок "Droid"
// ✅ Оголошена змінна pricePerItem
// ✅ Значення змінної price - це число 3500
// ✅ Оголошена змінна message
// ✅ Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//----------------------------------------------------

// ❗ ЗАДАЧА #6

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// ТЕСТИ

// ✅ Оголошена змінна orderedQuantity
// ✅ Значення змінної orderedQuantity - це число 6
// ✅ Оголошена змінна pricePerDroid
// ✅ Значення змінної pricePerDroid - це число 800
// ✅ Оголошена змінна deliveryFee
// ✅ Значення змінної deliveryFee - це число 50
// ✅ Оголошена змінна totalPrice
// ✅ Значення змінної totalPrice - це число 4850
// ✅ Оголошена змінна message
// ✅ Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

//----------------------------------------------------

// ❗ ЗАДАЧА #7

// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// ТЕСТИ

// ✅ Очікується оголошення функції
// ✅ Функції присвоєно ім'я sayHi
// ✅ В тілі функції sayHi є console.log("Hello, this is my first function!")
// ✅ Після оголошення є виклик функції sayHi

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

//----------------------------------------------------

// ❗ ЗАДАЧА #8

// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// ТЕСТИ

// ✅ Оголошена функція add(a, b, c)
// ✅ Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// ✅ Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// ✅ Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//----------------------------------------------------

// ❗ ЗАДАЧА #9

// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// ТЕСТИ

// ✅ Оголошена функція add(a, b, c)
// ✅ У функції add є оператор return
// ✅ Виклик add(15, 27, 10) повертає 52
// ✅ Виклик add(10, 20, 30) повертає 60
// ✅ Виклик add(5, 10, 15) повертає 30
// ✅ Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function add(a, b, c) {
//     return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//-----------------------------------------------------

// ❗ ЗАДАЧА #10

// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де < product name > і < product price > - це значення параметрів name і price.Використовуй синтаксис шаблонних рядків.

// ТЕСТИ

// ✅ Оголошена функція makeMessage(name, price)
// ✅ Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// ✅ Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// ✅ Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// ✅ Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

//----------------------------------------------------

// ❗ ЗАДАЧА #11

// Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// ТЕСТИ

// ✅ Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// ✅ Виклик calculateTotalPrice(5, 100) повертає 500
// ✅ Виклик calculateTotalPrice(8, 60) повертає 480
// ✅ Виклик calculateTotalPrice(3, 400) повертає 1200
// ✅ Виклик calculateTotalPrice(1, 3500) повертає 3500
// ✅ Виклик calculateTotalPrice(12, 70) повертає 840
// ✅ Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = (orderedQuantity * pricePerItem);
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//-----------------------------------------------------

//❗ ЗАДАЧА #12

// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".Не забудь про ціну доставки в обчисленнях загальної вартості.

// ТЕСТИ

// ✅ Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// ✅ Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// ✅ Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// ✅ Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid + deliveryFee)} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//-----------------------------------------------------

// ❗ ЗАДАЧА #13

// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// ТЕСТИ

// ✅ Оголошена функція isAdult(age)
// ✅ У виразі перевірки використовується оператор >=
// ✅ Виклик isAdult(20) повертає true
// ✅ Виклик isAdult(14) повертає false
// ✅ Виклик isAdult(8) повертає false
// ✅ Виклик isAdult(37) повертає true

//🧩🧩🧩🧩🧩🧩🍀🍀🍀🍀🍀🍀🍀🍀
// function isAdult(age) {
//   const passed = (age >= 18);
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//-----------------------------------------------------

//❗ ЗАДАЧА #14

// Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// ТЕСТИ

// ✅ Оголошена функція isValidPassword(password)
// ✅ У виразі перевірки паролів використаний оператор
// ✅ Виклик isValidPassword("mangodab3st") повертає false
// ✅ Виклик isValidPassword("kiwirul3z") повертає false
// ✅ Виклик isValidPassword("jqueryismyjam") повертає true
