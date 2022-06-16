/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Используя xhr.status
 *  Выводите в консоль текст код-статуса ответа
 */

const postsURL = 'https://jsonplaceholder.typicode.com/posts';
let out = document.getElementById("userID");
let btn = document.getElementById("ButtonValue");

function consoleOut(id, text, number) {
    for (let i = 0; i < number; i++) {
        console.log("Статус:", id, "Строка: ", text[i].title);
        document.getElementById("input").innerHTML += `"Статус:", ${id}, "Строка: ", ${text[i].title}<br>`;
    }
}

function getWithXhr() {
    // создание инстанса объекта
    let xhr = new XMLHttpRequest();
    // инициализация соединения с параметрами
    xhr.open('GET', postsURL)
    xhr.send() // отправка запроса
    xhr.onload = ()=> { // обработчик при загрузке
        console.log(JSON.parse(xhr.response));

        btn.addEventListener('click', () => {
            document.getElementById("input").innerHTML = "";
            if (out.value < 101) { 
                consoleOut(xhr.status, JSON.parse(xhr.response), out.value);
                console.log(`Результат ${out.value}`)
                document.getElementById("counter").innerHTML = `Откройте консоль<br>Результат ${out.value}`
            } else {
                document.getElementById("counter").innerHTML = `Количество должно быть меньше 101`;
            }
        })

    }
    xhr.onerror = ()=> { // обработчик при ошибке
    }
    
}

function postWithXhr() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', postsURL)
    xhr.send(JSON.stringify({ // тело запроса(данные)
        title: 'test post 53x',
        body: 'lorem',
        userId: 1,
    }))
    xhr.onload = ()=> {
        console.log(JSON.parse(xhr.response));
    }
}

getWithXhr();
postWithXhr();