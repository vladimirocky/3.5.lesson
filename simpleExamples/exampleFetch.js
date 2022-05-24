/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 */

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getWithFetch() {
  let response = await fetch(URL);
  let responseJson = await response.json();
  console.log(responseJson);
  let responsePost = await fetch(`${URL}/${responseJson[45].id}`);
  let result = await responsePost.json();
  console.log(result);
}

async function postWithFetch() {
  let postResponse = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      title: "test post 53x",
      body: "lorem",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(postResponse);
  let postJson = await postResponse.json();
  console.log(postJson);
}

getWithFetch();
postWithFetch();
