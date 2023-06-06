# To Do List (Backend)

Este sistema permite o usuario por meio de login e senha, controlar suas tarefas registradas no sistema criando,editando e removendo as tasks.

## 🚀 Sua lista de tarefas para usar a qualquer hora em todo lugar.

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.



### 📋 Pré-requisitos

Banco de dados MySql instalado em docker ou local
Nodejs versao 16.0.0
Node Pack Manager 
``
### 🔧 Instalação


1. Clone o repositorio: Abra o terminal e digite o comando abaixo. 
```
git clone https://github.com/thiagolordello/todolist_backend.git
```

2. Entre no diretorio criado, e instale as dependencias do projeto:
```
cd todolist_backend/
```
```
npm install
```

3. Inicie a aplicacao com o comando de script:
```
npm run debug
```  
  Se a aplicacao tiver sido iniciada corretamente, havera a seguinte mensagem ao iniciar      o servico: 
   'starting `node index.js  Executando na porta 3001'. Em caso de erro repita o processo.

4. Com o servico do MySql em execucao, execute os scripts do sequelize para a criacao do banco:
```
npm run setdb
```  
```
npm run seed
``` 

5. Verifique no MySql se o banco 'todolist_dev_bd' foi criado e se as tabelas foram populadas pelo ultimo comando do passo anterior.

   Se estiver tudo ok, esta pronto para uso, caso contrario repita os passos para a correta instalacao da aplicacao.
   
## ![computer](https://github.com/thiagolordello/todolist_backend/assets/20212304/7818fd10-09fd-4a9c-936f-662b1b393763)  Vamos a pratica! Utilização das rotas:

#### Atencao!

Para proseguir com a utlizacao das rotas, voce podera optar por utilizar a aplicacao em nuvem (ambiente ja disponivel e nao precisa de instalacao) ou em ambiente local (precisara instalar as dependencias na raiz do projeto "/todolist_backend"). Nos exemplos de chamadas abaixo, estao com o apontamento local. Caso sua escolha seja por fazer direto na API em nuvem, basta substituir o inicio de cada chamada trocando o trecho ```localhost:3001/"``` por ```https://to-do-list-backend-production-0a07.up.railway.app/"``` em cada chamada que for utilizar. 

Exemplo : 

Para a chamada get all das tarefas ao inves de usar ```localhost:3001/tasks/5``` use ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/5```



#### Registro de novo usuario POST /register:

Na rota post '/register', fazemos a criacao de um usuario informando um json com as chaves name e password no corpo da requisicao contendo os valores de nome de usuario e senha. Todas as rotas e o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. Se a requisicao for bem sucedida a api retornara um ```status code 201```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/register``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/register```

![Captura de tela de 2023-06-02 15-26-06](https://github.com/thiagolordello/todolist_backend/assets/20212304/fb2e45a6-67f6-4498-94f5-43fd67f40651)


#### Login na aplicacao (pre-requisito para as demais rotas) POST /login:

A rota post '/login' e a porta de entrada para as demais. Com excecao da rota post/register a login devera ocorrer antes das demais pois ela retornara o token que e pre requisito para as demais requisicoes. Portanto assim que efetuar a requisicao de login, copie a chave token para que possar usar nas proximas requisicoes. Como o nome sugere, este endpoint efetua o login fornecendo name e password no momento da requisicao. Deve ser informado no body um json com as chaves name e password contendo os valores do nome do usuario a criar e a senha. Se a requisicao for bem sucedida a api retornara um ```status code 200```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/login"``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/login```

![Captura de tela de 2023-06-02 15-17-47](https://github.com/thiagolordello/todolist_backend/assets/20212304/bd64288b-de60-45c4-967b-6b4e79c39709)


#### Listar todas as tarefas GET /tasks/iduser:

A rota get '/:id', realiza a consulta de todas as tarefas existentes para o usuario autenticado por senha e token por meio do id de usuario logado. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 200```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/12``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/12```

![Captura de tela de 2023-06-02 11-18-18](https://github.com/thiagolordello/todolist_backend/assets/20212304/0a812f7b-8e48-459e-a02a-97c971cdf4d5)



#### Lista uma tarefa pelo id da tarefa GET /tasks/onetask/id_da_tarefa:

A rota GET '/onetask/:id', realiza a consulta de uma tarefa existente para o usuario autenticado por senha e token por meio do id da tarefa. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 200```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/onetask/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/onetask/10```

![Captura de tela de 2023-06-02 14-17-31](https://github.com/thiagolordello/todolist_backend/assets/20212304/6d1c9753-9c68-41b1-8e84-26f74e442b89)


#### Salvando uma nova tarefa POST /tasks :
A rota POST '/tasks',e rota para a criacao de uma tarefa. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser criada e o status da task. Se a requisicao for bem sucedida a api retornara um ```status code 201```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/```

![Captura de tela de 2023-06-02 14-30-03](https://github.com/thiagolordello/todolist_backend/assets/20212304/7e32da1a-62f6-4327-b9f2-92ff8f6b3cdc)


#### Editando uma tarefa pelo id da tarefa PUT /id_da_tarefa :
A rota PUT '/:id' faz a alteracao de uma tarefa fornecendo o id da tarefa. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser criada e o status da task. Deve ser informado no header da requisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 204```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/10```

![Captura de tela de 2023-06-02 14-40-57](https://github.com/thiagolordello/todolist_backend/assets/20212304/386b65b0-b22f-4f19-ba2e-e037fbf168ae)


#### Removendo uma tarefa pelo id da tarefa DELETE /id_da_tarefa :
A rota DELETE '/:id' utilizamos para deletar uma tarefa com base no id informado. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login. Se a requisicao for bem sucedida a api retornara um ```status code 204```. Caso nao seja bem sucedida, retornara outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/9``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/9``` 


## ![banco2](https://github.com/thiagolordello/todolist_backend/assets/20212304/2c3a6985-5eb4-412e-8af7-4269888b4f84) Arquitetura do Banco de Dados 

Para a modelagem desse projeto, foi idealizado duas tabelas onde estao armazenados os dados. A entidade users guarda as informacoes de cadastro dos usuarios como name e password.   
Foi utilizado o ORM Sequelize para modelar os banco de dados utilizando a tecnologia MySql. Para esta aplicacao foi modelado as tabelas users e tasks_user . Na tabela 'users' temos as colunas: 'id','name', e 'password'. A coluna id e a chave esteageira. Na tabela tasks_user que se refere as tarefas do usuario temos as colunas: 'id' que e o identificador unico de registro de usuario e tambem e chave primaria,'id_user' e uma chave estrangeira que referencia a coluna 'id' da tabela 'users','descriptiom' que contem a descricao das tarefas,'status' que guarda o status da tarefa, created_at que guarda a hora de criacao de cada tarefa.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.
