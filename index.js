const app = require('./app');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT || 3000;

app.listen(port,"0.0.0.0", () => {
  console.log('Escutando na porta 3001');
});




// Use as variáveis conforme necessário no seu código
console.log(`Conectando ao banco de dados em ${host} com usuário ${user} e senha ${password}`);


// const app = require('./app');

// app.listen(3001, () => {
//   console.log('Escutando na porta 3001');
// });