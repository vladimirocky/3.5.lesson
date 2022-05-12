/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 */


window.onload = function() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    async function getWithFetch() {
        const response = await fetch(URL)
        let x = await response.json();
        console.log(x); // получили массив из 100 постов
        // сделали запрос чтобы получить подробные данные поста №45
        try {
            let dataToShow = await fetch(`${URL}/${x[45].id}`)
            console.log(await dataToShow.json());
        } catch (error) {
            console.log(error);
        }
    }

    async function postWithFetch() { // сохранение нового поста
        try {
            const response = await fetch(URL, {
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
            console.log(await response.json());
        } catch (error) {
            console.log(error);
        }
    }

    async function showInConsole() {
        await getWithFetch();
        await postWithFetch();
        await getWithFetch();
    }
    showInConsole();
}