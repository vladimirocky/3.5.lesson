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

function appendPosts(posts){
  showCurrentStep('2 - вставляем данные в html' );

  const wraper = document.querySelector('.data-wraper')
  wraper.innerHTML = ''
  
  for(let i = 0; i < 10; i++){
    const post = document.createElement('div')
    post.className = 'post'
    post.textContent = posts[i].title
    wraper.appendChild(post)
  }
}

function sendRequest(){
  showCurrentStep('1 - отправляем запрос' );

  return fetch('https://jsonplaceholder.typicode.com/posts')
      .then( response => response.json())
      .then( data => appendPosts(data) )
}

async function showDifferentFunction(){
  const isBlockFunction = document.querySelector('input[name="type"]:checked').value;

  // 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
  isBlockFunction == 1 ? sendRequest() : await sendRequest()

  // 3 Отрисовываем прямоугольники
  drawRectangles()

}

button.addEventListener('click', showDifferentFunction)