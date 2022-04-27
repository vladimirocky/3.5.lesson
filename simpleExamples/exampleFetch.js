/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 */

const URL = 'https://jsonplaceholder.typicode.com/posts';

async function getWithFetch() {
  let response = await fetch(URL);
  let arr = await response.json();
  console.log(arr);
  /**
   * как вы можете переписать promise chaining
   * через async await?
   */
  console.log(json); // получили массив из 100 постов
  // сделали запрос чтобы получить подробные данные поста №45
  let respon = await fetch(`${URL}/${json[45].id}`);
  let data = await respon.json();
  console.log(data);
}

async function postWithFetch() {
  // сохранение нового поста
  let response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'test post 53x',
      body: 'lorem',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let resp = await response.json();
  console.log(resp);
}

getWithFetch();
postWithFetch();
