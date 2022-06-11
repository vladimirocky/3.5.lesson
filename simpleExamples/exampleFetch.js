/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 */


const URL = 'https://jsonplaceholder.typicode.com/posts';

async function getWithFetch() {
    const response = await fetch(URL);
    const json = await response.json();
    const data = await fetch(`${URL}/${json[45].id}`);
    const json2 = await data.json();
    console.log(json2);
}

function postWithFetch() { // сохранение нового поста
    fetch(URL, {
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

getWithFetch();
postWithFetch();