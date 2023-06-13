# To Do List (Backend)

Este sistema permite o usuário por meio de login e senha, controlar suas tarefas registradas criando,editando e removendo as suas tasks.

## 🚀 Sua lista de tarefas para usar a qualquer hora em qualquer lugar.

Essas instruções permitirão que você obtenha uma cópia do projeto em operação no seu computador para fins de desenvolvimento e teste.



### 📋 Pré-requisitos

Banco de dados MySql instalado em docker ou local
Nodejs versão 16.0.0
Node Package Manager 
``
### 🔧 Instalação


1. Clone o repositório: Abra o terminal e digite o comando abaixo. 
```
git clone https://github.com/thiagolordello/todolist_backend.git
```

2. Entre no diretório criado, e instale as dependências do projeto:
```
cd todolist_backend/
```
```
npm install
```

3. Inicie a aplicação com o comando de script:
```
npm run debug
```  
  Se a aplicação tiver sido iniciada corretamente, haverá a seguinte mensagem ao iniciar      o serviço: 
   'starting `node index.js  Executando na porta 3001'. Em caso de erro repita o processo.

4. Com o serviço do MySql em execução, execute os scripts do sequelize para a criação do banco:
```
npm run setdb
```  
```
npm run seed
``` 

5. Verifique no MySql se o banco 'todolist_dev_bd' foi criado e se as tabelas foram populadas pelo último comando do passo anterior.

   Se estiver tudo ok, está pronto para uso, caso contrário repita os passos para a correta instalação da aplicação.
   
## ![computer](https://github.com/thiagolordello/todolist_backend/assets/20212304/7818fd10-09fd-4a9c-936f-662b1b393763)  Vamos a pratica! Utilização das rotas:

#### Atencao!

Para prosseguir com a utilização das rotas, você poderá optar por utilizar a aplicação em nuvem (ambiente já disponível e não precisa de instalação) ou em ambiente local (precisará instalar as dependências na raiz do projeto "/todolist_backend"). Nos exemplos de chamadas abaixo, elas estão com o apontamento local 'localhost'. Caso sua escolha seja fazer direto na API em nuvem, basta substituir o início de cada chamada, trocando o trecho  ```localhost:3001/"``` por ```https://to-do-list-backend-production-0a07.up.railway.app/"``` em cada chamada que for utilizar. 

Exemplo : 

Para a chamada que faz o get all das tarefas ao inves de usar ```localhost:3001/tasks/5``` use ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/5```



#### Vamos ao que interessa !

#### Registro de novo usuário POST /register:

Na rota post '/register', fazemos a criacao de um usuario informando um json com as chaves name e password no corpo da requisicao contendo os valores de nome de usuario e senha. Todas as rotas e o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. Se a requisicao for bem sucedida a api retornara um ```status code 201```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/register``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/register```

![Captura de tela de 2023-06-02 15-26-06](https://github.com/thiagolordello/todolist_backend/assets/20212304/fb2e45a6-67f6-4498-94f5-43fd67f40651)


#### Login na aplicacao (pre-requisito para as demais rotas) POST /login:

Na rota POST '/login', fazemos a criação de um usuário, informando um JSON com as chaves "name" e "password" no corpo da requisição, contendo os valores de nome de usuário e senha. Todas as rotas, assim como o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. Se a requisição for bem-sucedida, a API retornará o token, que é pré-requisito para as demais requisições. Portanto, assim que efetuar a requisição de login, copie a chave "token" para que possa usá-la nas próximas requisições. Como o nome sugere, este endpoint efetua o login fornecendo "name" e "password" no momento da requisição. Deve ser informado no body um json com as chaves name e password contendo os valores do nome do usuário a criar e a senha. Se a requisição for bem sucedida a api retornará um ```status code 200```. Caso nao seja bem sucedida, retornará outro codigo com a mensagem do erro corespondente.

```localhost:3001/login"``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/login```

![Captura de tela de 2023-06-02 15-17-47](https://github.com/thiagolordello/todolist_backend/assets/20212304/bd64288b-de60-45c4-967b-6b4e79c39709)


#### Listar todas as tarefas GET /tasks/iduser:

A rota get '/:id', realiza a consulta de todas as tarefas existentes para o usuario autenticado com senha e token por meio do id de usuario logado. No momento da chamada, deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 200```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/12``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/12```

![Captura de tela de 2023-06-02 11-18-18](https://github.com/thiagolordello/todolist_backend/assets/20212304/0a812f7b-8e48-459e-a02a-97c971cdf4d5)



#### Lista uma tarefa pelo id da tarefa GET /tasks/onetask/id_da_tarefa:

A rota GET '/onetask/:id' realiza a consulta de uma tarefa existente para o usuário autenticado pelo id da tarefa, utilizando senha e token. No header da requisição, deve ser informado o campo "Authorization" com o valor do token gerado após o login. Se a requisição for bem sucedida a api retornará um ```status code 200```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/onetask/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/onetask/10```

![Captura de tela de 2023-06-02 14-17-31](https://github.com/thiagolordello/todolist_backend/assets/20212304/6d1c9753-9c68-41b1-8e84-26f74e442b89)


#### Salvando uma nova tarefa POST /tasks :
A rota POST '/tasks',é a rota para a criacao de uma tarefa. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser criada e o status da task. Se a requisicao for bem sucedida a api retornara um ```status code 201```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/```

![Captura de tela de 2023-06-02 14-30-03](https://github.com/thiagolordello/todolist_backend/assets/20212304/7e32da1a-62f6-4327-b9f2-92ff8f6b3cdc)


#### Editando uma tarefa pelo id da tarefa PUT /id_da_tarefa :
A rota PUT '/:id' faz a alteracao de uma tarefa fornecendo o id da tarefa. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser editada e o status da task. Deve ser informado no header da requisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 204```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/10```

![Captura de tela de 2023-06-02 14-40-57](https://github.com/thiagolordello/todolist_backend/assets/20212304/386b65b0-b22f-4f19-ba2e-e037fbf168ae)


#### Removendo uma tarefa pelo id da tarefa DELETE /id_da_tarefa :
A rota DELETE '/:id' utilizamos para deletar uma tarefa com base no id informado. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 204```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/9``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/9``` 


## ![banco2](https://github.com/thiagolordello/todolist_backend/assets/20212304/2c3a6985-5eb4-412e-8af7-4269888b4f84) Arquitetura do Banco de Dados 

Para a estrutura desse projeto, foram idealizadas duas entidades relacionais onde estao dispostas as informacoes do sistema . Na entidade users armazemanos as informacoes de cadastro dos usuarios como name e password. Na entidade tasks_user, temos as informacoes diretamente ligadas as tarefas como a descricao, o status e a data de criacao (createdAt), alem do id_user que referencia a que usuario a tarefa pertence.   
Para a construcão da API utlizamos a tecnologia ORM Sequelize na orquestração do banco de dados MySql

![image](https://github.com/thiagolordello/todolist_backend/assets/20212304/aebf89eb-f2b6-47b3-9800-2268db43452c)

## ⚙️ Executando os testes

Os testes foram desenvolvidos com a biblioteca chai e chai-http. Nesta biblioteca fazemos o acesso direto aos endpoints, simulando uma real requisicao a API. Todos os testes estao baseados nos dados inseridos na execucao do seed que quando executado, popula o banco com uma carga inicial de dados que sera usados nos testes. Portanto e fundamental executar a completa instalacao do projeto incluindo a execucao dos scripts detalhados no topico de instalacao. Caso nao seja executada a instalacao por completo incluindo os scripts, os testes falharao por nao haver os dados que sao usados para comparacao nos testes.

Para a execucao dos testes sera necessario estar com aplicacao iniciada e obviamente ter sido executada a instalacao do projeto no topico acima de instalacao. Caso nao esteja iniciada, execute o seguinte comando de script.
```
npm run debug
```
Com a aplicacao rodando execute o comando para a execucao dos testes.
```
npm run test
```

## 🔩 Analise de cada teste

Todos os arquivos de teste estao no diretorio '/tests' localizado na raiz do projeto. Estao dividos em quatro arquivos com nomenclatura final '.test.js'. Os arquivos sao: login.test.js, tasks.getAll.test.js, userRegister.test.js e tasks.getOneTask.test.js . 

### No arquivo ```login.test.js"```, estao os testes referentes a rota POST /login. Os casos de teste sao os seguintes:



```Retorna o status 200,quando o login for bem sucedido!``` :

   Faz uma chamada post para a rota /login enviando name e password para efetuar o login. Se o valor informado de name e password estiverem registrados no banco a API retorna um status 200 com o body contendo os campos: name, token e id do usuario que sera usado na requisicao get all das tasks.

```Retorna o status 404,quando o login nao for bem sucedido!```

  Faz uma chamada post para a rota /login enviando name e password que nao existem no banco para efetuar o login. 
  

```Quando o nome nao for informado, retorna uma mensagem e o status 404```
  
  Faz uma chamada post para a rota /login enviando name vazio e password "" para efetuar o login.
  

```Quando a senha nao for informada, retorna uma mensagem e o status 404```

  Faz uma chamada post para a rota /login enviando somente name e campo password ausente para efetuar o login.  
  

```Quando o usuario informado nao for encontrado, retorna uma mensagem e o status 404```
  
  Faz uma chamada post para a rota /login enviando name e password com uma senha errada para efetuar o login.
  

```Quando o usuario e senha nao for informado, retorna uma mensagem e o status 400```
  
  Faz uma chamada post para a rota /login enviando name e password vazios "" para efetuar o login.
  
  

  
  ### No arquivo ```tasks.getAll.test.js"```, estao os testes referentes a rota GET /tasks/id_user. Os casos de teste sao os seguintes:

```Retorna o status 200,quando a requisicao get for bem sucedida e valida o retorno das tasks do usuario!```

  Faz a requisicao get para a rota /tasks/id_user para trazer todas as tarefas do usuario usuario logado. 

```Retorna o status 401 e mensagem, quando o token enviado no header nao e valido!```
  
  Faz a requisicao get para a rota /tasks/id_user enviando um token invalido no header para a rota /tasks/id_user para trazer todas as tarefas do usuario usuario logado.

```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisicao get para a rota /tasks/id_user nao enviando token para a rota /tasks/id_user para trazer todas as tarefas do usuario usuario logado.
  
  

  ### No arquivo ```tasks.getOneTask.test.js"```, estao os testes referentes a rota GET /tasks/onetask/id_da_tarefa. Os casos de teste sao os seguintes:

```Retorna o status 200,quando a requisicao get for bem sucedida e valida o retorno da task requisitada!```

  Faz a requisicao get para a rota /tasks/onetask/idTask passando o id da tarefa no header e o token gerado no login. 
  

```Retorna o status 401 e mensagem, quando o token enviado no header nao e valido!```

  Faz a requisicao get para a rota /tasks/onetask/idTask passando o id da tarefa no header e um token desconhecido.
    

```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisicao get para a rota /tasks/onetask/idTask passando o id da tarefa no header com o token ausente. 
  
  
  
  

  ### No arquivo ```userRegister.test.js"```, estao os testes referentes a rota POST /register que registra um novo usuario. Os casos de teste sao os seguintes:

```Retorna o status 201,quando a criacao for bem sucedida!```

   Faz a requisicao post com name e password para a rota /register.

```Quando somente a senha for informada, retorna uma mensagem de erro e o status 400```

   Faz a requisicao post com name vazio  e password para a rota /register.

```Quando somente o nome for informado, retorna uma mensagem de erro e o status 400```

   Faz a requisicao post com password vazio  e nome para a rota /register.

```Quando o usuario e a senha foram informados sem dados dentro (""), retorna uma mensagem e o status 400```

   Faz a requisicao post com name e password vazios para a rota /register.

```Quando o usuario e a senha nao foram informados no json, retorna uma mensagem e o status 500```
   
   Faz a requisicao post sem as chaves name e password para a rota /register.
   
   

 Todos os testes foram desenvolvidos pensando na mais real situacao possivel das chamadas a API. Ao optar por nao usar STUB na aplicacao, estamos fazendo chamadas diretas a API atraves da biblioteca CHAI-HTTP. Para estes casos de teste, foram utilizados os dados inseridos inicialmente na aplicacao por meio dos seeders que populam o banco. Para que nao comprometer a integridade do ambiente de testes, nao faca alteracoes no usuario joao pois nele estao baseados os casos de teste. Caso haja qualquer alteracao dos dados inseridos nesse usuario, ocorrerao erros de execucao.


## 🛠️ Construído com

Aqui estao as tecnologias que foram usadas para contruir o sistema:

* [Nodejs] - O framework web usado.
* [Sequelize] - ORM para geracao de banco de dados relacional Mysql
* [Chai] - Biblioteca utilizada para a geracao dos testes.
* [Chai-Http] - Biblioteca usada para a chamada em tempo real das requisicoes web a API.
* [body-parser] - Middleware usado em node para analisar as requisicoes http.
* [cors] - Utilizado para obter maior seguranca no trafego http.
* [dotenv] - Utilizado para ocultar as variaveis ambiente presentes no arquivo .env .
* [express] - Framework usado para auxiliar o trafego das rotas.
* [frisby] - Biblioteca js usada para escrever os testes da aplicacao.
* [jsonwebtoken] - Token utilizado na segunraca de login e nas demais rotas da aplicacao.
* [md5] - Criptografia aplicada na encriptacao de dados para salvar no banco.
* [moment] - Biblioteca usada para trabalhar com datas e horarios nos testes.
* [mysql2] - Biblioteca que permite a comumicacao com o banco mysql da aplicacao.
* [nodemon] - Utilizado para o ambiente de desenvolvimento evitando o restart da aplicacao a cada vez que alterado o codigo.
* [sequelize-cli] - Interface de linha de comando para o uso do sequelize.  



## ✒️ Autores

* **Desenvolvedor** - *Trabalho Inicial* - [thiagolordello]([https://github.com/linkParaPerfil](https://github.com/thiagolordello))


* **Colaboradores** - Alexsandro Xavier, Thiago Vieira e Logy.

## 📄 Licença

Este projeto tem fins apenas para estudo e demonstracao como portifolio pessoal. Esta vetado o uso para fins comerciais.

## 🎁 Expressões de gratidão

* Aqui eu gostaria de agradecer a todos que me ajudam e me ajudaram nesta construcao inportante pra minha carreira;
* Gostaria de agradecer primeiro a Deus por toda ajuda que tive e segundo lugar a minha familia que tanto me apoia nessa jornada do desenvolvimento. 🫂;
* Agradecimento tambem aos colegas de turma Alexsandro Xavier, Thiago Vieira e Logy. Sem ajuda de voces eu nao teria concluido. Meu sincero agradecimento a todos que me ajudaram a chegar onde cheguei ate hoje. Gratidao.
