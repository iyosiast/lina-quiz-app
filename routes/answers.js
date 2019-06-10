var express = require('express');
var router = express.Router();


router.get('/answers', function(req, res){
	var data = req.app.get('appQuestion');
	var pageQuestions = data.questions;


	res.render('answers', {
		pageTitle : 'IFC Preparation Quiz',
		answers: pageQuestions,
		pageID: 'IFC Preparation Quiz'
	});
});


module.exports = router;
