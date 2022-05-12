
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
async function postGetData() {
    // тк axios подключен в файле html то у нас есть простой доступ
    axios.get(postsURL).then(response=> console.log(response.data))


    const someData = {
        title: 'test post 53x',
        body: 'lorem',
        userId: 1,
    }
    await axios.post(postsURL, someData).then(response=> console.log(response.data))
    // axios.delete и другие методы запросов


    await axios({ // еще один способ отправки запроса
        method: 'post',
        headers: { 'content-type': 'application/json; charset=UTF-8' },
        url: postsURL,
        data: {
            title: 'test post 53x',
            body: 'lorem',
            userId: 1,
        }
    }).then(response=> console.log(response.data))

    axios.get(postsURL).then(response => console.log(response.data));
}
postGetData();