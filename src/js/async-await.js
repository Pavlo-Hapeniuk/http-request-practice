import axios from 'axios';

// const foo = async () => {
//   return 5;
// };

// foo().then(value => console.log(value)); // повертає проміс 5

// !=======================================

// const foo = async () => {};

// foo().then(value => {
//   console.log(value);
// }); // повертає проміс undefined

// !==================== Оператор await ===================

// const foo = async () => {
//   console.log('Before await');

//   const promiseValue = await new Promise(resolve => {
//     setTimeout(() => resolve(5), 2000);
//   });

//   console.log('After await', promiseValue);
// };

// foo();

// !==================== HTTP-запити ===================

// const fetchUsers = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users?_limit=3'
//   );
//   console.log(response.data);
//   return response.data;
// };

// fetchUsers()
//   .then(users => {
//     console.log(users);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// !==================== Конструкція try…catch ===================

// console.log('Before try...catch');

// try {
//   const result = 10 / 0;
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// }

// console.log('After try...catch');

// !==================== Обробка помилок ===================

// 1. Обробка помилок у самій функції (try...catch)

// const fetchUsers = async () => {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users?_limit=5'
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log('Помилка при отриманні користувачів:', error);
//   }
// };

// fetchUsers();

// 2. Обробка помилок у .catch() зовні

// const fetchUsers = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users?_limit=5'
//   );
//   return response.data;
// };

// fetchUsers()
//   .then(users => {
//     console.log(users);
//   })
//   .catch(error => {
//     console.log('Помилка:', error.message);
//   });

//   3. Обробка помилок в іншій асинхронній функції (try...catch)

// const fetchUsers = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users?_limit=5'
//   );
//   return response.data;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log('Помилка:', error.message);
//   }
// };

// doStuff();

// ! ==================== ПРАКТИКА (10 ЗАВДАНЬ) ======================

// 🔹 Рівень 1 (легкий)
// Створи async-функцію, яка повертає твоє ім’я

// const foo = async () => {
//   const myName = 'Pavlo';
//   return myName;
// };

// foo().then(name => {
//   console.log(name);
// });

// Зроби функцію з await Promise.resolve(100)

// async function getValue() {
//   const value = await Promise.resolve(100);
//   return value;
// }

// Зроби затримку 2 секунди і виведи "готово"

// async function delay(ms) {
//   await new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });

//   console.log('готово');
// }

// delay(2000);

// Виведи число з async функції через .then()

// getValue().then(res => {
//   console.log(res);
// });

// 🔹 Рівень 2 (середній)
// Зроби fetch запит до JSONPlaceholder (users)
// Виведи тільки імена користувачів
// Оброби помилку через try/catch

// const fetchUsers = async () => {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     return response.data;
//   } catch (error) {
//     console.log('Помилка:', error.message);
//   }
// };

// fetchUsers().then(users => {
//   if (!users) return;

//   users.forEach(user => {
//     console.log(user.name);
//   });
// });

// Зроби функцію, яка повертає пост за id

// async function fetchPost(id) {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// fetchPost(2)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// 🔹 Рівень 3 (складний)
// Зроби 2 запити: users + posts і виведи разом
// ⭐ Реальний проєкт:
// Створи функцію, яка:
// бере список користувачів
// бере їхні TODO
// об’єднує в структуру:
// [
//   {
//     user: "Leanne Graham",
//     todos: [...]
//   }
// ]

// ! =======================================
