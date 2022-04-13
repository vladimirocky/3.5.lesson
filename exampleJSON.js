// формат json обьекта который приходит с сервера

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
}

const someData = {
  name: 'Test',
  age: 22,
  phone: '000-000-0'
}


// привод объект к json строке
JSON.stringify(someData) // '{"name":"Test","age":22,"phone":"000-000-0"}'

JSON.parse('{"name":"Test","age":22,"phone":"000-000-0"}')
// {
//   name: 'Test', 
//   age: 22, 
//   phone: '000-000-0'
// }