const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port,"0.0.0.0", () => {
  console.log('Escutando na porta 3001');
});

