var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	var data = req.app.get('appQuestion');
	var pageQuestions = data.questions;


	res.render('questions', {
		pageTitle : 'IFC Preparation Quiz',
		questions: pageQuestions,
		pageID: 'IFC Preparation Quiz'
	});
});
router.get('/:questionid', function(req, res){
  	var dataFile = req.app.get('appQuestion');
	var question = dataFile.questions[req.params.questionid];
	res.send(`
		<!--<link rel="stylesheet" type="text/css" href="/css/style.css">-->
		<h1>${question.question}</h1>
		<p>${question.option1}</p>
		<p>${question.option2}</p>
		<p>${question.option3}</p>
		<p>${question.option4}</p>
		`);
});

module.exports = router;
