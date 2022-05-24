/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Используя xhr.status
 *  Выводите в консоль текст код-статуса ответа
 */


 function getWithXhr() {
    // создание инстанса объекта
    let xhr = new XMLHttpRequest();
    // инициализация соединения с параметрами
    xhr.open("GET", postsURL);
    xhr.send(); // отправка запроса
    xhr.onload = () => {
      // обработчик при загрузке
  
      if (xhr.status != 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        console.log(`статус: ${xhr.status}`);
      }
    };
    xhr.onerror = () => {
      // обработчик при ошибке
    };
  }

  function postWithXhgfmr() {
    let xhr = new XMLHttpRequest();
  
    xhr.open('POST', postsURL)
    xhr.send(JSON.stringify({ // тело запроса(данные)
        title: 'test post 53x',
        body: 'lorem',
        userId: 1,
    }))
    xhr.onload = ()=> {
        console.log(`requst code: ${xhr.status}`);
    }
  }
  

getWithXhr();
postWithXhr();