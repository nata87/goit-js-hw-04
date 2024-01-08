                        ✳️✴️   МАСИВИ
                                
const clients = ["Mango", "Poly", "Ajax"];

// Зазначаючи в дужках індекс елемента, ми отримуємо його значення
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

------------------------------------------------------------------------------------------
                        ✳️✴️   Перевизначення масиву

На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]

-----------------------------------------------------------------------------------------
                        ✳️✴️   Довжина масиву
                            
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3

Індекс останнього елемента

const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

-----------------------------------------------------------------------------------------
                         ✳️✴️   Ітерація по масиву
                        ***СICLO FOR***

const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

                       *** CICLO FOR ...OF ***
                         
Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.
                        
for (const variable of iterable) {
  // тіло циклу
}
----------------------------------------------
const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}
-----------------------------------------------
const string = "javascript";

for (const character of string) {
  console.log(character);
}

-----------------------------------------------------------------------------------------
                        ✳️✴️   Оператори break і continue                       

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }

  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
-------------------------------------------------
  
  
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}


------------------------------------------------------------------------------------------
                         ✳️✴️   Присвоєння за посиланням і за значенням

Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються.Примітиви: рядки, числа, булі, null і undefined, під час присвоєння повністю копіюються за значенням(by value).


Зі складними типами - все по-іншому. У змінній, якій присвоєно масив або об'єкт, зберігається не саме значення, а адреса його місця в пам'яті, іншими словами - посилання (вказівник) на нього і вони передаються за посиланням (by reference).
                         

Усі примітивні типи присвоюються за значенням, тобто створюється копія.

let a = 5;
// Присвоєння за значенням, в пам'яті буде створена ще
// одна комірка, в яку буде скопійоване значення 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Змінимо значення a
a = 10;
console.log(a); // 10
// Значення b не змінилося, оскільки це окрема копія
console.log(b); // 5

--------------------------------------------------
                             
Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна просто отримує посилання на вже існуючий об'єкт.
 
const a = ["Mango"];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
console.log(b); // ["Mango", "Poly"]

// Результат повторюється
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

------------------------------------------------------------------------------------------
                                 ✳️✴️   Методи масиву
split() перетворює рядок в масив, «розбиваючи» його роздільником delimiter
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]


join() об'єднує елементи масиву у рядок.
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

​
indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1


includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно. Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

push() Додають або видаляють крайні елементи масиву.

const numbers = [];
numbers.push(1);
console.log(numbers); // [1]
numbers.push(2);
console.log(numbers); // [1, 2]
numbers.push(3);
console.log(numbers); // [1, 2, 3]
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]  
  
pop()  видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.​

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]
console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]
console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]
console.log(numbers.pop()); //  2
console.log(numbers); // [1]
console.log(numbers.pop()); //  1
console.log(numbers); // []


slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]


Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]


Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]


Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

splice()​
Видаляє, додає і замінює елементи у довільному місці масиву.

                          *************Видалення********************​
Щоб видалити елементи в масиві, передаються два аргументи.

splice(position, num)
position - вказує на позицію (індекс) першого елемента для видалення
num - визначає кількість елементів, що видаляються

Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи. Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]





                 ********************Додавання******************************

​

Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.



splice(position, 0, new_element_1, new_element_2, ...)


Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.


const colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]


                    *******************Заміна**************************


Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових. Для цього необхідно передати мінімум три аргументи. Кількість елементів, що видаляються і додаються, може не збігатися.



splice(position, num, new_element_1, new_element_2, ...)
position - вказує на позицію (індекс) першого елемента для видалення
num - визначає кількість елементів, що видаляються
Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
Наприклад, у нас є масив мов програмування з чотирьох елементів.

const languages = ["C", "C++", "Java", "JavaScript"];
// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]



concat()​ Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];
const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]


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