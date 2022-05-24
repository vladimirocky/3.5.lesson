/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 * 1. Изучите пример (для наглядности в браузере установите задержку на несколько секунд)
 * 2. Добавть возможность в ручную устанавливать количество постов (число может задавать пользователь на странице)
 * 3. Вместе с постами запрашивать пользователей по их идентификаторам (поле userId из posts) используя
 * @param usersURL
 * 4. Вместе с постами выводите имя из поля username и город из поля city
 */

const usersURL = 'https://jsonplaceholder.typicode.com/users'
const button = document.querySelector('.action-button')
const radio = document.querySelector('.radio-buttons')

// вспомогательный обработчик очистки предидущих запросов
radio.addEventListener('click',()=>{
  const wraper = document.querySelector('.rectangles-wraper')
  wraper.innerHTML = ''
  const data = document.querySelector('.data-wraper')
  data.innerHTML = ''
  const status = document.querySelector('.status')
  status.innerHTML = ''
})

// вставка в код текущего состояния выполнения
function showCurrentStep(text) {
  const wrap = document.querySelector('.status')
  wrap.insertAdjacentHTML('beforeend' ,`<div>${text}</div>`)
}

function drawRectangles(){
  showCurrentStep('3 - рисуем прямоугольники' );

  const wraper = document.querySelector('.rectangles-wraper')
  wraper.innerHTML = ''
  
  for(let i = 0; i < 5; i++){
    const rectangle = document.createElement('div')
    rectangle.className = 'rectangle'
    wraper.appendChild(rectangle)
  }
}

function appendPosts({posts, users}){
  console.log(posts,users);
  // console.log(posts[0].userId);
  showCurrentStep('2 - вставляем данные в html' );

  const wraper = document.querySelector('.data-wraper')
  wraper.innerHTML = ''
  const num = Number(document.querySelector('.post-number').value);
  for(let i = 0; i < n; i++){
    const post = document.createElement('div')
    const id = posts[i].userId - 1;
    post.className = 'post'
    post.textContent = `${posts[i].title} -  ${users[id].username} from ${users[id].address.city}`;
    wraper.appendChild(post)
  }
}

async function sendRequest(){
  showCurrentStep('1 - отправляем запрос' );
  
  getData = async (URL) => {
    response = await fetch(URL);
    let data = await response.json();
      return data;
  }
  let test = {
    posts: await getData('https://jsonplaceholder.typicode.com/posts'),
    users: await getData(usersURL),
  }
  appendPosts(test);
}

async function showDifferentFunction(){
  const isBlockFunction = document.querySelector('input[name="type"]:checked').value;

  // 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
  isBlockFunction == 1 ? sendRequest() : await sendRequest()

  // 3 Отрисовываем прямоугольники
  drawRectangles()

}

button.addEventListener('click', showDifferentFunction)
