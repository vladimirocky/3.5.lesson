export default
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