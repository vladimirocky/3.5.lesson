/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 * 1. Изучите пример (для наглядности в браузере установите задержку на несколько секунд)
 * 2. Добавть возможность в ручную устанавливать количество постов (число может задавать пользователь на странице)
 * 3. Вместе с постами запрашивать пользователей по их идентификаторам (поле userId из posts) используя
 * @param usersURL
 * 4. Вместе с постами выводите имя из поля username и город из поля city
 */


const usersURL = "https://jsonplaceholder.typicode.com/users";
const button = document.querySelector(".action-button");
const radio = document.querySelector(".radio-buttons");
const searchButton = document.querySelector(".setPosts_input-btn");
let postsShowed = 5;

// вспомогательный обработчик очистки предидущих запросов
radio.addEventListener("click", () => {
  const wraper = document.querySelector(".rectangles-wraper");
  wraper.innerHTML = "";
  const data = document.querySelector(".data-wraper");
  data.innerHTML = "";
  const status = document.querySelector(".status");
  status.innerHTML = "";
});

searchButton.addEventListener("click", () => {
  if (document.querySelector("#postsInput").value > 0) {
    return (postsShowed = document.querySelector("#postsInput").value);
  }
});

// вставка в код текущего состояния выполнения
function showCurrentStep(text) {
  const wrap = document.querySelector(".status");
  wrap.insertAdjacentHTML("beforeend", `<div>${text}</div>`);
}

function drawRectangles() {
  showCurrentStep("3 - рисуем прямоугольники");

  const wraper = document.querySelector(".rectangles-wraper");
  wraper.innerHTML = "";

  for (let i = 0; i < postsShowed; i++) {
    const rectangle = document.createElement("div");
    rectangle.className = "rectangle";
    wraper.appendChild(rectangle);
  }
}

function appendPosts(posts, users) {
  showCurrentStep("2 - вставляем данные в html");

  const wraper = document.querySelector(".data-wraper");
  wraper.innerHTML = "";

  for (let i = 0; i < postsShowed; i++) {
    const post = document.createElement("div");
    post.className = "post";
    post.textContent = `Пользователь ${users[posts[i].id].username}, ${
      users[posts[i].id].address.city
    }: ${posts[i].title}`;
    wraper.appendChild(post);
  }
}

async function sendRequest() {
  showCurrentStep("1 - отправляем запрос");
  let postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await postsResponse.json();
  let usersResponse = await fetch(usersURL);
  let usersList = await usersResponse.json();

  return appendPosts(posts, usersList);
}

async function showDifferentFunction() {
  const isBlockFunction = document.querySelector(
    'input[name="type"]:checked'
  ).value;

  // 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
  isBlockFunction == 1 ? sendRequest() : await sendRequest();

  // 3 Отрисовываем прямоугольники
  drawRectangles();
}

button.addEventListener("click", showDifferentFunction);
