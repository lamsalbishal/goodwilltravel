var express = require('express');
var router = express.Router();

var homeModel = require('../modles/home.modle');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: product });
  
});

router.get('/product',function(req,res,next){
  res.render('product')
});

router.get('/allhome',function(req,res,next)
	{
   
		homeModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

module.exports = router;
