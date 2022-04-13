
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