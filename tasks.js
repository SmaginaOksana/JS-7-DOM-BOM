// Задание 1
// console.log(
//   `На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`
// );

// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const getName = document.getElementsByTagName("li");
// for (let name of getName) {
//   console.log(name.innerText);
// }

// for (i = 0; i < getName.length; i++) {
//   i.innerText = [i];
//   console.log(i);
// }

// Задание 3
// // Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// const forRemove = document.querySelectorAll(`.forRemove`);
// forRemove.remove();
// console.log(forRemove);

// Задание 4
// // Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
// const addParagraf = document.querySelector(".addParagraf");
// const paragraf = document.createElement("p");
// paragraf.innerText = "Hello, everyone!";
// paragraf.style.fontSize = "36px";
// paragraf.style.fontWeight = "bold";
// addParagraf.append(paragraf);
// console.log(addParagraf);

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
// const myTags = document.querySelector(".myTags");
// const newTags = (tag, col, content) => {
//   let newTag = document.createElement(tag);
//   newTag.style.color = col;
//   newTag.innerText = content;
//   console.log(newTag);
//   myTags.append(newTag);
//   return newTag;
// };
// newTags("p", "red", "This was made by me");
// newTags("span", "violet", "ABCDEFG");

// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
// const select = document.querySelector("select");
// for (i = 1960; i < 2021; i++) {
//   let option = document.createElement("option");
//   option.textContent = i;
//   select.append(option);
// }
// console.log(select);

// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив.
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const clients = [
//   { name: "Женя", order: true },
//   { name: "Кристина", order: true },
//   { name: "Павел", order: false },
//   { name: "Виолетта", order: false },
//   { name: "Костя", order: true },
// ];

// const orders = document.querySelector(".orders");
// for (i = 0; i < clients.length; i++) {
//   let li = document.createElement("li");
//   if (clients[i].order === true) {
//     li.innerText = `Клиент ${clients[i].name} оплатил заказ`;
//   } else {
//     li.innerText = `Клиент ${clients[i].name} отменил заказ`;
//   }
//   orders.append(li);
// }
// console.log(orders);

// Задание 8
// Есть массив ссылок:
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// let linksArr = [
//   "https://www.amazon.com/",
//   "https://www.youtube.com/",
//   "https://devby.io/",
//   "https://www.google.com/",
//   "https://apple.com/",
// ];
// const links = document.querySelector(".links");
// const div = document.createElement("div");
// div.style.backgroundColor = "grey";
// div.style.padding = "50px";
// for (let link of linksArr) {
//   let a = document.createElement("a");
//   a.textContent = `${link}`;
//   a.style.display = "block";
//   a.style.color = "white";
//   a.style.textDecoration = "none";
//   a.setAttribute(`href`, `${link}`);
//   a.setAttribute(`target`, `_blank`);
//   div.append(a);
// }
// links.append(div);
// console.log(links);
