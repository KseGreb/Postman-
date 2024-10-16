HOMEWORK

Вы должны создать свою API с товарами и совершить к ней запросы GET, POST, PUT, DELETE, используя POSTMAN. Вот вам список товаров, который у вас должен быть

1 - Скопируйте это и вставить в созданный вами документ Items.js

const items = [
    {
name: "t-shirt",
id: "1aa",
price: 20
},
{
name: "shirt",
id: "2bb",
price: 20
},
{
name: "skirt",
id: "3cc",
price: 20
},
{
name: "dress",
id: "4dd",
price: 20
},
{
name: "coat",
id: "5ee",
price: 20
},

2 - Создайте документ index.js : в нем создайте сервер и свяжите его с портом 4000

3 - Сделайте запрос GET через POSTMAN. Вы должны получить все товары, которые у вас находятся в документе Items.js

4 - Сделайте запрос POST через POSTMAN. Добавьте товар с id = "6ff". Name: socks. Price: 8

5 - Сделайте запрос DELETE через POSTMAN. Удалите товар с id = "1aa".

6 - Сделайте запрос PUT через POSTMAN. Измените товар с именем coat
Новое имя = "Cute coat"
id = "5ggg"
price = 800

