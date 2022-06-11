// формат json обьекта который приходит с сервера
const someJSON = `
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit"
}
`


const someData = {
  name: 'Test',
  age: 22,
  phone: '000-000-0'
}
console.log(someJSON);
// приведение объекта к json строке
const b = JSON.stringify(someData) // '{"name":"Test","age":22,"phone":"000-000-0"}'
console.log(b);
// парсинг json-строки
const a = JSON.parse(someJSON);
console.log(a);
// получаем объект
// {
//   name: 'Test', 
//   age: 22, 
//   phone: '000-000-0'
// }