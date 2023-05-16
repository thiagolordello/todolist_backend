const app = require('./app');
require('dotenv').config()
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Escutando na porta 3001');
});




// Use as variáveis conforme necessário no seu código
console.log(`Conecting in database-host ${host} with user ${user} and password ${password}`);


// const app = require('./app');

// app.listen(3001, () => {
//   console.log('Escutando na porta 3001');
// });