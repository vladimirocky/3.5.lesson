const postsssURL = 'https://jsonplaceholder.typicode.com/posts';

function getWithFetchCORS() {
    fetch(postsssURL,{
        //CORS - имеет несколько вариантов(no-cors, *cors, same-origin)
        mode: 'same-origin',
    })
        .then((response) => response.json())
}
// вернет ошибку так запрос отправляется с другого адреса
getWithFetchCORS()