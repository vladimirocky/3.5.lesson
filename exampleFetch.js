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