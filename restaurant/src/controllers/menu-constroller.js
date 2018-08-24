'use strict'

// modulos
//var fs = require('fs');
//var path = require('path');
var aqp = require('api-query-params');

// modelos
var Menus = require('../models/menu');


exports.list_all_dataProviders = async (req, res) => {
    

    const { filter, skip, limit, sort, projection } = aqp(req.query);
    
    

	Menus
	  .find(filter)
	  .skip(skip)
	  .limit(limit)
	  .sort(sort)
	  .select(projection)
	  .exec(async (err, result) => {
  
		if (err) {
		  return res.status(500).jsonp({message:"There was an internal error listing all the providers " + err});
		}
  		let count = await Menus.find().count()
  		res.status(200).jsonp({
		  size: limit,
		  page: skip,
		  total: count,
		  data: result
		});
	  });
  };


