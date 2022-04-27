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
  xhr.open('GET', postsURL);
  xhr.send(); // отправка запроса
  xhr.onload = () => {
    // обработчик при загрузке

    console.log(JSON.parse(xhr.response));
    console.log(`Успех номер статуса:${xhr.status} текст: ${xhr.statusText}`);
  };
  xhr.onerror = () => {
    console.log(`Ошибка номер статуса:${xhr.status} текст: ${xhr.statusText}`);
  };
}

function postWithXhr() {
  let xhr = new XMLHttpRequest();

  xhr.open('POST', postsURL);
  xhr.send(
    JSON.stringify({
      // тело запроса(данные)
      title: 'test post 53x',
      body: 'lorem',
      userId: 1,
    })
  );
  xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    console.log(`Успех номер статуса:${xhr.status} текст: ${xhr.statusText}`);
  };
  xhr.onerror = () => {
    console.log(`Ошибка номер статуса:${xhr.status} текст: ${xhr.statusText}`);
  };
}

getWithXhr();
postWithXhr();
