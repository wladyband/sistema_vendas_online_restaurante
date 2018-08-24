'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;





mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/meat', { useMongoClient: true }) 
		.then(() => {
			console.log('A conexão com o banco de dados foi estabelecida com sucesso');
			
			app.listen(port, () => {
				console.log("O servidor local com o nó e o Express está funcionando corretamente ...");
			});
		})
		.catch(err => console.log(err));
