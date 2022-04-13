
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


function getWithFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => { // promise chaining, как вы можете переписать такую вложеность через async await?
            console.log(json); // получили массив из 100 постов
            fetch(`https://jsonplaceholder.typicode.com/posts/${json[45].id}`) // сделали запрос чтобы получить подробные данные поста №45
                .then((response) => response.json())
                .then((data) => console.log(data))
        });
}



function postWithFetch() { // сохранение нового поста
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'test post 53x',
            body: 'lorem',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function getWithFetchCORS() {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        mode: 'same-origin', //CORS - имеет несколько вариантов(no-cors, *cors, same-origin)
    })
        .then((response) => response.json())
        .then((json) => { // promise chaining, как вы можете переписать такую вложеность через async await?
            console.log(json); // получили массив из 100 постов
            fetch(`https://jsonplaceholder.typicode.com/posts/${json[45].id}`) // сделали запрос чтобы получить подробные данные поста №45
                .then((response) => response.json())
                .then((data) => console.log(data))
        });
}
// getWithFetchCORS() // вернет ошибку так запрос отправляется с другого адреса

// тк axios подключен в файле html то у нас есть простой доступ
axios.get('https://jsonplaceholder.typicode.com/posts').then(response=> console.log(response.data))


const someData = {
    title: 'test post 53x',
    body: 'lorem',
    userId: 1,
}
axios.post('https://jsonplaceholder.typicode.com/posts', someData).then(response=> console.log(response.data))
// axios.delete и другие методы запросов


axios({ // еще один способ отправки запроса
    method: 'post',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        title: 'test post 53x',
        body: 'lorem',
        userId: 1,
    }
}).then(response=> console.log(response.data))