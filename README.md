# Introducao

Projeto desenvolvido por Arthur Alecsander, destinada ao um Teste de Conhecimento Específico - BACKEND, da empresa CARUPI.

A conexao com banco MongoDB ja esta configurado.

# Como rodar

Projeto desenvolvido com nodejs e mongodb.

Para rodar e necessario baixar o nodejs
- [ Nodejs](https://nodejs.org/en/download/current/  Nodejs")

Em seguida precisa do git
- [GIT](https://git-scm.com/downloads "GIT")

Faca o clone do repositorio utilizando o comando a seguir

	git clone

Abra o projeto na pasta e execute o comando a seguir para instalar os pacotes do nodejs necessarios

	npm install

Logo em seguida execute o comando para dar inicio a aplicacao

	npm start

Se tudo estiver correto, no console vai retornar as mensagens de conectado no banco. Em seguida podera utilizar as funcionalidades da API.

# Funcionalidades

O link da api para utilizar as funcionalidades: 

	http://localhost:5000/api/carros

Com ela poderemos utilizar os metodos POST, PUT, DELETE e GET.

### POST
Para utilizarmos o POST deve se passar um body.

Exemplo do JSON a ser utilizado no metodo POST

#####JSON
```json
{
	"marca": "Honda",
	"modelo": "Civic",
	"versao": "SI",
	"ano": 1995,
	"km": 294350,
	"cambio": "Manual",
	"preco" : 25000
}
```
### PUT
Para fazer a alteracao utilizando o metodo PUT, sera necessario passar o ID do carro a ser trocado no link.

	http://localhost:5000/api/carros/ID

Juntamente com um JSON no body

#####JSON
```json
{
	"marca": "Ford",
	"modelo": "Escort",
	"versao": "L",
	"ano": 1993,
	"km": 58000,
	"cambio": "Manual",
	"preco": 1000,
}
```
No caso do PUT voce podera alterar apenas um atributo ou mais:
```json
{
	"versao": "GL",
	"preco": 2000,
}
```


### DELETE
Para fazer a exclusao de um determinado carro, voce devera utilizar o ID do carro a ser deletado ao final do link da api.


	http://localhost:5000/api/carros/ID


### GET
Para fazer a listagem por inteiro de todos os carros, devera ser passado o link da seguinte forma:

	http://localhost:5000/api/carros

Caso deseje buscar um carro especifico, voce devera utilizar o ID do carro ao final do link da api

	http://localhost:5000/api/carros/ID

Caso deseje filtrar as buscas, pode passar como query string atraves do link

	http://localhost:5000/api/carros?
Apos do "?" pode se utilizar algumas variaveis para fazer o filtro, segue a lista, por fim um exemplo de uma filtro.
Se estiver utilizando um aplicativo para testar, pode colocar de forma mais facil.

------------
Filtra pela marca

	marca

------------
Filtra pelo modelo

	modelo

------------
Filtra pela versao

	versao

------------
Filtra pelo ano, podendo ser range. Caso coloque apenas anoInicio, ele ira fazer crescente daquela ano, caso anoFim decrescente e juntos fara entre as datas.

	anoInicio
	anoFim

------------
Filtra pela quilometragem

	km

------------
Filtra pelo tipo de cambio

	cambio

------------
Filtra pelo preco, podendo ser range. Caso coloque apenas precoInicio, ele ira fazer crescente daquela preco, caso precoFim decrescente e juntos fara entre os precos.

	precoInicio
	precoFim


------------


	http://localhost:5000/api/carros?marca=Honda&anoInicio=1995
