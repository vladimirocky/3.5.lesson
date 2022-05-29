/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Используя xhr.status
 *  Выводите в консоль текст код-статуса ответа
 */


const postsURL = 'https://jsonplaceholder.typicode.com/posts';

function getWithXhr() {
    // создание инстанса объекта
    let xhr = new XMLHttpRequest();
    // инициализация соединения с параметрами
    xhr.open('GET', postsURL)
    xhr.send() // отправка запроса
    xhr.onload = ()=> { // обработчик при загрузке
        console.log(JSON.parse(xhr.response));
        console.log(`Загрузка произведенна успешна, №-Статуса:${xhr.status} содержание: ${xhr.statusText}`);
    }
    xhr.onerror = ()=> { // обработчик при ошибке
        console.log(`Загрузка произведенна неудачна №-статуса:${xhr.status} содержание: ${xhr.statusText}`);
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
        console.log(`Загрузка произведенна успешна, №-Статуса:${xhr.status} содержание: ${xhr.statusText}`);
    }
    xhr.onerror = () =>{
        console.log(`Загрузка произведенна неудачна №-статуса:${xhr.status} содержание: ${xhr.statusText}`);
    }
}

getWithXhr();
postWithXhr();