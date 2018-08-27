'use strict'

var express = require('express');
var controller = require('../controllers/restaurant-constroller');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/restaurant' });
var md_uploadMenu = multipart({ uploadDir: './uploads/menu' });

const router = express.Router();

//sistema

router.get('/teste', controller.teste1);
router.get('/restaurants', controller.get); 

router.get('/restaurants/:id', controller.getSlug);
router.get('/restaurants/:restaurantId/reviews', controller.getReviews);
router.get('/restaurants/:restaurantId/menu',  controller.getMenu);

router.post('/orders', controller.postOrder);


//admin Restaurant

//router.get('/menus', controller.getMenus); 

router.post('/admin-painel/criar', controller.postRestaurant);
router.put('/restaurant/:id', controller.updateRestaurant);



router.get('/listas', controller.get);
router.get('/admin-painel/edit/:id', controller.getSlugId);
router.delete('/restaurant/:id', controller.deleteRestaurant);

//salvar imagem restaurante
router.post('/upload/:id', [md_upload], controller.uploadImagem);

//mostrar imagem restaurante
router.get('/imageRestaurante/:imageFile',  controller.getImageFile);


// menu

router.post('/cria_menu', controller.postMenu);
router.get('/menuCategoria', controller.getMenusCategoria); 
router.get('/menuCategoria/:id', controller.getMenusCategoriaPorId); 
router.delete('/menu/:id', controller.deleteMenu);
router.put('/menu/:id', controller.updateMenu);


//Mostrar imagem menu
router.get('/imageMenu/:imageFile',  controller.getImageFileMenu);

//salvar imagem menu
router.post('/uploadMenu/:id', [md_uploadMenu], controller.uploadImagemMenu);

//para atualização do menu
router.get('/admin-painel/editMenu/:id', controller.getMenuId);




module.exports = router