                        ✳️✴️   Інструкція if
                                
let cost = 0;
const subscription = "pro";
if (subscription === "pro") {
  cost = 100;
}
console.log(cost); // 100

------------------------------------------------------------------------------------------
                        ✳️✴️   Інструкція if...else

let cost;
const subscription = "free";
if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 0

-----------------------------------------------------------------------------------------
                        ✳️✴️   Інструкція else...
                            
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}
console.log(cost); // 500

-----------------------------------------------------------------------------------------
                         ✳️✴️   Тернарний оператор
                             
<умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна>

let type;
const age = 20;
if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
console.log(type); // "adult"

Виконаємо рефакторинг, замінивши if...else на тернарний оператор.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

-----------------------------------------------------------------------------------------
                        ✳️✴️   Інструкція switch
У деяких випадках незручність читання складних розгалужень if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.
Значення в блоці switch(значення) - рядок або число, яке порівнюється щодо строгої рівності з усіма значеннями в блоках case значення по черзі, зверху вниз.

Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки і одразу перейти до коду за switch у тому випадку, коли перевірка рівності повернула true.

Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням, як і в блоці else для інструкції if...else. Для цього, після усіх блоків case додається блок default. Оператор break після блоку default не потрібен, тому що це вже остання операція, яка буде виконана в switch і управління буде передано коду після нього.

                             
let cost;
const subscription = "premium";
switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500
------------------------------------------------------------------------------------------
                                ✳️✴️   Область видимості
 Будь-яка конструкція, яка використовує фігурні дужки {} (умови, цикли, функції тощо), створює нову локальну область видимості, і змінні, оголошені в цій області видимості, з використанням let або const, - недоступні за межами цього блоку.


if (true) {
  const value = 5;
  console.log("Block scope: ", value); // 5
}
console.log("Global scope: ", value); // ReferenceError: value is not defined                           
--------------------------------------------------
                             

const global = "global";

if (true) {
  const blockA = "block A";

  // Бачимо глобальну + локальну A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Змінні blockB і blockC не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Бачимо глобальну + зовнішню A + локальну B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Змінна blockC не знайдена в доступних областях видимості.
    // Буде помилка звернення до змінної.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // Бачимо глобальну + локальну C
  console.log(global); // global
  console.log(blockC); // block C

  // Змінні blockA і blockB не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// Бачимо лише глобальну
console.log(global); // global

// Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined
                                
------------------------------------------------------------------------------------------
                                 ✳️✴️   Цикли

Цикл - керуюча конструкція у високорівневих мовах програмування, призначена для організації багаторазового виконання набору інструкцій.
Тіло циклу - послідовність інструкцій, призначена для багаторазового виконання.
Ітерація - одноразове виконання тіла циклу.
Умова виходу - вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.
Лічильник - змінна, що зберігає поточний номер ітерації. Цикл не обов'язково містить лічильник, і він не повинен бути один, умова виходу з циклу може залежати від декількох змінних, що змінюються в циклі. 
                             
------------------------------------------------------------------------------------------
                                 ✳️✴️   Цикл while
while (condition) {
  // код, тіло циклу (statement)
                                 }
Якщо condition оцінюється як true, оператор while виконує statement.
Якщо condition оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу while.

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
---------------------------------------------------------------------------------------
                                 ✳️✴️   Цикл do...while

На відміну від циклу while, цикл do...while завжди виконує statement мінімум один раз, перш ніж він оцінить condition.

let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);
                                 
 ----------------------------------------------------------------------------------------
                                 ✳️✴️   Цикл for​
 for (initialization; condition; post-expression) {
  // statements
 }  
 ---------------------------------------------------                                
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}   
-----------------------------------------------------
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}                                 
------------------------------------------------------------------------------------------
                                 ✳️✴️   Оператор break​
break повністю припиняє виконання циклу і передає управління на рядок після його тіла.

Знайдемо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");
------------------------------------------------------------------------------------------
                                ✳️✴️  Оператор continue​
Перериває не увесь цикл, а тільки виконання поточної ітерації. Його використовують, якщо зрозуміло, що на поточній ітерації циклу більше немає що робити

const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}