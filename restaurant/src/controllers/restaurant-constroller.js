'use strict'

// modulos
var fs = require('fs');
var path = require('path');
var aqp = require('api-query-params');

// modelos
var Restaurants = require('../models/restaurant');
var Reviews = require('../models/reviews');
var Menus = require('../models/menu');
var Orders = require('../models/order');
//var Evento = require('../models/evento');

// acciones
function teste1 (req, res) {
	res.status(200).send({
		message: 'Probando el controlador de animales y la acción pruebas'
		
	});
}





function get (req, res) {
    Restaurants
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(401).send(e);   
    })
}

function updateRestaurant(req, res){
	var restaurantId = req.params.id;
	var update = req.body;

	Restaurants.findByIdAndUpdate(restaurantId, update, {new:true}, (err, restaurantUpdated) => {
		if(err){
			res.status(500).send({
				message: 'Error de solicitação'
			});
		}else{
			if(!restaurantUpdated){
				res.status(404).send({
					message: 'Não existe restaurante'
				});
			}else{
				res.status(200).send({restaurant: restaurantUpdated});
			}
		}
	});
}

function updateMenu(req, res){
	var menuId = req.params.id;
	var update = req.body;

	Menus.findByIdAndUpdate(menuId, update, {new:true}, (err, menuUpdated) => {
		if(err){
			res.status(500).send({
				message: 'Error de solicitação'
			});
		}else{
			if(!menuUpdated){
				res.status(404).send({
					message: 'Não existe menu'
				});
			}else{
				res.status(200).send({menu: menuUpdated});
			}
		}
	});
}



function getSlugId (req, res) {
	//	restaurantId: req.params.restaurantId
	 
		Restaurants
		.findById(
			req.params.id
		).exec((err, restaurants)  => {
			if(err){
				res.status(500).send({
					message: 'Error na solicitação'
				});
			}else{
				if(!restaurants){
					res.status(404).send({
						message: 'Não existe nenhum Reviews nesse registro'
					});
				}else{
					res.status(200).send({
						restaurants
					});
				}
			}
		})
	}

	function getMenuId (req, res) {
		//	restaurantId: req.params.restaurantId
		 
			Menus
			.findById(
				req.params.id
			).exec((err, menus)  => {
				if(err){
					res.status(500).send({
						message: 'Error na solicitação'
					});
				}else{
					if(!menus){
						res.status(404).send({
							message: 'Não existe nenhum Reviews nesse registro'
						});
					}else{
						res.status(200).send({
							menus
						});
					}
				}
			})
		}


function getSlug (req, res) {
//	restaurantId: req.params.restaurantId
var restaurantId = req.params.restaurantId;

	Restaurants
    .findOne({
       restaurantId
    }).exec((err, restaurants)  => {
        if(err){
			res.status(500).send({
				message: 'Error na solicitação'
			});
		}else{
			if(!restaurants){
				res.status(404).send({
					message: 'Não existe nenhum Reviews nesse registro'
				});
			}else{
				res.status(200).send({
					restaurants
				});
			}
		}
    })
}

function getReviews (req, res) {
	Reviews
    .find({
        restaurantId: req.params.restaurantId
    }).exec((err, reviews) => {
        if(err){
			res.status(500).send({
				message: 'Error na solicitação'
			});
		}else{
			if(!reviews){
				res.status(404).send({
					message: 'Não existe nenhum Reviews nesse registro'
				});
			}else{
				res.status(200).send({
					reviews
				});
			}
		}
    })
}

function getMenu (req, res) {
	Menus
    .find({
		restaurantId: req.params.restaurantId
    }).exec((err, menus) => {
        if(err){
			res.status(500).send({
				message: 'Error na solicitação'
			});
		}else{
			if(!menus){
				res.status(404).send({
					message: 'Não existe nenhum menu nesse registro'
				});
			}else{
				res.status(200).send({
					menus
				});
			}
		}
    })
}

/*
function getMenus (req, res) {
	Menus
		.find({	})
		.exec((err, menu) => {
				if(err){
			res.status(500).send({
				message: 'Error na solicitação'
			});
		}else{
			if(!menu){
				res.status(404).send({
					message: 'Não existe nenhum menu nesse registro'
				});
			}else{
				res.status(200).send({
					menu
				});
			}
		}
		})
}*/

function getMenusCategoria (req, res) {
	Restaurants
	.find({
	
		}, ' id name')
	.exec((err, menu)  => {
		if(err){
			res.status(500).send({
				message: 'Error na solicitação do método menu'
			});
		}else{
			if(!menu){
				res.status(404).send({
					message: 'Não existe nenhum Reviews nesse registro'
				});
			}else{
				res.status(200).send({
					menu
				});
			}
		}
	})
}

function getMenusCategoriaPorId (req, res) {
	Restaurants
	.findById( req.params.id , ' id name')
	.exec((err, menu)  => {
		if(err){
			res.status(500).send({
				message: 'Error na solicitação do método menu'
			});
		}else{
			if(!menu){
				res.status(404).send({
					message: 'Não existe nenhum Reviews nesse registro'
				});
			}else{
				res.status(200).send({
					menu
				});
			}
		}
	})
}



/*
const queryDocumentsPaginated = (collection, query, itensPerPage = 10, currentPage = 1) => {
	const cursor = collection.find(query)
		.limit(itensPerPage).skip( (currentPage - 1) * itensPerPage )
		.sort({ created_at: -1 })
	
	return new Promise( (resolve, reject) => {
		collection.find(query).count()
		.then( count => {
			const pager = {
				totalItems: count,
				currentPage,
				hasNext: count > ( (itensPerPage * currentPage))
			}
	
		cursor.toArray( (err, documents) => {
			resolve({ documents, pager })
			})
		
		})
	})
}
*/



function postRestaurant (req, res) {
	var restaurant = new Restaurants(req.body);

 		restaurant.save((err, restaurantStored) => {
			if(err){
				res.status(500).send({message: 'Error do servidor'});
			}else{
				if(!restaurantStored){
					res.status(404).send({message: 'restaurante não foi salvo'});
				}else{
					res.status(200).send({restaurant: restaurantStored});
				}
			}
		});

	
}

function postOrder (req, res) {
    var orders = new Orders(req.body);
    orders
    .save()
    .then(x => {
        res.status(201).send({ orders: x });
    }).catch(e => {
        res.status(401).send({ message: 'Falha ao cadastrar', data: e });   
    })
   
}


function postMenu (req, res) {
	var menu = new Menus(req.body);

 		menu.save((err, menuStored) => {
			if(err){
				res.status(500).send({message: 'Error do servidor'});
			}else{
				if(!menuStored){
					res.status(404).send({message: 'menu não foi salvo'});
				}else{
					res.status(200).send({menu: menuStored});
				}
			}
		});
}



function deleteRestaurant(req, res){
	var restaurantId = req.params.id;

	Restaurants.findByIdAndRemove(restaurantId, (err, restauranteRemoved) => {
		if(err){
			res.status(500).send({message: 'Error na solicitação'});
		}else{
			if(!restauranteRemoved){
				res.status(404).send({message: 'não foi possível deletar'});
			}else{
				res.status(200).send({restaurant: restauranteRemoved});
			}
		}
	});
}

function deleteMenu(req, res){
	var menuId = req.params.id;

	Menus.findByIdAndRemove(menuId, (err, menuRemoved) => {
		if(err){
			res.status(500).send({message: 'Error na solicitação'});
		}else{
			if(!menuRemoved){
				res.status(404).send({message: 'não foi possível deletar'});
			}else{
				res.status(200).send({menu: menuRemoved});
			}
		}
	});
}

/*function uploadImagem (req, res) {
	
	var restauranteId = req.params.id;
	var file_name = 'No subido...';

	

	if(req.files){
		var file_path = req.files.image.path;
		var file_split = file_path.split('\\');
		var file_name = file_split[2];

		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		res.status(200).send({
			file_path: file_path,
			file_split: file_split,
			file_name: file_name,
			ext_split: ext_split,
			file_ext: file_ext
		});
	}else{	
		res.status(200).send({message: 'não a solicitação de usuário'});
	}

		
}*/



function uploadImagem (req, res) {
	var restauranteId = req.params.id;
	var file_name = 'No subido...';

	if(req.files){
		var file_path = req.files.image.path;
		var file_split = file_path.split('\\');
		var file_name = file_split[2];

		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){

			Restaurants.findByIdAndUpdate(restauranteId, {image: file_name}, {new:true}, (err, restaurantUpdated) => {
				if(err){
					res.status(500).send({
						message: 'Error ao atualizar o restaurante'
					});
				}else{
					if(!restaurantUpdated){
						res.status(404).send({message: 'não houve atualização de restaurante'});
					}else{
						res.status(200).send({restaurant: restaurantUpdated, image: file_name});
					}
				}
			});

		}else{
			fs.unlink(file_path, (err) => {
				if(err){
					res.status(200).send({message: 'Extensão ou arquivo invalido'});
				}else{
					res.status(200).send({message: 'Extensão invalida'});
				}
			});
		}

	}else{
		res.status(200).send({message: 'No se han subido archivos'});
	}
}



function getImageFile(req, res){
	var imageFile = req.params.imageFile;
	var path_file = './uploads/restaurant/'+imageFile;

	fs.exists(path_file, function(exists){
		if(exists){
			res.sendFile(path.resolve(path_file));
		}else{
			res.status(404).send({message: 'Não existe imagem'});
		}
	});
}


function getImageFileMenu(req, res){
	var imageFile = req.params.imageFile;
	var path_file = './uploads/menu/'+imageFile;

	fs.exists(path_file, function(exists){
		if(exists){
			res.sendFile(path.resolve(path_file));
		}else{
			res.status(404).send({message: 'Não existe imagem'});
		}
	});
}


function uploadImagemMenu (req, res) {
	var menuId = req.params.id;
	var file_name = 'No subido...';

	if(req.files){
		var file_path = req.files.image.path;
		var file_split = file_path.split('\\');
		var file_name = file_split[2];

		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){

			Menus.findByIdAndUpdate(menuId, {image: file_name}, {new:true}, (err, menuUpdated) => {
				if(err){
					
					res.status(500).send({
						message: 'Error ao atualizar o menu'
					});
				}else{
					if(!menuUpdated){
						res.status(404).send({message: 'não houve atualização de menu'});
					}else{
						res.status(200).send({menu: menuUpdated, image: file_name});
					}
				}
			});

		}else{
			fs.unlink(file_path, (err) => {
				if(err){
					res.status(200).send({message: 'Extensão ou arquivo invalido'});
				}else{
					res.status(200).send({message: 'Extensão invalida'});
				}
			});
		}

	}else{
		res.status(200).send({message: 'No se han subido archivos'});
	}
}


/*function uploadImagem (req, res) {
	
	var restauranteId = req.params.id;
	var file_name = 'No subido...';
	if(req.files){
		var file_path = req.files.image.path;
		var file_split = file_path.split('\\');
		var file_name = file_split[2];

		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		res.status(200).send({
			file_path: file_path,
			file_split: file_split,
			file_name: file_name,
			ext_split: ext_split,
			file_ext: file_ext
		});
	}else{	
		res.status(200).send({message: 'não a solicitação de usuário'});
	}
		
}*/




module.exports = {
    teste1,
    get,
	getSlug,
	getSlugId,
	getMenuId,
    getReviews,
	getMenu,
//	getMenus,
	getMenusCategoria,
	getMenusCategoriaPorId,
	updateRestaurant,
	updateMenu,

    postRestaurant,
	postOrder,
	postMenu,
	deleteRestaurant,
	deleteMenu,
    uploadImagem,
	getImageFile,
	getImageFileMenu,
	uploadImagemMenu
	
  
};