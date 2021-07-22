//inicia app express
const express = require('express');
const app = express();


//Inicio Conexao com o Mongodb

const pass = '123';
const mongoose = require('mongoose');
const uri = "mongodb+srv://dbUser:"+pass+"@cluster0.sqyld.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Retorno de conexao com sucesso
mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco de dados MongoDB : '+'CARUPI');
});

//Retorno caso haja erro no banco
mongoose.connection.on('error',(err)=>{
    console.log('Erro ao conectar ao banco de dados MongoDB - Erro: '+ err);
});

//Fim Conexao com o Mongodb

//Tratamento caso o End point nao exista
app.get('/',function(req, res){
    res.send('End point invalido');
});


//Inicio Middleware

//Inicia o bodyparser 
const bodyParser = require ('body-parser');
app.use(bodyParser.json());

//Inicia as routes
const routes = require('./routes/api');
app.use('/api', routes);

//Tratamento de erro
app.use(function(err, req, res, next){
    console.log(err);
    //res.status(422) -> muda status 
    res.status(422).send({error: err.message});
});

//Fim Middleware

let port = 5000;
//process.env.port para heroku
app.listen(process.env.port || port, () => {
    console.log('Servidor em execucao port: ' + port);
});