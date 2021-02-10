# Semana OmniStack 05 - Back- end

## Packages Install
### Express
- yarn add express
É responsavel pelas rotas da nossa aplicação.  

### Mongoose
- yarn add mongoose
Usando servidor online Atlas MongoDB
```js
mongoose.connect('mongodb+srv://<user>:<password>@cluster0.nqgek.mongodb.net/<database>?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```
Se der erro em `app.list(3000)` no linux é só rodar 'sudo pkill node'

### Nodemon
- yarn add nodemon -D

### Socket.io
- yarn add socket.io

### Cors
- yarn add cors

## Docker
Usei docker em vez do servidor online

Update no apt:  
$ sudo apt-get update  
Remover versões antigas do docker:  
$ sudo apt-get remove docker-engine docker.io  
Instalar o docker:  
$ sudo apt install docker.io  

### [Criando servidor MongoDB][docker_mongo]
- docker pull tutum/mongodb

Criação de servidor especificando uma senha  
    docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_USER="premor" -e MONGODB_DATABASE="tweets" -e MONGODB_PASS="morpre" tutum/mongodb


[docker_mongo]: https://medium.com/dockerbr/mongodb-no-docker-dd3b72c7efb7