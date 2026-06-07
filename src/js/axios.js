import axios from 'axios';

//! Синтаксис запиту
// axios({
//   method: 'get',
//   url: 'https://jsonplaceholder.typicode.com/users',
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

//! Cкорочена версія з викристанням - псевдонімів методів запитів
// axios
//   .get('https://jsonplaceholder.typicode.com/users?_limit=4')
//   .then(res => {
//     console.log(res);
//     console.log(res.data);
//     console.log(res.headers);
//     console.log(res.status);
//     console.log(res.statusText);
//     console.log(res.config);
//   })
//   .catch(err => console.log(err.message));

//! Kонфігурація за замовчуванням
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

// axios
//   .get('/users')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
// axios
//   .get('/posts')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
// axios
//   .get('/photos')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));

//! Заголовки за замовчуванням
// const myApiKey = 'secret-api-key-for-every-request';
// axios.defaults.headers.common['header-name'] = myApiKey;

// Як це працює?
// Замість "header-name" вказується потрібний заголовок, наприклад, "Authorization", "X-API-Key" тощо.
// Axios додає цей заголовок та його значення до кожного запиту, що позбавляє необхідності передавати його вручну щоразу.

// axios.defaults.headers.common['Authorization'] = myApiKey;

//! Параметри рядка запиту
// Можна створити параметри у вигляді об'єкта за допомогою класу URLSearchParams, а потім передати їх у запит:
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });
// axios
//   .get(`https://jsonplaceholder.typicode.com/users?${searchParams}`)
//   .then(response => console.log(response.data));

//   Але Axios дозволяє передавати параметри в окремому об'єкті через властивість params:
// axios('https://jsonplaceholder.typicode.com/users', {
//   params: {
//     _limit: 5,
//     _sort: 'name',
//   },
// }).then(res => console.log(res.data));

// ! 🧠 ПРАКТИКА (10 ЗАВДАНЬ)
// 1. Базовий GET

// Зроби запит на /users і виведи дані в консоль.
// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(response => console.log(response.data));

// 2. POST створення користувача

// Створи користувача з полями:

// name
// age
// axios
//   .post('https://jsonplaceholder.typicode.com/users', {
//     name: 'Pedro',
//     age: 27,
//   })
//   .then(response => console.log(response.data));

// 3. Обробка помилки

// Зроби запит на неправильний URL і оброби помилку.
// axios
//   .get('https://jsonplaceholder.typicode.com/use')
//   .then(response => console.log(response))
//   .catch(error => console.log(error.response.status));

// 4. Вивід status

// Отримай /users і виведи status відповіді.
// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(res => console.log(res.status));

// 5. Використання params

// Зроби запит з параметрами:

// page
// limit
// axios
//   .get('https://jsonplaceholder.typicode.com/posts', {
//     params: {
//       _page: 5,
//       _limit: 5,
//     },
//   })
//   .then(res => console.log(res.data));

// 6. baseURL

// Налаштуй axios так, щоб не писати домен у кожному запиті.

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.get('/posts').then(res => console.log(res.data));
// axios.get('/photos').then(res => console.log(res.data));
// axios.get('/users').then(res => console.log(res.data));

// 7. headers

// Додай Authorization token у всі запити.

// axios.defaults.headers.common['Authorization'] = 'token1234';

// 8. DELETE запит

// Видали користувача з id = 5.
// axios.delete('/users/5').then(res => console.log(res.status));

// 9. PUT / PATCH

// Онови дані користувача (ім'я або вік).
// axios
//   .put('/users/1', {
//     name: 'Pedro Alvarez',
//     username: 'Pelva',
//     email: 'Pelva@mtv.com',
//   })
//   .then(res => console.log(res.data));

// axios
//   .patch('/users/1', {
//     name: 'Constantino Velazkes',
//   })
//   .then(res => console.log(res.data));

// 10. 🔥 Міні-проєкт

// Зроби API-клієнт для “Users App”:

// отримати список користувачів
// додати користувача
// видалити користувача
// оновити користувача
// використовувати baseURL + params + headers

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'token123';

// function getUsers() {
//   axios
//     .get('/users')
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// }
// getUsers();

// function addUser(userParams) {
//   axios
//     .post('/users', userParams)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => console.log(error.message));
// }
// addUser({ name: 'test', username: 'test', email: 'test@test.com' });

// function deleteUser(id) {
//   axios
//     .delete(`/users/${id}`)
//     .then(response => console.log(response.status))
//     .catch(error => console.log(error.message));
// }
// deleteUser(10);

// function updateUserInfo(newUserParams) {
//   axios
//     .patch('/users/10', newUserParams)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message));
// }
// updateUserInfo({ email: 'new_email@test.com' });

// ! аналогічні дії - ОБГОРТКА В ОДИН API-СЕРВІС (як у реальних проєктах)
// const api = {
//   getUsers: () => axios.get('/users'),
//   addUser: data => axios.post('/users', data),
//   deleteUser: id => axios.delete(`/users/${id}`),
//   updateUserInfo: (id, data) => axios.patch(`/users/${id}`, data),
// };

// api.getUsers().then(response => console.log(response.data));
// api.addUser({ name: 'Hulio' }).then(response => console.log(response.data));
