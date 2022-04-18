/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 */


const URL = 'https://jsonplaceholder.typicode.com/posts';
/*
function getWithFetch() {
    fetch(URL)
        .then((response) => response.json())
        .then((json) => {
           /*
            * как вы можете переписать promise chaining
             * через async await?
            */
           // console.log(json); // получили массив из 100 постов
            // сделали запрос чтобы получить подробные данные поста №45
            
            /*fetch(`${URL}/${json[45].id}`)
                .then((response) => response.json())
                .then((data) => console.log(data))
        });
}
*/

/*
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
*/
async function getWithFetch(){
  let response = await fetch(URL);
  let user = await response.json()
  console.log(user);
  let userId = await fetch(`${URL}/${user[45].id}`);
  let respUser = await userId.json();
  console.log(respUser);

}


  async function postWithFetch(){
      let respPost = await fetch(URL,{
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
        let respJson = await respPost.json();
        console.log(respJson)

    


  }
  
  
getWithFetch();
postWithFetch();
