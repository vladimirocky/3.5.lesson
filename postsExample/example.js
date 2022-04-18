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
  const inp = document.getElementById("numPost").value
  for(let i = 0; i < inp; i++){
    const rectangle = document.createElement('div')
    rectangle.className = 'rectangle'
    wraper.appendChild(rectangle)
  }
}

function appendPosts(posts){
  showCurrentStep('2 - вставляем данные в html' );
  
  const wraper = document.querySelector('.data-wraper')
  wraper.innerHTML = ''
  const inp = document.getElementById("numPost").value

  for(let i = 0; i < inp; i++){
    const post = document.createElement('div')
    post.className = 'post'
    post.textContent = posts[i].title
   // post.textContent = usersURL.id
   // post.city = usersURL.city
    wraper.appendChild(post)
  }
}

function boots(bot){
  showCurrentStep('2 - вставляем данные в html' );
  const wrap1 =  document.querySelector('.bots-wraper');
  wrap1.innerHTML = ''
  const inp = document.getElementById("numPost").value

  for(let i = 0; i < inp; i++){
    const post1 = document.createElement('div')
    
    post1.className = 'post1'
    post1.id = bot[i].id
    post1.textContent = bot[i].username + bot[i].address.city
    console.log(post1.id);
    wrap1.appendChild(post1)
  }
}
function sendRequest(){
  showCurrentStep('1 - отправляем запрос' );

   fetch('https://jsonplaceholder.typicode.com/posts')
      .then( response => response.json())
       
     // .then((json)=>{
     //   fetch(`${'https://jsonplaceholder.typicode.com/posts'}/${json.id}`)
     //   .then((response) => response.json())
        .then( data =>  appendPosts(data) )
    fetch(usersURL)
    .then(res => res.json())
    .then(sop => boots(sop))
    
      
      }
    
   

async function showDifferentFunction(){
  const isBlockFunction = document.querySelector('input[name="type"]:checked').value;

  // 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
  isBlockFunction == 1 ? sendRequest() : await sendRequest()

  // 3 Отрисовываем прямоугольники
  drawRectangles()

}

button.addEventListener('click', showDifferentFunction)