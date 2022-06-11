/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 * 1. Изучите пример (для наглядности в браузере установите задержку на несколько секунд)
 * 2. Добавть возможность в ручную устанавливать количество постов (число может задавать пользователь на странице)
 * 3. Вместе с постами запрашивать пользователей по их идентификаторам (поле userId из posts) используя
 * @param usersURL
 * 4. Вместе с постами выводите имя из поля username и город из поля city
 */

 const usersURL = 'https://jsonplaceholder.typicode.com/users';
 const button = document.querySelector('.action-button');
 const radio = document.querySelector('.radio-buttons');
 const userId = document.getElementById("userID");
 const buttonPost = document.getElementById("PostButton");
 
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
 
 function drawRectangles(number){
   showCurrentStep('3 - рисуем прямоугольники' );
 
   const wraper = document.querySelector('.rectangles-wraper')
   wraper.innerHTML = ''
   
   for(let i = 0; i < number; i++){
     const rectangle = document.createElement('div')
     rectangle.className = 'rectangle'
     wraper.appendChild(rectangle)
   }
 }
 
 function appendPosts(posts){
   showCurrentStep('2 - вставляем данные в html' );
   const user = userId.value;
   
   const wraper = document.querySelector('.data-wraper')
   wraper.innerHTML = ''

        for(let i = 0; i < user; i++){
             const post = document.createElement('div')
             post.className = 'post'
             post.innerHTML = `<span style = "color: red">Имя:${posts[i].name}</span><br><span style = "color: green">Город:${posts[i].address.city}</span>`
             wraper.appendChild(post)
         }
    // 3 Отрисовываем прямоугольники
    drawRectangles(user);
 }
 
 function sendRequest(){
   showCurrentStep('1 - отправляем запрос' );
 
   return fetch(usersURL)
       .then( response => response.json())
       .then( data => appendPosts(data))
 }
 
 async function showDifferentFunction(){
   const isBlockFunction = document.querySelector('input[name="type"]:checked').value;
 
   // 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
   isBlockFunction == 1 ? sendRequest() : await sendRequest()
 
 }
 
 buttonPost.addEventListener('click',() => {
    if (userId.value > 10) {
        return;
    } else {
        showDifferentFunction();
    }
 });

//  button.addEventListener('click', showDifferentFunction)