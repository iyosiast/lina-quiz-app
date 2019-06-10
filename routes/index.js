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
  	var dataFile1 = req.app.get('appQuestion');
	var questio = dataFile1.questions[req.params.questionid];
	var q1, q2, q3, q4;
	if (questio.option1 === questio.answer){
		q1 = '<button class="btn btn-danger btn-block btn-wrap-text">'+ questio.option1 +'</btn>';
	}
	else {
		q1 = '<button class="btn btn-outline-primary btn-block btn-wrap-text">'+ questio.option1 +'</btn>';
	}
	if (questio.option2 === questio.answer){
		q2 = '<button class="btn btn-danger btn-block btn-wrap-text">'+ questio.option2 +'</btn>';
	}
	else {
		q2 = '<button class="btn btn-outline-primary btn-block btn-wrap-text">'+ questio.option2 +'</btn>';
	}
	if (questio.option3 === questio.answer){
		q3 = '<button class="btn btn-danger btn-block btn-wrap-text">'+ questio.option3 +'</btn>';
	}
	else {
		q3= '<button class="btn btn-outline-primary btn-block btn-wrap-text">'+ questio.option3 +'</btn>';
	}
	if (questio.option4 === questio.answer){
		q4 = '<button class="btn btn-danger btn-block btn-wrap-text">'+ questio.option4 +'</btn>';
	}
	else {
		q4 = '<button class="btn btn-outline-primary btn-block btn-wrap-text">'+ questio.option4 +'</btn>';
	}
	res.send(`
		<link rel="stylesheet" href="/css/bootstrap.min.css">
    	 <div class="container-fluid content-row h-100">
      <div class="row">
                    <div class="col-sm-12 col-lg-12 text-center h-100">
                      <section class="card mb-5 bg-light">
                          <div class="card-header">
                            <h2 class="card-title">${questio.question}</h2>
                          </div>
                          <div class="card-body">
                            <div class="list-group list-group-flush">
                            ${q1}
                            ${q2}
                            ${q3}
                            ${q4}
                          </div>
                      </section><!-- card -->
                    </div>
      </div>
		`);
});

module.exports = router;
