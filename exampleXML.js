function getWithXhr() {
    let xhr = new XMLHttpRequest(); // создание инстанса обьекта

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts') // инициализация с параметрами
    xhr.send() // отправка запроса
    xhr.onload = ()=> { // обработчик при загрузке
        console.log(JSON.parse(xhr.response));
    }
    xhr.onerror = ()=> { // обработчик при ошибке
    }
}

function postWithXhr() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    xhr.send(JSON.stringify({ // тело запроса(данные)
        title: 'test post 53x',
        body: 'lorem',
        userId: 1,
    }))
    xhr.onload = ()=> {
        console.log(JSON.parse(xhr.response));
    }
}